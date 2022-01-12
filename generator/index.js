module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    devDependencies: {
      '@commitlint/cli': '^16.0.2',
      '@commitlint/config-conventional': '^16.0.0',
      commitizen: '^4.2.4',
      'cz-conventional-changelog': '^3.3.0',
      husky: '^7.0.4'
    },
    scripts: {
      prepare:
        'husky install && husky add .husky/commit-msg \'npx --no-install commitlint --edit "$1"\'',
      commit: 'git-cz'
    },
    config: {
      commitizen: {
        path: 'node_modules/cz-conventional-changelog'
      }
    }
  });
  api.render({
    './commitlint.config.js': './templates/commitlint.config.js'
  });
};
