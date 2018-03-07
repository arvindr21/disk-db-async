# disk-db-async [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> disk-db-async

A Lightweight Disk based JSON Database with a MongoDB like API for Node. Rewriting [arvindr21/diskDB](https://github.com/arvindr21/diskDB) to follow TypeScript and latest convention.

## Getting started
- Install: `npm install disk-db-async --save`

## Documentation
Refer: [DOCS](https://github.com/arvindr21/disk-db-async/DOCS.md)

## Development Workflow
1. Fork & Clone Repo `git clone https://github.com/<<username>>/disk-db-async`
2. Develop: `npm run watch`
3. Once completed, check if anything is broken `npm run prepare`
4. Stage: `git add -A` & Commit code: `npm run commit`. Refer Contribution Guidelines.
5. Commit code to the forked repo `git push origin`
6. Submit PR

## Useful commands:
    npm run clean          - clean the last build
    npm run build          - build the library files
    npm run test           - run the tests
    npm run test:watch     - run the tests (watch-mode)
    npm run coverage       - run the tests with coverage
    npm run coverage:watch - run the tests with coverage (watch-mode)
    npm run pack           - build the library, make sure the tests passes, and then pack the library (creates .tgz)
    npm run release        - prepare package for next release

## Contribution Guidelines
1. Commit Message format must follow [commit-message-guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines) 
2. This module is setup with `commitizen cz-conventional-changelog` modules to validate commit messages. Refer [Setting up Git message validation hook](https://gist.github.com/bahmutov/a15d49b3fe503fb546fb) from more details.

## License

MIT © [Arvind Ravulavaru](https://github.com/arvindr21)


[npm-image]: https://badge.fury.io/js/disk-db-async.svg
[npm-url]: https://npmjs.org/package/disk-db-async
[travis-image]: https://travis-ci.org/arvindr21/disk-db-async.svg?branch=master
[travis-url]: https://travis-ci.org/arvindr21/disk-db-async
[daviddm-image]: https://david-dm.org/arvindr21/disk-db-async.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/arvindr21/disk-db-async
[coveralls-image]: https://coveralls.io/repos/arvindr21/disk-db-async/badge.svg
[coveralls-url]: https://coveralls.io/r/arvindr21/disk-db-async
