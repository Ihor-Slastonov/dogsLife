import styled from 'styled-components';

export const StartPageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 50%;
  width: 100%;
  
`;

export const Title = styled.span`
  font-family: ${p => p.theme.fonts.title};
  font-size: ${p => p.theme.fontSizes.ml};
  color: ${p => p.theme.colors.text};
  z-index: 300;
`;
export const TitleRight = styled(Title)`
  margin-left: 70px;
`;

export const StartLogo = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;
