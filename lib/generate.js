const fs = require('fs');

function init() {
    let filename = '.gh-pages.json';
    let content = `
    {
        "projectName": "Your-Project-Name",
        "organizationName": "GitHub-Account-or-Organization-Name",
        "buildCommand": "Build-Project-Command",
        "distRoot": "Project-Output-Root-Folder",
        "distFolder": "Project-Output-Folder",
        "branch": "gh-pages",
        "commit": "Deploy"
    }
    `;
    let success = () => console.log('Done!');
    let error = () => console.log('Oops... ERROR!');

    generateFile(filename, JSON.stringify(JSON.parse(content), null, 4), success, error);
}

function travis() {
    let filename = '.travis.yml';
    let content = `# .travis.yml
language: node_js
node_js:
    - '8'
branches:
    only:
    - master
cache:
    directories:
    - node_modules
script:
    - git config --global user.name "\${GH_NAME}"
    - git config --global user.email "\${GH_EMAIL}"
    - echo "machine github.com login \${GH_NAME} password \${GH_TOKEN}" > ~/.netrc
    - GIT_USER="\${GH_NAME}" npm run publish-gh-pages
    `;
    let success = () => console.log('Done!');
    let error = () => console.log('Oops... ERROR!');

    generateFile(filename, content, success, error);
}

function generateFile(filename, content, success, error) {
    fs.exists(filename, (isExist) => {
        if (isExist) {
            console.log(`File (${filename}) already exist.`);
            return;
        }
        fs.writeFile(filename, content, (err) => {
            if (err) {
                console.warn(err);
                error();
            } else {
                success();
            }
        });
    });
}

module.exports = {
    init,
    travis
};
