import React from 'react';
import LinkButton from '../LinkButton';
import { render } from '@testing-library/react';

test('works', () => {
  // it works :)
  const { debug } = render(<LinkButton>test</LinkButton>);

  debug();
});
