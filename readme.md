# Stencil Paper
A starter kit (heavily inspired by the Polymer Starter Kit) with some Material Design like elements baked in.

You can use this project as a good starting place for bootstrapping your application or use it as a library for your Stencil or vanilla web app. The beautiful part of Stencil is that it will produce vanilla web components that should play nicely with other frameworks.

## Getting started
Install this project into your own:

```bash
# feel free to use npm instead
yarn add dustinwtf/stencil-paper
```
Then add this to your collection in your `stencil.config.js`:
```js
{ collections: [
    { name: '@stencil/router' },
    { name: 'stencil-paper' } // <-- this one right here
]}
```

## TODO
This project is still super early in development. It was created to help me out with not only learning stencil/webcomponents, but also to provide myself with some common components I use. I am also hoping to get the support of the community going forward.

### Components
This list isn't in any particular order, but it may be tempting to just follow this.
- [x] App Layout
- [x] Sidebar
- [x] Header
- [ ] Inputs
    - [x] Text Input
    - [ ] Texarea
    - [ ] Toggles
- [ ] Buttons
    - [ ] Buttons with varying elevation
    - [x] FAB
- [ ] Lists
- [ ] Snackbar / Toast
- [ ] Cards
- [ ] Chips
- [ ] Dialogs
- [ ] Menus
- [ ] Avatar
- [ ] Progress indicators

### Management
- [ ] Upload to NPM
- [ ] Tests
- [ ] Create a demo page with Firebase
