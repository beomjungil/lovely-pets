import React from 'react';
import { Container, PrimaryText, Row } from '../../styles/baseComponents';
import ToggleButton from '../ToggleButton';
import * as Styled from './styles';

const Header: React.FC = () => (
    <Styled.Header>
        <Container>
            <Row>
                <div>
                    <Styled.Title>
                        Lovely
                        {' '}
                        <PrimaryText>
                            Pets
                        </PrimaryText>
                    </Styled.Title>
                    <Styled.Desc>Find cute pets from here. Especially Cats and Dogs</Styled.Desc>
                </div>
                <Styled.ToggleButtonHolder>
                    <ToggleButton/>
                </Styled.ToggleButtonHolder>
            </Row>
        </Container>
    </Styled.Header>
);

export default Header;
