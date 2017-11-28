![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Paper UI
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
    - [x] Multi-line input
    - [ ] Textarea
    - [ ] Toggles
- [ ] Buttons
    - [ ] Buttons with varying elevation
    - [ ] Icon buttons
    - [x] FAB
- [x] Lists
- [ ] Snackbar / Toast
- [ ] Cards
- [ ] Chips
- [ ] Dialogs
- [ ] Menus
- [x] Avatar
- [ ] Progress indicators
- [ ] Better elevation/material support.

### Management
- [ ] Upload to NPM
- [ ] Tests
- [ ] Create a demo page with Firebase
- [ ] Crazy thorough documentation of each component (ongoing process)
