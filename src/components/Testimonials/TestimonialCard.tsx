import React from 'react'
import { IStyled, ITestimonial } from '../../ts/interfaces/interfaces'
import styled from 'styled-components'
const S: IStyled = {
  Container: styled.div`
  width: 25%;
  margin-left: 2rem;
  margin-right: 2rem;
  `,
  ProfileImage: styled.img`
  max-height: 100px;
  `,
  TestimonialText: styled.p`
  
  `

}


interface IProps {
  testimonial: ITestimonial
}
const TestimonialCard = ({ testimonial }: IProps) => {
  const { name, photoUrl, text, position } = testimonial
  return (
    <S.Container>
      <p>{name}</p>
      <S.ProfileImage src={photoUrl} alt={name} />
      <p>{text}</p>
      <p>{position}</p>
    </S.Container>
  )
}

export default TestimonialCard
