# Get started

Emojics UI Kit is a reusable component library that helps Emojics contributors build UIs faster. The goal is to make building durable UIs more productive and satisfying.

## Install

Emojics UI Kit components are written in React. It requires Storybook version 5.3.18 and up.

Add Emojics UI Kit to your project.

`npm install --save @emojics/ui-kit-react`

### **Use**

Import components you want into your UI

`import { Button, Avatar } from ‘@emojics/ui-kit-react’;`

and use them like so

```
  const example = () => (
    <div>
      <Button use={'primary'} onClick={() => 0}>Do something</Button>
      <Avatar name={'John Doe'} />
    </div>
  )
```

### **Run and develop Emojics UI Kit locally**

Clone the [Emojics UI Kit GitHub project](https://github.com/emojics/ui-kit-react) then start Storybook.

`yarn && yarn run storybook`

### **Resources**

- [Introducing Storybook Design System](https://medium.com/storybookjs/introducing-storybook-design-system-23fd9b1ac3c0)
- [GitHub repository](https://github.com/storybookjs/design-system)