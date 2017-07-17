const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const packagePath = path.resolve('.', './package.json');
const configPath = path.resolve('.', './config.js');

const isPrd = process.env.NODE_ENV === 'production';

function write(obj) {
  fs.writeFileSync(packagePath, JSON.stringify(obj, null, '  '));
  console.log(chalk.green(`Version update to ${obj.version}`));
}

function increaceVersion(ver) {
  const [major = '1.0.0', sub = ''] = ver.split('-');
  let [subV, subNum = 0] = sub.split('.');
  subV = subV || 'build';
  subNum = parseInt(subNum) + 1;
  return `${major}-${subV}.${subNum}`;
}

function updateVersion() {
  try {
    fs.statSync(packagePath);
    const d = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    if (!Object.hasOwnProperty.call(d, 'version') || d.version === '0.0.0') d.version = '1.0.0';
    d.version = increaceVersion(d.version);
    write(d);
  } catch (e) {
    console.log(err);
  }
}

function replaceVersion() {
  let finalRs = '';
  const d = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  try {
    const t = fs.readFileSync(configPath, 'utf8');
    const reg = /\sVERSION\s+=\s+\'.*?\'/;
    finalRs = t.replace(reg, ` VERSION = 'v${d.version}'`);
  } catch (e) {
    finalRs = `var VERSION = 'v${d.version}';\n`;
  }
  fs.writeFileSync(configPath, finalRs);
}

if (isPrd) updateVersion();
replaceVersion();
