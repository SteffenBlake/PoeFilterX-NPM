#!/usr/bin/env node

const path = require("path");
const spawnSync = require('child_process').spawnSync;

const pathToMyExe = path.join(__dirname, 'bin', 'PoeFilterX-Standalone-win-x64.exe');
const input = process.argv.slice(2);

spawnSync(pathToMyExe, input, { stdio: 'inherit' });