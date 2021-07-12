import React, { useState, useEffect } from 'react';
import testimonials from '../data/testimonials';
import { IStyled, ITheme, ITestimonial } from '../ts/interfaces/interfaces';
import TestimonialCard from '../components/Testimonials/TestimonialCard';
import styled from 'styled-components';
import { Device } from '../ts/enums/mediaBreakpoints';
interface IProps {
  theme: ITheme;
}
const S: IStyled = {
  CardContainer: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 30rem;

    justify-content: space-between;
    @media ${Device.tablet} {
    }
  `,
  Container: styled.div`
    color: ${({ theme }) => theme.color};
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  TestimonialHeader: styled.p`
    font-size: 1.5rem;
    font-family: ${({ theme }) =>
      `${theme.fontPrimary}, ${theme.fontFallback}`};
    font-weight: 600;
    @media ${Device.tablet} {
      font-size: 2rem;
    }
  `,
  TestimonialSubheader: styled.p`
    font-size: 1rem;
    margin-top: 0.5rem;
    font-family: ${({ theme }) =>
      `${theme.fontSecondary}, ${theme.fontFallback}`};
    @media ${Device.tablet} {
      font-size: 1.5rem;
    }
  `,
  TextBox: styled.div`
    width: 90%;
    @media ${Device.tablet} {
      margin-top: 2rem;
    }
  `,
};
const Testimonials = ({ theme }: IProps) => {
  const [step, setStep] = useState(1);
  const [testimonial, setTestimonial] = useState<ITestimonial>(
    testimonials[step],
  );
  useEffect(() => {
    setTestimonial(testimonials[step]);
  }, [step]);
  return (
    <S.Container>
      <S.TextBox>
        <S.TestimonialHeader>TESTIMONIALS</S.TestimonialHeader>
        <S.TestimonialSubheader>
          People I've worked with have said some nice things...
        </S.TestimonialSubheader>
      </S.TextBox>
      <S.CardContainer>
        <TestimonialCard
          testimonial={testimonial}
          theme={theme}
          step={step}
          setStep={setStep}
        />
      </S.CardContainer>
    </S.Container>
  );
};

export default Testimonials;
