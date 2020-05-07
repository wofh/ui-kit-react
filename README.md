# Get started

Emojics UI Kit is a reusable component library that helps Emojics contributors build UIs faster. The goal is to make building durable UIs more productive and satisfying.

## Install

Emojics UI Kit components are written in React. It requires Storybook version 5.3.18 and up.

Add Emojics UI Kit to your project.

`npm install --save @emojics/ui-kit-react`

or

`yarn add --dev @emojics/ui-kit-react`

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

`npm install && npm run storybook`

or

`yarn && yarn storybook`

### **Deploy Emojics UI Kit on Github Pages**

Deploy [Emojics UI Kit on Github Pages](https://emojics.github.io/ui-kit-react) with the following command:

`npm run deploy-storybook`

or

`yarn deploy-storybook`

### **Release/Publish Emojics UI Kit**

Create a release on Github and publish Emojics UI Kit on npm with the following command:

`npm run release`

or

`yarn release`

You must configure some environment variables for publishing and releasing to work properly.

-  GH_TOKEN - Used for publishing the GitHub release (needs `repo` permission)
-  NPM_TOKEN - Used to publish to npm

Place these variables in your `.env` file in root. Make sure to add `.env` in `.gitignore`

### **Helpful Resources**

-  https://intuit.github.io/auto/pages/getting-started.html
