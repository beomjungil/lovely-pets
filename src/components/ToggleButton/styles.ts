import { animated } from 'react-spring';
import styled from 'styled-components';

export const ToggleWrapper = styled.div<{filter?: string}>`
   background: ${(props) => props.filter === 'cat' ? '#ffd52d' : '#a4642d'};
   border-radius: 5em;
   padding: .875rem;
   font-size: 1.75rem;
   position: relative;
   width: 8rem;
   display: flex;
   justify-content: space-between;
   align-items: center;
   box-sizing: border-box;
   cursor: pointer;
   user-select: none;
   transition: background 0.3s ease-out;
   box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.1), 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1)
`;

export const Button = styled(animated.div)`
  border-radius: 50%;
  background: white;
  position: absolute;
  height: 2.875rem;
  width: 2.875rem;
  top: 50%;
  z-index: 0;
`;

export const Label = styled(animated.div)`
  position: relative;
  z-index: 1;
  line-height: 1;
  height: 1em;
  width: 1em;
  padding-top: .5rem;
`;
