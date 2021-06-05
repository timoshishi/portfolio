import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import device from '../styles/mediaBreakpoints';
import { IStyled, ITheme } from '../ts/interfaces/interfaces';

const S: IStyled = {
  Period: styled.span`
    color: '#FF4500';
  `,
  TextBox: styled.div`
    max-width: 70%;
    text-align: center;
    margin-bottom: 3%;
    align-self: center;
    @media ${device.laptop} {
      max-width: 80%;
    }
  `,
  HeaderText: styled.h1`
    font-family: 'Rubik', sans-serif;
    font-size: 2rem;
    margin-top: 10%;
    margin-bottom: 5%;
    font-weight: 500;
    color: ${({ theme }) => theme.color};
    @media ${device.laptop} {
      font-size: 3.5rem;
      margin-top: 0%;
      margin-bottom: 0%;
    }
  `,
  SubHead: styled.p`
    font-family: sans-serif;
    font-size: 2rem;
    font-weight: 300;
    display: none;
    color: ${({ theme }) => theme.color};
    @media ${device.laptop} {
      display: inline-block;
      margin-top: 1rem;
      margin-bottom: 5%;
    }
  `,
};
interface IProps {
  theme: ITheme;
}
const HeroText = ({ theme }: IProps) => {
  return (
    <S.TextBox>
      <S.HeaderText theme={theme}>
        i make things<S.Period>.</S.Period>
      </S.HeaderText>
      <S.SubHead theme={theme}>front end, back end, full stack</S.SubHead>
    </S.TextBox>
  );
};

HeroText.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default HeroText;
