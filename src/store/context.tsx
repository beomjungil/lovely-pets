import React, { useContext, useEffect } from 'react';
import useReducerWithLogging from '../hooks/useReducerWithLogging';
import { ActionTypes } from './actionTypes';
import { IGlobalState, initialState } from './state';
import { reducer } from './reducer';

export type Thunk = (dispatch: React.Dispatch<ActionTypes>, state: IGlobalState) => void;

const augmentDispatch = (dispatch: React.Dispatch<ActionTypes>, state: IGlobalState) =>
    (input: Thunk | ActionTypes) =>
        input instanceof Function ? input(dispatch, state) : dispatch(input);

const stateCtx = React.createContext(initialState);
const dispatchCtx = React.createContext((() => 0) as React.Dispatch<Thunk | ActionTypes>);

export const Provider: React.FC = ({children}) => {
    const [state, dispatch] = useReducerWithLogging(reducer, initialState);
    useEffect(() => {
        console.log('[REDUCER: STATE CHANGED]', state.toJS());
    });

    return (
        <dispatchCtx.Provider value={augmentDispatch(dispatch, state)}>
            <stateCtx.Provider value={state}>
                {children}
            </stateCtx.Provider>
        </dispatchCtx.Provider>
    );
};

export const useDispatch = () => useContext(dispatchCtx);

export const useGlobalState = <K extends keyof IGlobalState>(property: K) => {
    const state = useContext(stateCtx);
    return state[property];
};
