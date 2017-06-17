module.exports = {
  prompt: [
    {
      type: 'confirm',
      name: 'redux',
      message: 'Use redux?'
    },
    {
      type: 'confirm',
      name: 'router',
      message: 'Use react router?'
    },
    {
      type: 'confirm',
      when: 'router',
      name: 'cssm',
      message: 'Use react css moudules?'
    },
    {
      type: 'confirm',
      name: 'unit',
      message: 'Is need unit testing?'
    },
  ],
  completeMessage: 'To get started:\n\n cd <%=destPath%>\n  npm install\n  npm start\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack',
  filter: {
    'test/*': 'unit',
    'dev/bage.js': 'unit',
    'dev/karma.conf.js': 'unit',
    'src/model/*': 'redux',
    'src/wrap.jsx.ejs': 'redux|router',
  },
  ignore: [
    'src/part/*',
  ]
};