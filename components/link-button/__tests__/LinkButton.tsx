import React from 'react';
import LinkButton from '../LinkButton';
import { render } from '@testing-library/react';
import 'jest-styled-components';

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
});
