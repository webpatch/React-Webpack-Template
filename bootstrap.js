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
      name: 'testing',
      message: 'Is need be testing?'
    },
    {
      type: 'confirm',
      name: 'install',
      message: 'Install all dependence right now?'
    },
  ],
  completeMessage: 'To get started:\n\n cd <%=destDirName%>\n  npm install\n  npm run dev\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack',
  filter: {
    'test/*': 'testing',
    'dev/bage.js': 'testing',
    'dev/karma.conf.js': 'testing',
    'src/model/*': 'redux',
    'src/warp.jsx.ejs': 'redux|router',
  },
  ignore: [
    'src/part/*',
  ]
};