import styled, { css } from "styled-components";

const variantCSS = {
  primary: css`
    background-color: green;
    border: none;
    cursor: pointer;
    box-sizing: border-box;
  `,
  secondary: css`
    background-color: darkgray;
    border: none;
    cursor: pointer;
    box-sizing: border-box;
  `,
  error: css`
    background-color: skyblue;
    border: none;
    cursor: pointer;
    box-sizing: border-box;
  `,
};

const shapeCSS = {
  moreBtn: css`
    border-radius: 500px;
    border: 1px solid gray;
    border: none;
  `,

  submitBtn: css`
    border-radius: 6px;
    border: none;
  `,
  checkBtn: css`
    border-radius: 10px;
    border: none;
  `,

  round: css`
    border-radius: 50%;
  `,
};

const sizeCSS = {
  small: css`
    width: 40px;
    max-width: 60px;
    height: 40px;
    padding: 16px 0;
    font-size: 16px;
  `,
  medium: css`
    width: 96px;
    height: 48px;
    padding: 16px 0;
    font-size: 16px;
  `,
  large: css`
    width: 128px;
    height: 64px;
    padding: 16px 9;
    font-size: 16px;
  `,
};

export const BtnPropsStyle = styled.button`
  ${({ variant }) => variantCSS[variant]}
  ${({ shape }) => shapeCSS[shape]}
    ${({ size }) => sizeCSS[size]}
`;
