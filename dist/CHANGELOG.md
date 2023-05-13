# Changelog

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 1.1.0

### Added

- Added `name` task runner option and `NX_CACHE_NAME` env variable to set a custom cache name

## 1.0.0

### Added

- Added `initEnv(options)` function for reading environment variables from `.env`

## 0.0.6

### Fixed

- File copying from `.cache` to `dist` works again

### Fixed

- `fs/promises` import broken in Node 12 and below

## 0.0.5

### Fixed

- `fs/promises` import broken in Node 12 and below

## 0.0.4

### Fixed

- `silent` option now correctly mutes all info and success logs

## 0.0.3

### Added

- `silent` option to mute info and success logs

## 0.0.2

### Added

- Initial implementation of `createCustomRunner`
