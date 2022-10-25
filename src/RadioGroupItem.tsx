import React from 'react';
import {
  Box,
  BoxProps,
  Flex,
  CSSWithMultiValues,
  useId,
  useRadio,
  UseRadioProps,
  useStyleConfig,
} from '@chakra-ui/react';

export interface RadioGroupItemProps extends BoxProps {
  radio: UseRadioProps;
  hoverStyles?: CSSWithMultiValues;
  focusStyles?: CSSWithMultiValues;
}

export const RadioGroupItem = ({
  radio,
  hoverStyles,
  focusStyles,
  children,
  ...props
}: RadioGroupItemProps) => {
  const { getInputProps, getCheckboxProps, getLabelProps } = useRadio(radio);
  const id = useId(undefined, 'radio-button');

  const styles = useStyleConfig('RadioCard', props);
  const inputProps = getInputProps();
  const checkboxProps = getCheckboxProps();
  const labelProps = getLabelProps();

  return (
    <Box
      as="label"
      cursor="pointer"
      {...labelProps}
      sx={{
        w: 'fit-content',
        '[data-focus-visible]': {
          ...focusStyles,
        },
        ':not([data-checked]) [data-hover]': {
          ...hoverStyles,
        },
      }}
    >
      <input {...inputProps} aria-labelledby={id} />
      <Box sx={styles} {...checkboxProps} {...props}>
        <Flex
          justify="space-between"
          direction={{ base: 'column', md: 'row' }}
          align={{ base: 'stretch', md: 'center' }}
          gap={{ base: '4', md: '0' }}
        >
          {children}
        </Flex>
      </Box>
    </Box>
  );
};
