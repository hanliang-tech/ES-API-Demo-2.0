#!/usr/bin/env node
import fs from 'fs'
import {execSync} from 'child_process'

import path from 'path'
import {chdir} from "process";
//包名
const PKG_NAME = 'es.test.api.demo';
//基础版本 1.0
const VERSION_BASE = '1.0'

import uploadESApp from "./uploadESApp.mjs";

let gitNumber = getGitCommit();

let versionName = VERSION_BASE + "." + gitNumber


execSync('npm run vendor ')
execSync('npm run esbuild ')

chdir(path.resolve('./dist/'))

execSync(`zip -q -r android.zip ./android `)


let distOutput = path.resolve('./android.zip')

try {
    console.log('dist zip : ' + distOutput)
    fs.statSync(distOutput)
    uploadESApp(PKG_NAME, '', versionName, distOutput, true)
    console.error('上传完成')
} catch (e) {
    console.error('上传失败，文件不存在')
}


function getGitCommit() {
    let cmd = 'git rev-list HEAD --count'

    let buffer = execSync(cmd)

    return parseInt(buffer.toString())
    // return 1
}
