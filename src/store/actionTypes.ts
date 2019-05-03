import { PetProfileData } from './state';

export const CHANGE_FILTER = 'CHANGE_FILTER';
export const API__START_FETCHING = 'api/START_FETCHING';
export const API__FINISH_FETCHING = 'api/FINISH_FETCHING';
export const API__RECEIVED_DATA = 'api/RECEIVED_DATA';
export const API__RECEIVED_ERROR = 'api/RECEIVED_ERROR';

export type FilterType = 'cats' | 'dogs';

export interface ChangeFilterAction {
    type: typeof CHANGE_FILTER
    filter: FilterType
}

export interface APIStartFetchingAction {
    type: typeof API__START_FETCHING
}

export interface APIFinishFetchingAction {
    type: typeof API__FINISH_FETCHING
}

export interface APIReceivedDataAction {
    type: typeof API__RECEIVED_DATA
    filter: FilterType
    data: PetProfileData[]
}

export interface APIReceivedErrorAction {
    type: typeof API__RECEIVED_ERROR
    error: any
}

export type APIActionTypes =
    | APIStartFetchingAction
    | APIFinishFetchingAction
    | APIReceivedDataAction
    | APIReceivedErrorAction

export type ActionTypes =
    | ChangeFilterAction
    | APIActionTypes

