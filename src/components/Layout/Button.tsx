import React from 'react';
import styled from 'styled-components';
import { ITheme } from '../../ts/interfaces/interfaces';

const S = {
  ButtonLink: styled.a`
    color: #fafafa;
    border: 1px solid #f1c40f;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    letter-spacing: 0.05em;
    background-color: transparent;
    color: inherit;
    transition: all 0.25s;
    border-radius: 2px;
    text-decoration: none;
    &:hover {
      background: #f1c40f;
      color: #fafafa;
      border-color: #f1c40f;
      cursor: pointer;
    }
  `,

  ButtonText: styled.p`
    color: #f1c40f;
    font-family: ${({ theme }) => theme.fontSecondary};
    font-weight: 500;
    &:hover {
      color: inherit;
    }
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
