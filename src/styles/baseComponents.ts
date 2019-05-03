import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 .875rem;
  width: 100%;
  position: relative;
`;

export const PrimaryText = styled.span`
  color: ${(props) => props.theme.colors.primary};
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
