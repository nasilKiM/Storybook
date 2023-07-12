import * as S from "./Button.style";

const BasicBtn = ({ variant, size, children, ...res }) => {
  return (
    <S.BtnPropsStyle {...{ variant, size }} {...res}>
      {children}
    </S.BtnPropsStyle>
  );
};

export default BasicBtn;
