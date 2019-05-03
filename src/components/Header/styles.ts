import styled from 'styled-components';

export const Header = styled.header`
  padding: 6rem 0 2.5rem;
  display: flex;
  justify-content: space-between;
  align-content: center;
  position: relative;
  z-index: 2;
  background: white;
`;

export const Title = styled.h1`
  margin-bottom: .25rem;
`;

export const Desc = styled.p`
  font-size: 1.125rem;
`;

export const ToggleButtonHolder = styled.div`
  position: absolute;
  right: 0;
  bottom: -4.25rem;
`;
