import React from 'react'
import { linkedin, github, paperPlane } from '../../assets/images/logos';
import styled from 'styled-components';
import { Device } from '../../ts/enums/mediaBreakpoints';
import { IStyled } from '../../ts/interfaces/interfaces';
const S: IStyled = {

  LogoSection: styled.div`
    max-height: 15rem;
    margin: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vh;
    @media ${Device.tablet} {
      justify-content: center;

      max-height: 5rem;
    }
  `,
  LogoWrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    margin-right: 2rem;
    @media ${Device.tablet} {
      margin-left: 1rem;
      margin-right: 1rem;
    }
  `,
  Logo: styled.img`
    max-height: 3rem;
    @media ${Device.tablet} {
      max-height: 3rem;
    }
  `,

  LogoLabel: styled.p`
    color: #fafafa;
    font-size: 1.2rem;
    margin-top: 0.5rem;
    font-weight: 500;
    font-family: Rubik;
    @media ${Device.tablet} {
      font-size: 1.8rem;
    }
  `,
};
const FooterLogos = () => {
  return (
        <S.LogoSection>
        <S.LogoWrapper>
          <a href='https://github.com/timoshishi' target='blank'>
            <S.Logo src={github} alt='github' />
          </a>
        </S.LogoWrapper>
        <S.LogoWrapper>
          <a href='https://www.linkedin.com/in/timfrrst/' target='blank'>
            <S.Logo src={linkedin} alt='linkedin' />
          </a>
        </S.LogoWrapper>
        <S.LogoWrapper>
          <a href='mailto:timfrrst@gmail.com' target='blank'>
            <S.Logo src={paperPlane} alt='email' />
          </a>
        </S.LogoWrapper>
      </S.LogoSection>
  )
}

export default FooterLogos
