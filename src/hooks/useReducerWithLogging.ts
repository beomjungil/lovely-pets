import { Dispatch, Reducer, ReducerAction, ReducerState, useReducer } from 'react';

function useReducerWithLogging<R extends Reducer<any, any>>(
    reducer: R,
    initialState: ReducerState<R>,
): [ReducerState<R>, Dispatch<ReducerAction<R>>] {
    const reducerWithLogging = (state: ReducerState<R>, action: ReducerAction<R>) => {
        console.log(`[REDUCER: ${action.type}]`, {action, prevState: state.toJS()});
        return reducer(state, action);
    };
    return useReducer(reducerWithLogging, initialState);
}

export default useReducerWithLogging;
