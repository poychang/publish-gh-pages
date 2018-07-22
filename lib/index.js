const shell = require('shelljs');
const generate = require('./generate');

init = () => {
    shell.echo('產生 .gh-pages.json 設定檔');
    generate.init();
};

create = () => {
    shell.echo('產生 gh-pages 分支，並將執行 build 指令後的檔案提交至該分支');
};

travis = () => {
    shell.echo('產生 travis.yml 檔案');
    generate.travis();
};

module.exports = {
    init,
    create,
    travis
}
