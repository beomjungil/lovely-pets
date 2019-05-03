import React from 'react';
import { API } from '../api';
import {
    CHANGE_FILTER,
    API__START_FETCHING,
    API__FINISH_FETCHING,
    APIActionTypes,
    ChangeFilterAction,
    FilterType,
    APIStartFetchingAction,
    APIFinishFetchingAction, APIReceivedDataAction, API__RECEIVED_DATA, APIReceivedErrorAction, API__RECEIVED_ERROR,
} from './actionTypes';
import { PetProfileData } from './state';

export const changeFilter = (filter: FilterType): ChangeFilterAction => ({
    type: CHANGE_FILTER,
    filter
});

export const startFetching = (): APIStartFetchingAction => ({
    type: API__START_FETCHING
});

export const finishFetching = (): APIFinishFetchingAction => ({
    type: API__FINISH_FETCHING
});

export const receivedData = (filter: FilterType, data: PetProfileData[]): APIReceivedDataAction => ({
    type: API__RECEIVED_DATA,
    filter,
    data
});

export const receivedError = (error: any): APIReceivedErrorAction => ({
    type: API__RECEIVED_ERROR,
    error
});

export const getPets = (filter: FilterType, offset: number) =>
    (dispatch: React.Dispatch<APIActionTypes>) => {
        dispatch(startFetching());
        return API[filter](offset)
            .then((res) => {
                dispatch(receivedData(filter, res.data));
            })
            .catch((error) => {
                dispatch(receivedError(error));
            })
            .finally(() => {
                dispatch(finishFetching());
            });
    };
