import React from 'react';
import styled from 'styled-components';
import { Device } from '../../ts/enums/mediaBreakpoints';
import { ITheme } from '../../ts/interfaces/interfaces';
const S = {
  ButtonLink: styled.a`
    border: 1.5px solid #1b1b1b;
    background-color: #1b1b1b;
    padding-left: 1rem;
    padding-right: 1rem;
    letter-spacing: 0.05em;
    transition: all 0.25s;
    border-radius: 2px;
    height: 2.5rem;
    width: 7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    @media ${Device.laptop} {
      color: #fafafa;
      border: 1px solid #f1c40f;
      padding-left: 0.2rem;
      padding-right: 0.2rem;
      letter-spacing: 0.05em;
      background-color: transparent;
      color: inherit;
      transition: all 0.25s;
      border-radius: 2px;
      &:hover {
        background: #f1c40f;
        color: #fafafa;
        border-color: #f1c40f;
        cursor: pointer;
      }
    }
  `,

  ButtonText: styled.p`
    color: #fafafa;
    font-family: ${({ theme }) => theme.fontSecondary};
    font-family: ${({ theme }) => theme.fontSecondary};
    font-weight: 500;
    font-size: 1.5rem;
    @media ${Device.laptop} {
      color: #f1c40f;
      font-family: ${({ theme }) => theme.fontSecondary};
      font-weight: 500;
      &:hover {
        color: inherit;
      }
    }
  `,
};
interface IProps {
  theme: ITheme;
  url: string;
}
const Button: React.FC<IProps> = ({ theme, children, url }) => {
  return (
    <S.ButtonLink href={url} target='_blank' theme={theme}>
      <S.ButtonText theme={theme}>{children}</S.ButtonText>
    </S.ButtonLink>
  );
};

export default Button;
