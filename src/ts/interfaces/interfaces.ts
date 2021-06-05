import { StyledComponent } from 'styled-components';
import React from 'react';

export interface IStyled {
  [key: string]: StyledComponent<React.ElementType<any>, any, {}, never>;
}
