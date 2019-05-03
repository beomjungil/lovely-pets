import React from 'react';
import { GlobalStyles } from '../styles/globalStyles';
import Header from './Header';
import PetProfileList from './PetProfileList';

const App: React.FC = () => (
    <div>
        <Header/>
        <PetProfileList/>
        <GlobalStyles/>
    </div>
);

export default App;
