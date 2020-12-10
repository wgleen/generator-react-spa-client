# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

### PR: Feature: Components layer with styled components (@wgleen in https://github.com/wgleen/generator-react-spa-client/pull/13)

### Added
- add dependencies to component layer
- add ThemeProvider with default style configs
- add Wrapper component with all Providers
- add Text component
- add head component
- add DefaultLayput component
- add Head, DefaultLayout and Text to the Home page component
- add ThemeProvider into App component

### Changed
- change config stylelint with styled-components rules

### Fixed
- fix Router tests with Wrapper providers


### PR: Feature: Reducks layer (@wgleen in https://github.com/wgleen/generator-react-spa-client/pull/12)

### Added
- add reducks layer dependencies
- add redux middlewares
- add root reducers into reducks layer
- add redux store into reducks layer
- add index of reducks layer
- add index of resources from reducks layer
- add ReduxProvider into App component
- add ReduxProvider
- add reducks, integration, lib and config to the coverage report


### PR: Fix: Routes tests (@wgleen in https://github.com/wgleen/generator-react-spa-client/pull/11)

### Fixed
- fix Routes test with initialEntries prop with key value on MemoryRouter component


### PR: Feature: Integration layer (@wgleen in https://github.com/wgleen/generator-react-spa-client/pull/10)

### Added
- add example config into .env.example
- add integration layer dependencies
- add interceptors to integration layer
- add client as a axios instance in integration layer
- add authentication lib
- add request in integration layer
- add default application serializer in integration layer
- add index resource from integration layer
- add index of integration layer

### Changed
- change eslint config to add jest recommentations config
- update Routes snapshot

### Fixed
- fix webpack config with proccess provider


### PR: Feature: Config structure (@wgleen in https://github.com/wgleen/generator-react-spa-client/pull/8)

### Added
- add example config into .env.example
- add api config
- add site config
- add general config module with all others configs together

### Changed
- change gitignore with .env
- change webpack config with dotenv loader
- change test setup with dotenv loader
- change Routes component to use new config module


### PR: Feature: Change react-testing-library to enzyme (@wgleen in https://github.com/wgleen/generator-react-spa-client/pull/7)

### Added
- add dynamic import plugin into babel config
- add enzyme dependencies
- add enzyme adapter into test setup file
- add test to check the current page

### Changed
- change jest config to snapshot enzyme output
- change app test to use enzyme
- change tests of router to enzyme
- change Home component tests to enzyme
- change routerProvider tests to use enzyme


### PR: Feature: React router with code splitting (@wgleen in https://github.com/wgleen/generator-react-spa-client/pull/6)

### Added
- add react-router-dom dependency
- add eslint import plugin
- add routes config
- add Routes component
- add RouterProvider with react-router-dom provider
- add Router component with RouterProvider and Routes
- add Home page component
- add Router into App component

### Changed
- change setup file with config of jest with expect extends

### Fixed
- fix webpack publicPath config in production environment


### PR: Feature: Configure test suite (@wgleen in https://github.com/wgleen/generator-react-spa-client/pull/4)

### Added
- add tests scripts and dependencies
- add jest config
- add setup and helpers file to jest environment
- add jest eslint plugin
- add vscode config with jest-runner config for running tests
- add coverage path into gitignore
- add documentation for tests in README
- add tests do App component


### PR: Feature: Lint (@wgleen in https://github.com/wgleen/generator-react-spa-client/pull/3)

### Added
- add webpack and babel dependencies
- add build and dev scripts for npm (package.json)
- add babel config
- add webpack config
- add public path
- add basic structure for application
- add gitignore


### PR: Feature: Lint (@wgleen in https://github.com/wgleen/generator-react-spa-client/pull/2)

### Added
- add config to the editor
- add lint external dependencies
- add eslint config
- add prettier config
- add stylelint config

### Changed
- update readme with lint infos


### PR: Feature: Initial Structure (@wgleen in https://github.com/wgleen/generator-react-spa-client/pull/1)

### Added
- add npm and add basic package.json
- add basic changelog
- add basic gitignore

### Changed
- update readme with documentation infos
