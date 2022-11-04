import React from 'react';
import { RenderProp } from 'react-render-prop-type';
import {
  CSSWithMultiValues,
  Stack,
  StackProps,
  useRadioGroup,
  UseRadioProps,
} from '@chakra-ui/react';
import { RadioGroupItem } from './RadioGroupItem';

export interface Props<Option, Value>
  extends Omit<StackProps, 'onChange' | 'children'>,
    RenderProp<{
      option: Option;
      radioProps: UseRadioProps;
    }> {
  name?: string;
  value?: Value;
  options: Option[];
  defaultValue?: string;
  getOptionValue: (option: Option) => Value;
  onChange?: (value: Value) => void;
  hoverStyles?: CSSWithMultiValues;
  focusStyles?: CSSWithMultiValues;
}

export const RadioGroup = <Option, Value extends string>({
  children,
  name,
  defaultValue,
  options,
  value,
  getOptionValue,
  onChange,
  hoverStyles,
  focusStyles,
  ...props
}: Props<Option, Value>) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name,
    defaultValue,
    value,
    onChange,
  });

  return (
    <Stack {...getRootProps(props)}>
      {options.map(option => {
        const optionValue = getOptionValue(option);

        const radioProps = getRadioProps({
          value: optionValue,
        });

        return (
          <RadioGroupItem
            key={optionValue}
            radio={radioProps}
            hoverStyles={hoverStyles}
            focusStyles={focusStyles}
          >
            {children({
              option,
              radioProps,
            })}
          </RadioGroupItem>
        );
      })}
    </Stack>
  );
};
