import React from 'react';
import { linkedin, github, paperPlane } from '../../assets/images/logos';
import styled from 'styled-components';
import { Device } from '../../ts/enums/mediaBreakpoints';
import { IStyled } from '../../ts/interfaces/interfaces';
import { recordEvent } from '../../utils';

const S: IStyled = {
  LogoSection: styled.div`
    max-height: 15rem;
    margin: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vh;
    @media ${Device.tablet} {
      justify-content: center;

      max-height: 5rem;
    }
  `,
  LogoWrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    margin-right: 2rem;
    @media ${Device.tablet} {
      margin-left: 1rem;
      margin-right: 1rem;
    }
  `,
  Logo: styled.img`
    max-height: 3rem;
    @media ${Device.tablet} {
      max-height: 3rem;
    }
  `,

  LogoLabel: styled.p`
    color: #fafafa;
    font-size: 1.2rem;
    margin-top: 0.5rem;
    font-weight: 500;
    font-family: Rubik;
    @media ${Device.tablet} {
      font-size: 1.8rem;
    }
  `,
};

const links = [
  {
    logoSrc: github,
    alt: 'github',
    id: 'github',
    href: 'https://github.com/timoshishi',
  },
  {
    logoSrc: linkedin,
    alt: 'linkedin',
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/timfrrst/',
  },
  {
    logoSrc: paperPlane,
    alt: 'email',
    id: 'email',
    href: 'mailto:timfrrst@gmail.com',
  },
];

const onFooterLogoClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  const targetId = e.currentTarget.id;
  recordEvent({
    category: 'footer_link_click',
    action: 'click',
    label: targetId,
  });
};

const FooterLogos = () => (
  <S.LogoSection>
    {links.map(({ logoSrc, alt, id, href }) => (
      <S.LogoWrapper key={id}>
        <a href={href} target='blank' id={id} onClick={onFooterLogoClick}>
          <S.Logo src={logoSrc} alt={alt} />
        </a>
      </S.LogoWrapper>
    ))}
  </S.LogoSection>
);

export default FooterLogos;
