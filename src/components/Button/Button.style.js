import styled, { css } from "styled-components";

const variantCSS = {
  primary: css`
    color: white;
    background-color: green;
    border: none;
    cursor: pointer;
    box-sizing: border-box;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
  `,
  secondary: css`
    color: white;
    background-color: darkgray;
    border: none;
    cursor: pointer;
    box-sizing: border-box;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
  `,
};

const sizeCSS = {
  small: css`
    width: 80px;
    max-width: 80px;
    height: 40px;
    padding: 16px 0;
    font-size: 16px;
  `,
  medium: css`
    width: 128px;
    height: 48px;
    padding: 16px 0;
    font-size: 20px;
  `,
  large: css`
    width: 180px;
    height: 64px;
    padding: 16px 9;
    font-size: 24px;
  `,
};

export const BtnPropsStyle = styled.button`
  ${({ variant }) => variantCSS[variant]}
  ${({ size }) => sizeCSS[size]}
`;
