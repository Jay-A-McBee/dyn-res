import { TextNode, TextElements } from './types';
import {ReactNode} from 'react';
import { StyledComponent, DefaultTheme } from 'styled-components';

export const renderText = (
  value: TextNode | TextNode[], 
  Component: StyledComponent<TextElements, DefaultTheme, {}, never>
): ReactNode => {
  return Array.isArray(value) ? value.map(({ text }) => <><Component>{text}</Component>{' '}</>) : <Component>{value.text}</Component>;
};