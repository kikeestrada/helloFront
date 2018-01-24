const app = "./app";
const build = "./build";
const fontName = "app-font";
const assets_dest = "./build/assets";

module.exports = {
  app: app,
  build: build,
  assets_dest: assets_dest,

  browserSync: {
    notify: false,
    open: false,
    server: build,
    files: [build + "/**/*.css"],
  },

  styles: {
    src: app + "/assets/scss",
    files_src: app + "/assets/scss/**/*.scss",
    dest: assets_dest,
  },

  scripts: {
    files_src: app + "/assets/js/**/*.js",
    main_src: app + "/assets/js/main.js",
    main_name: "main.js",
    dest: assets_dest,
  },

  templates: {
    src: app + "/template",
    files_src: [app + "/template/**/*.pug", app + "/template/**/*.md"],
    page_src: app + "/template/pages/**/*.pug",
    dest: build,
    files_dest: build + "/**/*.html",
  },

  svg: {
    files_src: [
      "!" + app + "/assets/img/sprite/**/*.svg",
      "!" + app + "/assets/img/sprite.svg",
      app + "/assets/img/**/*.svg",
    ],
    dest: app + "/assets/img",
  },

  images: {
    files_src: [
      "!" + app + "/assets/img/sprite/**/*.svg",
      "!" + app + "/assets/img/sprite.svg",
      app + "/assets/img/**/*.{jpg,png,gif, svg}",
    ],
    dest: assets_dest,
  },

  svgstore: {
    files_src_svg_sprites: app + "/assets/img/sprite/*.svg",
    dest: app + "/assets/img",
    file_dest: app + "/assets/img/sprite.svg",
  },

  rootfiles: {
    src: app + "/rootfiles/**",
    dest: build,
  },

  fonts: {
    src: app + "/assets/fonts/**",
    dest: assets_dest,
  },

  font_icon: {
    enable: false,
    path_create_icon_font_file: app + "/assets/scss/atoms/_icons.scss",
    src: app + "/assets/icons",
    files_src: app + "/assets/icons/*.svg",
    path: app + "/assets/scss/tools/_template-font-custom.scss",
    target_path: "../scss/atoms/_icons.scss",
    font_path: "../fonts/",
    dest: app + "/assets/fonts",
    files_dest: app + "/assets/fonts/" + fontName + ".{eot,svg,ttf,woff}",
    settings: {
      prependUnicode: true,
      font_name: fontName,
      normalize: true,
      font_height: 512,
    },
  },

  url: {
    urlLocal: "http://localhost:3000",
    urlProd: "http://sutter.github.io/helloFront",
  },

  deploy: {
    folderSrc: build + "/**/*",
    folderReplaceSrc: [
      build + "/**/*.html",
      build + "/**/*.js",
      build + "/**/*.css",
    ],
  },
};
