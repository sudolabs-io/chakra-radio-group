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
  generalStyles?: CSSWithMultiValues;
  hoverStyles?: CSSWithMultiValues;
  focusStyles?: CSSWithMultiValues;
}

export const RadioGroupItem = ({
  radio,
  generalStyles,
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
        ...generalStyles,
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
          gap={{ base: '4', md: 'unset' }}
          align={{ base: 'stretch', md: 'center' }}
          direction={{ base: 'column', md: 'row' }}
        >
          {children}
        </Flex>
      </Box>
    </Box>
  );
};
