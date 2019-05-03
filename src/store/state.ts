import Immutable from 'immutable';
import { FilterType } from './actionTypes';

export interface PetProfileData {
    _id: string
    imageUrl: string
    age: number,
    name: string
    gender: 'female' | 'male'
}

export interface IGlobalState {
    filter: FilterType
    isFetching: boolean
    cats: Immutable.List<PetProfileData>
    dogs: Immutable.List<PetProfileData>
}

class GlobalState extends Immutable.Record<IGlobalState>({
    filter: 'cats',
    isFetching: false,
    cats: Immutable.List<PetProfileData>([]),
    dogs: Immutable.List<PetProfileData>([])
}) {}

export const initialState = new GlobalState();
