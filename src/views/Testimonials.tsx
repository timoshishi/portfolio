import React, {useState, useEffect} from 'react'
import testimonials from '../data/testimonials'
import { IStyled, ITheme, ITestimonial } from '../ts/interfaces/interfaces'
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
  const [step, setStep] = useState(1)
  const [testimonial, setTestimonial] = useState<ITestimonial>(testimonials[step]);
useEffect(() => {
setTestimonial(testimonials[step])
}, [step])
  return (
    <S.Container>

    <h2>
      TESTIMONIALS
    </h2>
      <p>People I've worked with have said some nice things...</p>
      <S.CardContainer>
        <TestimonialCard testimonial={testimonial} theme={theme} step={step} setStep={setStep}/>
    </S.CardContainer>
    </S.Container>
    
  )
}


export default Testimonials
