import styled, { css } from 'styled-components';
import { LinkButtonProps } from './types';
import Link from 'next/link';

const LinkButton: React.FunctionComponent<LinkButtonProps> = (
  props: Test,
): JSX.Element => {
  // if href is passed, use Link, else button
  const test = true;
  test = 12;
  if (props.href) {
    return (
      // render a link with an href
      <Link test="woo" href={props.href} passHref>
        <LinkWrapper test="woo">{props.children}</LinkWrapper>
      </Link>
    );
  } else {
    return (
      // render a button
      <ButtonWrapper test="woo" onClick={props.onClick}>{props.children}</ButtonWrapper>
    );
  }
};
export default LinkButton;

// shared css for button and link
const LinkAndButtonCss = css`
  /* Base styles */
  color: red;
`;

const LinkWrapper = styled.a`
  ${LinkAndButtonCss}/* link specific styles */
`;
const ButtonWrapper = styled.button`
  ${LinkAndButtonCss}/* button specific styles */
`;
