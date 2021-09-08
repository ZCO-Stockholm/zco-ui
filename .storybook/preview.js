import React from 'react'
import createStyle from '../src/styles/global'
import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";
import theme from '../src/styles/theme';

const themes = [{ ...theme, name: 'ZCO UI Default' }];
const GlobalStyle = createStyle()

addDecorator(withThemesProvider(themes), ThemeProvider);

// Global decorator to apply the styles to all stories
export const decorators = [
  Story => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];