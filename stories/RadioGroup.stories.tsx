import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { RadioGroup } from '../src';
import { Flex, Box, Text } from '@chakra-ui/react';

export default {
  title: 'Radio Group',
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>;

export const Default = () => (
  <RadioGroup
    options={[
      { title: 'Title #1', subtitle: 'Subitle #1' },
      { title: 'Title #2', subtitle: 'Subitle #2' },
      { title: 'Title #3', subtitle: 'Subitle #3' },
    ]}
    getOptionValue={({ title }) => title}
    hoverStyles={{
      outlineWidth: '1px',
      outlineColor: 'blue.300',
      outlineStyle: 'solid',
    }}
    focusStyles={{
      outlineWidth: '1px',
      outlineColor: 'blue.500',
      outlineStyle: 'solid',
    }}
    name="zemiaky"
  >
    {({ option, radioProps }) => (
      <Flex
        bgColor={radioProps.isChecked ? 'blue.200' : 'blue.50'}
        p="5"
        minW="48"
        align="center"
        gap={{ base: '2', sm: '3', md: '4' }}
      >
        <Box fontSize="sm">
          <Text color="empahsized" fontWeight="medium">
            {option.title}
          </Text>
          <Text color="muted">{option.subtitle}</Text>
        </Box>
      </Flex>
    )}
  </RadioGroup>
);
