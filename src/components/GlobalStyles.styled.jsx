import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { modernNormalizeCss } from 'emotion-modern-normalize';

export const GlobalStyles = css`
  ${modernNormalizeCss}

  html {
    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    padding: 0;
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-weight: 500;
    margin: 0;
    padding: 0;
  }

  ul,
  ol {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
    border: none;
  }

  textarea {
    resize: none;
  }
`;

export const MainTitle = styled.h1`
  font-size: 36px;
  line-height: 1.18;
  text-align: center;
  letter-spacing: 0.03em;

  margin-top: 50px;
  margin-bottom: 20px;
`;
