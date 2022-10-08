import React from 'react';
import { IStyled, ITestimonial, ITheme } from '../../ts/interfaces/interfaces';
import styled from 'styled-components';
import { Device } from '../../ts/enums/mediaBreakpoints';
interface SliderProps {
  theme: ITheme;
  current: boolean;
}
const S: IStyled = {
  Container: styled.div`
    margin-left: 2rem;
    margin-right: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    @media ${Device.tablet} {
      width: 70%;
      margin-top: 1rem;
      height: 30rem;
    }
  `,
  TestimonialName: styled.p`
    margin-top: 1rem;
    font-weight: 600;
    @media ${Device.tablet} {
      font-size: 1.3rem;
      font-family: ${({ theme }) => `${theme.fontPrimary}, ${theme.fontFallback}`};
    }
  `,
  ProfileImage: styled.img`
    max-height: 150px;
    margin-top: 2rem;
    @media ${Device.tablet} {
      margin-top: 2rem;
    }
  `,
  TextBox: styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    @media ${Device.tablet} {
      width: 60%;
    }
  `,
  TestimonialText: styled.p`
    font-family: ${({ theme }) => `${theme.fontSecondary}, ${theme.fontFallback}`};
    @media ${Device.tablet} {
      font-size: 1.3rem;
    }
  `,
  SliderDot: styled.div<SliderProps>`
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: ${({ theme, current }) => (current ? theme.purp : 'rgba(117, 16, 247, 0.2)')};
    &:hover {
      cursor: pointer;
    }
  `,
  SliderBox: styled.div`
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 1rem;
  `,
  PositionText: styled.p`
    font-size: 1.1rem;
    margin-top: 0.5rem;
    font-weight: 500;
    font-style: italic;
    @media ${Device.tablet} {
      margin-top: 0rem;
    }
  `,
};

interface IProps {
  testimonial: ITestimonial;
  theme: ITheme;
  step: number;
  setStep: (step: number) => void;
}
const TestimonialCard = ({ testimonial, theme, step, setStep }: IProps) => {
  const { name, photoUrl, text, position } = testimonial;
  return (
    <S.Container>
      <S.ProfileImage src={photoUrl} alt={name} />
      <S.TextBox>
        <S.TestimonialText>{text}</S.TestimonialText>
      </S.TextBox>
      <S.TestimonialName theme={theme}>{name}</S.TestimonialName>
      <S.PositionText>{position}</S.PositionText>
      <S.SliderBox>
        <S.SliderDot onClick={() => setStep(0)} current={step === 0} />
        <S.SliderDot onClick={() => setStep(1)} current={step === 1} />
        <S.SliderDot onClick={() => setStep(2)} current={step === 2} />
      </S.SliderBox>
    </S.Container>
  );
};

export default TestimonialCard;
