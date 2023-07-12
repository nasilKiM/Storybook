//<input> 요소는 자식을 가질 수 없고 dangerouslySetInnerHTML을 사용해서도 안된다
import styled, { css } from "styled-components";

const variantCSS = {
  default: css`
    border: none;
    box-sizing: border-box;
  `,
};

const shapeCSS = {
  rounded: css`
    border-radius: 500px;
    border: 1px solid gray;
  `,
  square: css`
    border-radius: 0;
    border: 1px solid gray;
  `,
};

const sizeCSS = {
  small: css`
    width: 140px;
    height: 40px;
    padding-left: 20px;
    font-size: 16px;
  `,
  medium: css`
    width: 196px;
    height: 48px;
    padding-left: 20px;
    font-size: 16px;
  `,
  large: css`
    width: 228px;
    height: 54px;
    padding-left: 20px;
    font-size: 16px;
  `,
};

export const InputPropsStyle = styled.input`
  ${({ variant }) => variantCSS[variant]}
  ${({ shape }) => shapeCSS[shape]}
  ${({ size }) => sizeCSS[size]}
`;
