import React from 'react';
import LinkButton from '../LinkButton';
import { render, screen } from '@testing-library/react';

test('works', () => {
  // it works :)
  const { container } = render(<LinkButton>test</LinkButton>);

  expect(container).toMatchInlineSnapshot(`
    .c0 {
      color: red;
    }

    <div>
      <button
        class="c0"
      >
        test
      </button>
    </div>
  `);

  // this is a non-breaking change to test husky and lint-staged
});
