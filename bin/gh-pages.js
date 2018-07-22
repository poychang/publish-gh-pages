#! /usr/bin/env node

const shell = require('shelljs');
const ghPages = require('../lib');

switch (process.argv[2]) {
    case 'init':
        ghPages.init();
        break;
    case 'create':
        ghPages.create();
        break;
    case 'travis':
        ghPages.travis();
        break;
    default:
        shell.echo(`You can use 'gh-pages init' to create .gh-pages.json file and 'gh-pages branch' to branch.`);
        break;
}
