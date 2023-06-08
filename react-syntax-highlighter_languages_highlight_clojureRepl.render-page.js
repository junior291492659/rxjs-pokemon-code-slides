exports.ids = ["react-syntax-highlighter_languages_highlight_clojureRepl"];
exports.modules = {

/***/ "../highlight.js/lib/languages/clojure-repl.js":
/*!*****************************************************!*\
  !*** ../highlight.js/lib/languages/clojure-repl.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  return {
    contains: [
      {
        className: 'meta',
        begin: /^([\w.-]+|\s*#_)?=>/,
        starts: {
          end: /$/,
          subLanguage: 'clojure'
        }
      }
    ]
  }
};

/***/ })

};;
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_clojureRepl.render-page.js.map