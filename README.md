# Chakra Radio Group

This component is a custom solution for Radio Group Select, built with [@chakra-ui/react](https://www.npmjs.com/package/@chakra-ui/react) and [react-render-prop-type](https://www.npmjs.com/package/react-render-prop-type).

## Usage

To use this package install it with one of these commands:

```bash
npm install chakra-radio-group
```

or

```bash
yarn add chakra-radio-group
```

### Example

```js
<RadioGroup
  options={[{ title: 'Test Title' }]}
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
>
  {({ option, radioProps }) => (
    <Flex
      bgColor={radioProps.isChecked ? 'blue.200' : 'blue.50'}
      p="5"
      minW="48"
      align="center"
    >
      <Text>{option.title}</Text>
    </Flex>
  )}
</RadioGroup>
```

### Props

#### Radio Group

- `options` - [❗️] - Array of objects
- `getOptionValue` - [❗️] - A function that chooses which property from the object from options will be chosen as the value for **Radio Group Item**
- `value` - [❓] - String value from options which matches the key from **_getOptionValue_** function
- `defaultValue` - [❓] - String value from options which matches the key from **_getOptionValue_** function
- `name` - [❓] - String value which sets the input name attribute
- `onChange` - [❓] - Custom function to handle the _onChange_ event
- `generalStyles` - [❓] - Object of multiple CSS properties to style **Radio Group Item** component
- `hoverStyles` - [❓] - Object of multiple CSS properties which are set on _hover_ state
- `focusStyles` - [❓] - Object of multiple CSS properties which are set on _focus_ state

#### Radio Group - Render Props

- `option` - Object from **_options_**
- `radioProps` - Object which contains **Radio Group** id, name, value, state, etc.

> ❗️ = Required property
>
> ❓ = Optional property

## Storybook

To test out the package, clone the repository to your local machine and use one of following commads:

```bash
npm run storybook
```

or

```bash
yarn storybook
```

> This loads the stories from `./stories`.
