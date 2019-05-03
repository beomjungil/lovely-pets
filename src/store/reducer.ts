import {
    ActionTypes,
    API__FINISH_FETCHING,
    API__RECEIVED_DATA,
    API__START_FETCHING,
    CHANGE_FILTER
} from './actionTypes';
import { initialState } from './state';


export const reducer = (state: typeof initialState, action: ActionTypes) => {
    switch (action.type) {
        case CHANGE_FILTER: {
            return state.set('filter', action.filter);
        }
        case API__START_FETCHING: {
            return state.set('isFetching', true);
        }
        case API__FINISH_FETCHING: {
            return state.set('isFetching', false);
        }
        case API__RECEIVED_DATA: {
            return state.update(action.filter, data => data.concat(action.data));
        }
        default: {
            return state;
        }
    }
};
