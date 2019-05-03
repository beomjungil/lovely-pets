import React from 'react';
import { PetProfileData } from '../../../store/state';
import LazyImage from '../../LazyImage';
import * as Styled from './styles';


const PetProfile: React.FC<PetProfileData> = ({_id: id, imageUrl, age, name, gender}) => (
    <Styled.PetProfileWrapper>
        <LazyImage
            id={id}
            src={imageUrl}
        />
        <Styled.PetInfo>
            <div>
                <Styled.Name>{name}</Styled.Name>
                <Styled.Age>{age}</Styled.Age>
            </div>
            {gender === 'female' ? '♂' : '♀'}
        </Styled.PetInfo>
    </Styled.PetProfileWrapper>
);

export default PetProfile;
