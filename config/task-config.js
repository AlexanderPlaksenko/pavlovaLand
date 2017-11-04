module.exports = {
  html        : true,
  images      : true,
  fonts       : true,
  static      : true,
  svgSprite   : true,
  ghPages     : false,

  javascripts: {
    entry: {
      // files paths are relative to
      // javascripts.dest in path-config.json
      app: ["./app.js"]
    }
  },

  stylesheets: {
      autoprefixer: {
          browsers: ["last 3 version"]
      },
      sass: {
          indentedSyntax: false,
          includePaths: [
              "./node_modules/normalize.css"
          ]
      },
      extensions: ["sass", "scss", "css"]
  },

  browserSync: {
    server: {
      // should match `dest` in
      // path-config.json
      baseDir: 'public'
    }
  },

  production: {
    rev: true
  }
}
