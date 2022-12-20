import styled, { keyframes } from 'styled-components';

const titlefade = keyframes`
from{
opacity: 0;
}
to{
  opacity: 1;
}
`;
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
export const StartPageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.span`
  font-family: ${p => p.theme.fonts.title};
  font-size: ${p => p.theme.fontSizes.ml};
  color: ${p => p.theme.colors.text};
  z-index: 300;
  opacity: 0;
  animation: ${titlefade} 2s 0.7s forwards ease-in-out;
  text-shadow: 1px 1px 2px black;
`;
export const TitleRight = styled(Title)`
  margin-left: 90px;
`;

export const StartLogo = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-30%);
  opacity: 0;
  animation: ${titlefade} 2s 0.9s forwards ease-in-out;
`;

export const PreTitle = styled(Title)`
  display: block;
  font-size: ${p => p.theme.fontSizes.l};
  text-align: center;
  margin-top: 50%;
  opacity: 0;

  animation: ${titlefade} 2s 0.1s forwards ease-in-out;
`;

export const Paw = styled.img`
  margin: 30px auto;
  opacity: 0;
  animation: ${paw} 2s 1s  4 forwards ease-in-out;

`;
