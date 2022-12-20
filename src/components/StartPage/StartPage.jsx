import { Loader } from 'components/Loader/Loader';
import {
  Title,
  StartPageWrapper,
  StartLogo,
  TitleRight,
  PreTitle,
} from './StartPage.styled';


export const StartPage = () => {
  return (
    <>
      <PreTitle>Welcome to</PreTitle>
      <StartPageWrapper>
        <Title>Dog's</Title>
        <TitleRight>Life</TitleRight>
        <StartLogo src={require('images/dog.png')} alt="dog" width="80px" />
      </StartPageWrapper>
      <Loader/>
    </>
  );
}