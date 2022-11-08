import React from 'react';
import { render } from '@testing-library/react';
import { Default as RadioGroup } from '../stories/RadioGroup.stories';

describe('RadioGroup', () => {
  it('Renders without crashing', () => {
    render(<RadioGroup />);
  });
});
