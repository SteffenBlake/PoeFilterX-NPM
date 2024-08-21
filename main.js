#!/usr/bin/env node

const path = require("path");
const spawnSync = require('child_process').spawnSync;

const platform = process.platform.toLowerCase();

if (platform === 'darwin')
{
    throw new Error("No compatible release for Macintosh");
}

let exeName = 'PoeFilterX-Standalone-linux-x64';
if (platform === 'win32')
{
    exeName = 'PoeFilterX-Standalone-win-x64.exe';
}

const pathToMyExe = path.join(__dirname, 'bin', exeName);
const input = process.argv.slice(2);

spawnSync(pathToMyExe, input, { stdio: 'inherit' });
