import styled from 'styled-components';
import TechItem from './TechItem';
import { IStyled, CardInfo, ITheme } from '../../ts/interfaces/interfaces';
import { Device } from '../../ts/enums/mediaBreakpoints';
const S: IStyled = {
  CardWrap: styled.div`
    min-height: 30rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;
    @media ${Device.laptop} {
      width: 30%;
    }
  `,
  HeaderLogoWrapper: styled.div`
    margin-top: 2rem;
    @media ${Device.laptop} {
      margin-top: 4rem;
    }
  `,
  HeaderLogo: styled.img`
    max-height: 3rem;
    @media ${Device.laptop} {
      min-height: 4rem;
      max-height: 4rem;
    }
  `,
  HeaderLabel: styled.p`
    font-size: 2rem;
    font-family: ${({ theme: { fontPrimary, fontFallback } }) =>
      `${fontPrimary}, ${fontFallback}`};
    margin-bottom: 1.5rem;
    color: #363537;
    font-weight: 100;
    @media ${Device.laptop} {
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }
  `,
  TechList: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  DescriptionWrapper: styled.div`
    width: 80%;
    align-self: center;
    margin-top: 1.5rem;
    margin-bottom: 2rem;
    @media ${Device.laptop} {
      width: 80%;
    }
  `,
  DescriptionText: styled.p`
    font-family: ${({ theme }) =>
      `${theme.fontSecondary}, ${theme.fontFallback}`};
    color: black;
    font-size: 1.3rem;
    @media ${Device.laptop} {
      font-size: 1.5rem;
    }
  `,
};

interface IProps {
  cardInfo: CardInfo;
  theme: ITheme;
}
const Card = ({ cardInfo, theme }: IProps) => {
  return (
    <S.CardWrap>
      <S.HeaderLogoWrapper>
        <S.HeaderLabel theme={theme}>{cardInfo.title}</S.HeaderLabel>
        <S.HeaderLogo src={cardInfo.imgSrc} />
      </S.HeaderLogoWrapper>
      <S.DescriptionWrapper>
        <S.DescriptionText>{cardInfo.description}</S.DescriptionText>
      </S.DescriptionWrapper>
      <S.TechList>
        {cardInfo.tech.map((techInfo, i) => (
          <TechItem
            techInfo={techInfo}
            key={`${techInfo.text}_${i}`}
            theme={theme}
          />
        ))}
      </S.TechList>
    </S.CardWrap>
  );
};

export default Card;
