# [grunt](http://gruntjs.com/)-pleeease [![Build Status](https://secure.travis-ci.org/danielhusar/grunt-pleeease.svg?branch=master)](http://travis-ci.org/danielhusar/grunt-pleeease)

> Postprocess CSS with ease

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-pleeease --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-pleeease');
```

## The "pleeease" task

### Overview
In your project's Gruntfile, add a section named `pleeease` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  pleeease: {
    custom: {
      options: {
        autoprefixer: {'browsers': ['last 4 versions', 'ios 6']},
        filters: {'oldIE': true},
        rem: ['12px'],
        minifier: false,
        ...
      },
      files: {
        'tmp/style.css': 'test/fixtures/style.css'
      }
    }
  },
})
```

Files should be declared with source in the **value** and destination in the **key** object. In the previous example `test/fixtures/styles.css` is the **source** and `tmp/styles.css` is the **destination**.

Multiple files
```js
grunt.initConfig({
  pleeease: {
    custom: {
      options: {
        minifier: false
      },
      files: {
        'tmp/': 'test/fixtures/*.css'
      }
    }
  },
})
```

### Options

Options passed into pleeease library.

same as [pleeease options](http://pleeease.io/docs/#features)

## License

MIT © [Daniel Husar](https://github.com/danielhusar)
