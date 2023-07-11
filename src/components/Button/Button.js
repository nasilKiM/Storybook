import * as S from "./Button.style";

const BasicBtn = ({ variant, shape, size, children, ...res }) => {
  return (
    <S.BtnPropsStyle {...{ variant, shape, size }} {...res}>
      {children}
    </S.BtnPropsStyle>
  );
};

export default BasicBtn;
