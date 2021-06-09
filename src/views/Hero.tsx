import styled from 'styled-components';
import { avatar } from '../assets/images';
import { IStyled, ITheme } from '../ts/interfaces/interfaces';
import Computer from '../components/Hero/Computer';
import HeroText from '../components/Hero/HeroText';
import { Device } from '../ts/enums/mediaBreakpoints';

const S: IStyled = {
  HeroWrapper: styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    align-content: center;
    justify-content: center;
    width: 100%;
    margin-top: 15%;
    @media ${Device.laptop} {
      justify-content: flex-end;
      height: 90%;
      width: 100%;
      bottom: 0%;
      margin-top: 5%;
    }
  `,

  ImageContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-content: space-between;
    justify-content: flex-end;
    position: relative;
    height: 100%;
    min-width: 80%;
    max-width: 100%;
    z-index: 1;
  `,

  Avatar: styled.img``,
  AvatarBox: styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    z-index: 5;
    max-height: 10%;
    margin-bottom: 10%;
    @media ${Device.laptop} {
      max-height: 30%;
      margin-bottom: 5%;
    }
  `,

  CompContainer: styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
  `,

  CompWrapper: styled.div`
    max-width: 100%;
    min-width: 100%;
    @media ${Device.laptop} {
      max-width: 40%;
      min-width: 40%;
    }
  `,
};
interface IProps {
  theme: ITheme;
}
const Hero = ({ theme }: IProps) => {
  return (
    <S.HeroWrapper id='home'>
      <S.ImageContainer>
        <HeroText theme={theme} />
        <S.AvatarBox>
          <S.Avatar src={avatar} />
        </S.AvatarBox>
        <S.CompContainer>
          <S.CompWrapper>
            <Computer
              path={theme.contrast}
              background={theme.contrastSecondary}
            />
          </S.CompWrapper>
        </S.CompContainer>
      </S.ImageContainer>
    </S.HeroWrapper>
  );
};

export default Hero;
