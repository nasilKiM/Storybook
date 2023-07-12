import * as S from "./Input.style";

const BasicInput = ({ variant, shape, size, ...rest }) => {
  return <S.InputPropsStyle {...{ variant, shape, size }} {...rest} />;
};

export default BasicInput;
