module.exports = {
  prompt: [
    {
      type: 'confirm',
      name: 'redux',
      message: 'Use redux?',
      default: true,
    },
    {
      type: 'confirm',
      name: 'router',
      message: 'Use react router?',
      default: true,
    },
    {
      type: 'confirm',
      name: 'cssm',
      message: 'Use react css moudules?',
      default: true,
    },
    {
      type: 'confirm',
      name: 'unit',
      message: 'Is need unit testing?',
      default: false,
    }, {
      type: 'confirm',
      name: 'version',
      message: 'Is need version control in config.js ?',
      default: false,
    },
  ],
  completeMessage: 'To get started:\n\n cd <%=destPath%>\n  npm install\n  npm start\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack',
  filter: {
    'test/*': 'unit',
    'dev/bage.js': 'unit',
    'dev/karma.conf.js': 'unit',
    'src/model/*': 'redux',
    'dev/version.js': 'version',
    'src/wrap.jsx.ejs': 'redux|router',
  },
  ignore: [
    'src/part/*',
  ]
};