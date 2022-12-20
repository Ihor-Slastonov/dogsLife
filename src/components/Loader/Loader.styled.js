import styled, { keyframes } from 'styled-components';
import { ReactComponent as Paw } from '../../images/paw.svg';

const paw = keyframes`
0%{
opacity: 0;
  transform: scale(1);
}
50%{
  opacity: 1;
  transform: scale(1.2);
}
100%{
opacity: 0;
transform: scale(1);
}
`;

export const Spiner = styled(Paw)`
  display: block;
  margin: 0 auto;
  width: 40px;
  height: 40px;
  margin: 30px auto;
  opacity: 0;
  animation: ${paw} 1500ms infinite forwards ease-in-out;
`;
