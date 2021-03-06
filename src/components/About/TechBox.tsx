import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { cardInfo } from '../../data/cardInfo';
import { IStyled, ITheme } from '../../ts/interfaces/interfaces';
import { Device } from '../../ts/enums/mediaBreakpoints';

const S: IStyled = {
  Wrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -1rem;
    @media ${Device.laptop} {
      margin-top: -2rem;
    }
  `,
  CardContainer: styled.div`
    border: 0.5px solid grey;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    background-color: #fafafa;
    box-shadow: 0.5px 0.5px 2px 0px rgba(0, 0, 0, 0.55);
    @media ${Device.laptop} {
      width: 85%;
    }
  `,

  CardDivider: styled.div`
    height: 0%;
    width: 80%;
    margin-left: 10%;
    border: 0.2px solid #d0d0d0;
    margin-top: 1.5rem;
    @media ${Device.laptop} {
      margin-left: 0%;
      margin-top: 0rem;
      height: 650px;
      width: 0px;
    }
  `,
};

interface IProps {
  theme: ITheme;
}
const TechBox = ({ theme }: IProps) => {
  return (
    <S.Wrapper>
      <S.CardContainer>
        {cardInfo.map((cardInfo, i) => (
          <React.Fragment key={`${cardInfo.title}_${i}`}>
            <Card cardInfo={cardInfo} theme={theme} />
            {(i === 0 && <S.CardDivider />) || (i === 1 && <S.CardDivider />)}
          </React.Fragment>
        ))}
      </S.CardContainer>
    </S.Wrapper>
  );
};

export default TechBox;
