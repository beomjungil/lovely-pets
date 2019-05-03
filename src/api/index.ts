import { PetProfileData } from '../store/state';
import api from './instance';

export const API = {
    cats: (offset: number) => api.get<PetProfileData[]>('/cat', {params: {offset}}),
    dogs: (offset: number) => api.get<PetProfileData[]>('/dog', {params: {offset}}),
};
