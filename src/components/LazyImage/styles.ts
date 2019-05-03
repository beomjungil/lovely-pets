import styled from 'styled-components';

export const Image = styled.div<{ isLoaded: boolean }>`
    display: block;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: ${(props) => props.theme.borderRadius};
    padding-top: 100%;
    position: relative;
    overflow: hidden;
    
    &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: #f5f5f5;
        top: 0;
        left: 0;
        opacity: 1;
        transition: opacity 0.15s ease-out;
    }
    
    ${({isLoaded}) => isLoaded && `
        &:before {
            opacity: 0;
        }
    `}
`;

export const ImageHolder = styled.div`
  width: 100%;
  position: relative;
`;
