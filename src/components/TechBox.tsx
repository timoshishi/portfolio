import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import device from '../styles/mediaBreakpoints';
import Card from './Card';
import { cardInfo } from '../data/cardInfo';
import { IStyled, ITheme } from '../ts/interfaces/interfaces';

const S: IStyled = {
  Wrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -1rem;
    @media ${device.laptop} {
      margin-top: -4rem;
    }
  `,
  CardContainer: styled.div`
    border: 0.5px solid grey;
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    background-color: #fafafa;
    box-shadow: 0.5px 0.5px 2px 0px rgba(0, 0, 0, 0.55);
    @media ${device.laptop} {
      width: 87%;
    }
  `,

  CardDivider: styled.div`
    height: 0%;
    width: 80%;
    border: 0.2px solid #d0d0d0;
    margin-top: 1.5rem;
    @media ${device.laptop} {
      margin-top: 0rem;
      height: 600px;
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

TechBox.propTypes = { theme: PropTypes.object.isRequired };

export default TechBox;
