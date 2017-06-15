module.exports = {
  input: {
    'x': {
      alias: 'redux',
      describe: 'Use redux',
      info: 'Redux',
    },
    'o': {
      alias: 'router',
      describe: 'Use react-router',
      info: 'Router',
    },
    'c': {
      alias: 'cssm',
      describe: 'Use react css moudules',
      info: 'CSS modules',
    },
    't': {
      alias: 'testing',
      describe: 'Is need testing',
      info: 'Testing',
    },
    'y': {
      alias: 'force',
      describe: 'Force to confirm',
    },
    'i': {
      alias: 'install',
      describe: 'Install all dependencies',
    }
  },
  confirm: `Please confirm your App's info.
---------------------------------
  App Name : <%= name %>
  Path : <%= path %>
  Modules  : 
    <%= info %>
---------------------------------
  Are you sure?`,
  filter: {
    'test/*': 'testing',
    'dev/bage.js': 'testing',
    'dev/karma.conf.js': 'testing',
    'src/model/*': 'redux',
    'src/warp.jsx.ejs': 'redux|router',
  },
  skip: [
    'src/part/*',
  ]
};