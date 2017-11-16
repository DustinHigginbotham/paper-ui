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
      'paper-input-text'
    ] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
