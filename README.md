# publish-gh-pages

Publish your website to [GitHub Pages](https://pages.github.com/).

## Usage

1. Install `publish-gh-pages` package into your project.

    `npm install publish-gh-pages`

2. Initial Travis CI yml file.

    `gh-pages init`


Using Travis CI publishing your site

1. Go to [https://github.com/settings/tokens](https://github.com/settings/tokens) and generate a new personal access token.
2. Using your GitHub account, [add the Travis CI app](https://github.com/marketplace/travis-ci) to the repository you want to activate.
3. Open your Travis CI dashboard. The URL looks like [https://travis-ci.com/USERNAME/REPO](https://travis-ci.com/USERNAME/REPO), and navigate to the `More options` > `Setting` > `Environment Variables` section of your repository.
4. Create a new environment variable named `GH_TOKEN` with your newly generated token as its value, then `GH_EMAIL` (your email address) and `GH_NAME` (your GitHub username).
5. Check and modify a `.travis.yml` file on the root of your repository with proper setting.

## Command

Once you install `publish-gh-pages` package, you can use command below:

* `gh-pages init`
* `gh-pages publish`

### Initialize config and CI script

Use `gh-pages init` to create needed config files.

* .gh-pages.json
* .travis.yml

### gh-pages publish

## Configuration

In the root of project folder should has configuration file, `.gh-pages.json`. It should following structure:

```json
{
    "projectName": "demo-web-app",
    "organizationName": "poychang",
    "buildCommand": "ng build --base-href /demo-web-app/",
    "distRoot": "./dist",
    "distFolder": "DemoWebApp",
    "branch": "gh-pages",
    "commit": "Update demonstration web app" 
}
```
