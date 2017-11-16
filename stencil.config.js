exports.config = {
  namespace: 'paper',
  generateDistribution: true,
  generateWWW: true,
  bundles: [
    { components: [
      'paper-app-bar',
      'paper-drawer',
      'paper-drawer-layout',
      'paper-header-layout',
      'paper-input-text',
      'paper-fab'
    ] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
