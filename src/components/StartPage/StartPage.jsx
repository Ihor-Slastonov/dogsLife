import {
  Title,
  StartPageWrapper,
  StartLogo,
  TitleRight,
} from './StartPage.styled';

export const StartPage = () => {
    return (
      <StartPageWrapper>
        <Title>Dog</Title>
        <TitleRight>Life</TitleRight>
        <StartLogo src={require('images/dog.png')} alt="dog" width="80px" />
      </StartPageWrapper>
    );
}