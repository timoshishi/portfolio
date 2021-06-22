import React from 'react'
import testimonials from '../data/testimonials'
import { IStyled, ITheme } from '../ts/interfaces/interfaces'
import TestimonialCard from '../components/Testimonials/TestimonialCard'
import styled from 'styled-components'
import { Device } from '../ts/enums/mediaBreakpoints'
interface IProps {
  theme: ITheme
}
const S: IStyled = {
  CardContainer: styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${Device.tablet} {
    width: 80%;
  }
  `,
  Container: styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  `
}
const Testimonials = ({ theme }: IProps) => {
  return (
    <S.Container>

    <h1>
      TESTIMONIALS
    </h1>
      <p>People I've worked with have said some nice things...</p>
      <S.CardContainer>
      {testimonials.map(testimonial => <TestimonialCard testimonial={testimonial} />)}
    </S.CardContainer>
    </S.Container>
    
  )
}


export default Testimonials
