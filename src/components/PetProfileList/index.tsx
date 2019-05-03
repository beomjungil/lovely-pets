import React, { useCallback, useEffect, useState } from 'react';
import { getPets } from '../../store/actionCreators';
import { useDispatch, useGlobalState } from '../../store/context';
import PetProfile from './PetProfile';
import * as Styled from './styles';

const SCROLL_OFFSET: number = 100;

const PetProfileList: React.FC = () => {
    const selectedFilter = useGlobalState('filter');
    const cats = useGlobalState('cats');
    const isFetching = useGlobalState('isFetching');
    const dispatch = useDispatch();
    const [shouldFetchData, setFetchCondition] = useState(false);

    const handleScroll = () => {
        setFetchCondition((window.innerHeight + window.pageYOffset + SCROLL_OFFSET) >= document.body.offsetHeight && !isFetching);
    };

    const fetchData = () => {
        dispatch(getPets(selectedFilter, cats.count()));
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        fetchData();
    }, []);

    useEffect(() => {
        if (shouldFetchData) {
            fetchData();
        }
    }, [shouldFetchData]);

    return (
        <Styled.ListWrapper>
            {cats.map((data) => (
                <PetProfile
                    key={data._id}
                    {...data}
                />
            ))}
            {
                isFetching && <p>Loading...</p>
            }
        </Styled.ListWrapper>
    );
};

export default PetProfileList;
