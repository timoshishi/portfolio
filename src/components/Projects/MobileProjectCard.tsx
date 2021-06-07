import React from 'react';
import styled from 'styled-components';
import { Device } from '../../ts/enums/mediaBreakpoints';
import { IProject, IStyled, ITheme } from '../../ts/interfaces/interfaces';
import Button from '../Layout/Button';

const S: IStyled = {
  ProjectCard: styled.div`
    border-radius: 5px;
    max-width: 100%;
    height: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    @media ${Device.laptop} {
      display: none;
    }
  `,

  TextBox: styled.div`
    width: 80%;
    display: flex;
    margin-top: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,

  ProjectDesc: styled.p`
    color: #363537;
    font-family: ${({ theme }) => theme.fontSecondary};
    font-size: 0.8rem;
    text-align: left;
  `,
  ButtonBox: styled.div`
    display: flex;
    margin-top: 1.5rem;
    width: 100%;
    justify-content: space-evenly;
  `,
};
interface IProps {
  project: IProject;
  theme: ITheme;
}
const MobileProjectCard = ({ project, theme }: IProps) => {
  return (
    <S.ProjectCard>
      <S.TextBox>
        <S.ProjectDesc theme={theme}>{project.description}</S.ProjectDesc>
        <S.ButtonBox>
          <Button theme={theme} url={project.githubUrl}>
            Github
          </Button>
          {project.projectUrl && (
            <Button theme={theme} url={project.projectUrl}>
              Website
            </Button>
          )}
        </S.ButtonBox>
      </S.TextBox>
    </S.ProjectCard>
  );
};

export default MobileProjectCard;
