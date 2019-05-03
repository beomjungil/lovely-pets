import express from 'express';
import CATS from './data/cat.json';
import DOGS from './data/dog.json';

const app = express();
const PAGE_LIMIT: number = 20;

interface IndexData {
    startIndex: number
    endIndex: number
}

function getIndexByPage(offsetParam?: string): IndexData {
    if (!offsetParam) {
        return {startIndex: 0, endIndex: PAGE_LIMIT};
    }
    const startIndex = parseInt(offsetParam, 10);
    const endIndex = startIndex + PAGE_LIMIT;
    return {startIndex, endIndex};
}

app.all('/*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
});

app.get('/cat', (req, res) => {
    const {startIndex, endIndex} = getIndexByPage(req.query.offset);
    res.json(CATS.slice(startIndex, endIndex));
});

app.get('/dog', (req, res) => {
    const {startIndex, endIndex} = getIndexByPage(req.query.offset);
    res.json(DOGS.slice(startIndex, endIndex));
});

app.listen(3030, () => {
    console.log('Lovely Pet server started on port 3030');
});
