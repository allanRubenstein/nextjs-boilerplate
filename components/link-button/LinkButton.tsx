import styled, { css } from 'styled-components';
import { LinkButtonProps } from './types';
import Link from 'next/link';

const LinkButton: React.FunctionComponent<LinkButtonProps> = (
  props: LinkButtonProps,
) => {
  // if href is passed, use Link, else button
  if (props.href) {
    return (
      <Link href={props.href} passHref>
        <LinkWrapper>{props.children}</LinkWrapper>
      </Link>
    );
  } else {
    return (
      <ButtonWrapper onClick={props.onClick}>{props.children}</ButtonWrapper>
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
