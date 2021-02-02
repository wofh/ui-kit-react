# Get started

WOFH UI Kit is a reusable component library that helps WOFH contributors build UIs faster. The goal is to make building durable UIs more productive and satisfying.

## Install

WOFH UI Kit components are written in React. It requires Storybook version 5.3.18 and up.

Add WOFH UI Kit to your project.

`npm install --save @wofh/ui-kit-react`

or

`yarn add --dev @wofh/ui-kit-react`

### **Use**

Import components you want into your UI

`import { Button, Avatar } from ‘@wofh/ui-kit-react’;`

and use them like so

```
  const example = () => (
    <div>
      <Button use={'primary'} onClick={() => 0}>Do something</Button>
      <Avatar name={'John Doe'} />
    </div>
  )
```

### **Run and develop WOFH UI Kit locally**

Clone the [WOFH UI Kit GitHub project](https://github.com/wofh/ui-kit-react) then start Storybook.

`npm install && npm run storybook`

or

`yarn && yarn storybook`

### **Deploy WOFH UI Kit on Github Pages**

Deploy [WOFH UI Kit on Github Pages](https://wofh.github.io/ui-kit-react) with the following command:

`npm run deploy-storybook`

or

`yarn deploy-storybook`

### **Release/Publish WOFH UI Kit**

Create a release on Github and publish WOFH UI Kit on npm with the following command:

`npm run release`

or

`yarn release`

You must configure GITHUB_TOKEN environment variable for publishing and releasing to work properly.
Obtain a personal github access token (needs `repo` permission) and make sure the token is available as an environment variable .

```
export GITHUB_TOKEN="f941e0..."
```

In macOS or Linux, this can be added to e.g. `~/.profile`, so it's available everytime the shell is used.
