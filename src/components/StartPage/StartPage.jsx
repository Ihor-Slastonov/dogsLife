import {
  Title,
  StartPageWrapper,
  StartLogo,
  TitleRight,
  PreTitle,
  Paw,
} from './StartPage.styled';

export const StartPage = () => {
  return (
    <>
      <PreTitle>Welcom to</PreTitle>
      <StartPageWrapper>
        <Title>Dog's</Title>
        <TitleRight>Life</TitleRight>
        <StartLogo src={require('images/dog.png')} alt="dog" width="80px" />
      </StartPageWrapper>
      <Paw src={require('images/paw.png')} alt="paw" width="40" />
    </>
  );
}