import React from 'react';
import styled from 'styled-components';
import { ITheme } from '../../ts/interfaces/interfaces';

const S = {
  ButtonLink: styled.a`
    color: #4fbfa8;
    border: 1px solid #fafafa;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    letter-spacing: 0.05em;
    background-color: transparent;
    color: inherit;
    transition: all 0.25s;
    border-radius: 2px;
    text-decoration: none;
    &:hover {
      background: #4fbfa8;
      color: #ffffff;
      border-color: #4fbfa8;
      cursor: pointer;
    }
  `,
  ButtonText: styled.p`
    color: white;
    font-family: ${({ theme }) => theme.fontSecondary};
    font-weight: 500;
  `,
};
interface IProps {
  theme: ITheme;
  url: string;
}
const Button: React.FC<IProps> = ({ theme, children, url }) => {
  return (
    <S.ButtonLink href={url} target='_blank'>
      <S.ButtonText theme={theme}>{children}</S.ButtonText>
    </S.ButtonLink>
  );
};

export default Button;
