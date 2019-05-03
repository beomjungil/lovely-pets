import styled from 'styled-components';

export const PetProfileWrapper = styled.div`
  width: calc(25% - 1.75rem);
  box-shadow: 0 .25rem 1rem rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 1rem;
  margin: 0.875rem;
  background: white;
`;

export const PetInfo = styled.div`
  margin-top: .875rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.125rem;
`;

export const Name = styled.span`
  font-weight: 700;
  font-size: 1.25rem;
`;

export const Age = styled.span`
  display: inline-block;
  opacity: .75;
  margin-left: .5rem;
`;
