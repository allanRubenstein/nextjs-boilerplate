import styled from 'styled-components';

export interface ButtonProps {
  children: any;
}

const ButtonWrap = styled.button`
  /* Base styles */
  color: red;
`;

const Button: React.FunctionComponent<ButtonProps> = (
  props: ButtonProps
) => {
  return (
    <ButtonWrap>
      {props.children}
    </ButtonWrap>
  )
}
export default Button;