import { css, Global } from '@emotion/react';
import { FC } from 'react';
import { CeraPro } from '@assets/fonts/CeraPro';
import { BreakpointPrefix } from '@utils/screens';
import { calcFluidFontSize } from './helpers/mixins';
import {
  $desktopWidth,
  $mainBackgroundColor,
  $mainFont,
  $mainFontColor,
  $mainFontSize,
  $phoneWidth,
  $tableWidth,
} from './helpers/variables';

export const GlobalStyles: FC = () => (
  <Global
    styles={css`
      @font-face {
        font-family: 'Cera Pro';
        src: url(${CeraPro.MediumWoff2}) format('woff2'), url(${CeraPro.MediumWoff}) format('woff');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: 'Cera Pro';
        src: url(${CeraPro.BoldWoff2}) format('woff2'), url(${CeraPro.BoldWoff}) format('woff');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: 'Cera Pro';
        src: url(${CeraPro.RegularWoff2}) format('woff2'),
          url(${CeraPro.RegularWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }

      main {
        display: flex !important;
        flex-direction: column;
        min-height: calc(100vh - 19rem);
        padding-top: 6rem;
        @media screen and (max-width: ${$phoneWidth}) {
          min-height: calc(100vh - 29rem);
        }
      }

      html {
        font-family: ${$mainFont};
        font-size: ${$mainFontSize};
        color: ${$mainFontColor};
        scroll-behavior: smooth;
        scrollbar-color: #25293f rgba(37, 41, 63, 0.1);
        scrollbar-width: thin;

        &::-webkit-scrollbar {
          width: 0.25rem;
          height: 0;
          background-color: #25293f;
          border-radius: 0.25rem;
        }

        &::-webkit-scrollbar-thumb {
          background-color: #25293f;
          border-radius: 0.25rem;
          transition: background-color 0.3s;
        }

        &::-webkit-scrollbar-thumb:hover {
          background-color: #171928;
        }

        /* Стрелки */
        &::-webkit-scrollbar-button:vertical:start:decrement {
          background: transparent;
        }

        &::-webkit-scrollbar-button:vertical:end:increment {
          background: transparent;
        }

        &::-webkit-scrollbar-button:horizontal:start:decrement {
          background: transparent;
        }

        &::-webkit-scrollbar-button:horizontal:end:increment {
          background: transparent;
        }

        @media screen and (max-width: ${$desktopWidth}) {
          font-size: ${calcFluidFontSize(6.47, 16, BreakpointPrefix.MD, BreakpointPrefix.LG)};
        }
        @media screen and (max-width: ${$tableWidth}) {
          font-size: ${calcFluidFontSize(11.9465, 31.51, 280, BreakpointPrefix.SM)};
        }
        @media screen and (max-width: ${$phoneWidth}) {
          font-size: ${calcFluidFontSize(11.9465, 20.48, 280, BreakpointPrefix.SM)};
        }
      }

      body {
        position: relative;
        background: ${$mainBackgroundColor};
      }

      #root {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }

      /* Box sizing rules */
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      /* Prevent font size inflation */
      html {
        -moz-text-size-adjust: none;
        -webkit-text-size-adjust: none;
        text-size-adjust: none;
      }

      em {
        font-style: normal;
      }

      /* Remove default margin in favour of better control in authored CSS */
      body,
      h1,
      h2,
      h3,
      h4,
      p,
      figure,
      blockquote,
      dl,
      dd {
        margin: 0;
      }

      /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
      ul[role='list'],
      ol[role='list'] {
        list-style: none;
      }

      /* Set core body defaults */
      body {
        min-height: 100vh;
        line-height: 1.5;
        @media screen and (max-width: ${$phoneWidth}) {
          min-height: auto;
        }
      }

      /* Set shorter line heights on headings and interactive elements */
      h1,
      h2,
      h3,
      h4,
      button,
      input,
      label {
        line-height: 1.1;
      }

      /* Balance text wrapping on headings */
      h1,
      h2,
      h3,
      h4 {
        text-wrap: balance;
      }

      /* A elements that don't have a class get default styles */
      a:not([class]) {
        text-decoration-skip-ink: auto;
        color: currentColor;
      }

      /* Make images easier to work with */
      img,
      picture {
        max-width: 100%;
        display: block;
      }

      /* Inherit fonts for inputs and buttons */
      input,
      button,
      textarea,
      select {
        font: inherit;
      }

      /* Make sure textarea without a rows attribute are not tiny */
      textarea:not([rows]) {
        min-height: 10em;
      }

      /* Anything that has been anchored to should have extra scroll margin */
      :target {
        scroll-margin-block: 5ex;
      }
      input {
        outline: none;
        border: none;
        color: inherit;
      }
      button {
        font-family: ${$mainFont};
        outline: none;
        border: none;
        background: none;
        cursor: pointer;
        padding: 0;
      }
      a {
        color: inherit;
        text-decoration: none;
      }
      ul {
        padding: 0;
        margin: 0;
        list-style: none;
      }
      input:-webkit-autofill,
      input:-webkit-autofill:hover,
      input:-webkit-autofill:focus,
      input:-webkit-autofill:active {
        transition: background-color 5000s ease-in-out 0s;
        -webkit-text-fill-color: #ffffff !important;
        background-color: #25293f !important;
        -webkit-box-shadow: 0 0 0px 1000px #25293f inset;
      }

      input:-moz-autofill,
      input:-moz-autofill:hover,
      input:-moz-autofill:focus,
      input:-moz-autofill:active {
        background-color: #25293f !important;
      }

      input:-ms-autofill,
      input:-ms-autofill:hover,
      input:-ms-autofill:focus,
      input:-ms-autofill:active {
        background-color: #25293f !important;
      }
      b,
      strong,
      i {
        font-weight: inherit;
        font-style: inherit;
      }
    `}
  />
);
