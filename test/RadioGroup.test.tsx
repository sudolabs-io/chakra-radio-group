import React from 'react';
import { render, screen } from '@testing-library/react';
import { RadioGroup } from '../src';
import { Box } from '@chakra-ui/react';

const TITLE = 'Test Title';

describe('RadioGroup', () => {
  it('Renders without crashing', () => {
    render(
      <RadioGroup
        options={[{ title: TITLE }]}
        getOptionValue={({ title }) => title}
      >
        {({ option }) => <Box>{option.title}</Box>}
      </RadioGroup>
    );
    const element = screen.queryByText(TITLE);
    expect(element).toBeInTheDocument();
  });
});
