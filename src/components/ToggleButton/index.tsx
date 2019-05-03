import React, { useCallback } from 'react';
import { useSpring, useSprings } from 'react-spring';
import { changeFilter } from '../../store/actionCreators';
import { FilterType } from '../../store/actionTypes';
import { useDispatch, useGlobalState } from '../../store/context';
import * as Styled from './styles';

interface ToggleOption {
    type: FilterType
    label: string
}

const OPTIONS: ToggleOption[] = [
    {
        type: 'dog',
        label: '🐶'
    },
    {
        type: 'cat',
        label: '😻'
    },
];

const ToggleButton: React.FC = () => {
    const selectedFilter = useGlobalState('filter');
    const dispatch = useDispatch();

    const toggleButtonAnimation = useSpring({
        transform: `translateY(-50%) translateX(${selectedFilter === 'cat' ? '3.875rem' : '-0.5rem'})`
    });
    const toggleLabelAnimations = useSprings(
        OPTIONS.length,
        OPTIONS.map(opt => ({
            opacity: selectedFilter === opt.type ? 1 : 0.5,
            transform: `scale(${selectedFilter === opt.type ? '1' : '0.75'})`
        }))
    );

    const handleToggleClick = useCallback(
        () => {
            if (selectedFilter === 'cat') {
                dispatch(changeFilter('dog'));
            } else {
                dispatch(changeFilter('cat'));
            }
        }
        , [selectedFilter]);

    return (
        <Styled.ToggleWrapper
            filter={selectedFilter}
            onClick={handleToggleClick}
        >
            <Styled.Button style={toggleButtonAnimation}/>
            {
                toggleLabelAnimations.map((props, i) => (
                    <Styled.Label
                        style={props}
                        key={OPTIONS[i].type}
                    >
                        {OPTIONS[i].label}
                    </Styled.Label>
                ))
            }
        </Styled.ToggleWrapper>
    );
};

export default ToggleButton;
