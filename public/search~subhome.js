(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search~subhome"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ArticleGrid.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ArticleGrid.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _subhome_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../subhome.js */ "./resources/js/subhome.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var Macy = __webpack_require__(/*! macy */ "./node_modules/macy/dist/macy.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ArticleGrid",
  props: {
    subject: {
      required: true,
      type: String
    }
  },
  data: function data() {
    return {
      articles: [],
      paginationCollection: {},
      tagSelection: []
    };
  },
  computed: {
    subjectPage: function subjectPage() {
      var _this = this;

      return _subhome_js__WEBPACK_IMPORTED_MODULE_0__["default"].pages.find(function (element) {
        return element.name === _this.subject;
      });
    }
  },
  methods: {
    formatDate: function formatDate(value) {
      if (value) {
        moment__WEBPACK_IMPORTED_MODULE_1___default.a.locale('da');
        return moment__WEBPACK_IMPORTED_MODULE_1___default()(value).format('L');
      }
    },
    fillTagSelection: function fillTagSelection() {
      if (this.subject == "BALANCE" || this.subject == "STRESS" || this.subject == "LIVET EFTER STRESS") {
        this.tagSelection = this.subjectPage.subject_tags;
        this.getArticles(1);
      } else {
        this.tagSelection = this.subject;
        this.getArticles(1);
      }
    },
    getArticles: function getArticles(index) {
      var _this2 = this;

      axios.post("/article/getarticles/?page=" + index, {
        tagselection: this.tagSelection
      }).then(function (response) {
        console.log(response.data.articles.data);
        _this2.paginationCollection = response.data;
        response.data.articles.data.forEach(function (element) {
          _this2.articles.push(element);
        });

        _this2.buildMasonry();
      })["catch"](function (error) {
        console.log(error.message); // change to error message on screen
        //this.loading = false;
      });
    },
    buildMasonry: function buildMasonry() {
      setTimeout(function () {
        //console.log("masonry is being built");
        var macyInstance = Macy({
          container: '#masonContainer',
          columns: 2,
          waitForImages: true,
          trueOrder: true,
          margin: {
            x: 40,
            y: 70
          },
          breakAt: {
            1040: 1
          }
        });
        setTimeout(function () {
          var section = document.getElementById("hiddenSection");
          section.classList.remove('hidden');
        }, 500);
      }, 500); // setTimeout(function(){
      //     console.log("timeout called");
      //     macyInstance.recalculate(true, true);
      // }, 2000)
    }
  },
  beforeMount: function beforeMount() {
    this.fillTagSelection();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ArticleGrid.vue?vue&type=style&index=0&id=000b637e&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ArticleGrid.vue?vue&type=style&index=0&id=000b637e&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.card[data-v-000b637e]{\n    word-break: break-all;\n    padding: 1rem;\n    box-shadow: none !important;\n}\n.hidden[data-v-000b637e]{\n    visibility:hidden;\n}\n.button[data-v-000b637e]{\n    border: none !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ArticleGrid.vue?vue&type=style&index=0&id=000b637e&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ArticleGrid.vue?vue&type=style&index=0&id=000b637e&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ArticleGrid.vue?vue&type=style&index=0&id=000b637e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ArticleGrid.vue?vue&type=style&index=0&id=000b637e&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ArticleGrid.vue?vue&type=template&id=000b637e&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ArticleGrid.vue?vue&type=template&id=000b637e&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "section",
      { staticClass: "section hidden", attrs: { id: "hiddenSection" } },
      [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "columns is-centered" }, [
            _c(
              "div",
              { staticClass: "column is-8", attrs: { id: "masonContainer" } },
              _vm._l(_vm.articles, function(article) {
                return _c(
                  "div",
                  { key: article.id, staticClass: "card" },
                  [
                    _c(
                      "router-link",
                      {
                        attrs: {
                          to: {
                            name: "article",
                            params: { header: article.header }
                          }
                        }
                      },
                      [
                        _c("img", {
                          attrs: {
                            src: "/" + article.header_image,
                            alt: "artikel billede"
                          }
                        }),
                        _vm._v(" "),
                        _c("p", { staticClass: "title" }, [
                          _vm._v(_vm._s(article.header))
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "subtitle" }, [
                          _vm._v(_vm._s(_vm.formatDate(article.created_at)))
                        ]),
                        _vm._v(" "),
                        _c("p", {
                          staticClass: "content",
                          domProps: {
                            innerHTML: _vm._s(
                              article.content.slice(0, 180) + "..."
                            )
                          }
                        })
                      ]
                    )
                  ],
                  1
                )
              }),
              0
            )
          ])
        ]),
        _vm._v(" "),
        _vm.articles.length >= 1
          ? _c("div", { staticClass: "columns is-centered" }, [
              _c(
                "button",
                {
                  staticClass: "button subtitle",
                  on: {
                    click: function($event) {
                      return _vm.getArticles(
                        _vm.paginationCollection.articles.current_page + 1
                      )
                    }
                  }
                },
                [_vm._v("Læs mere")]
              )
            ])
          : _vm._e()
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ArticleGrid.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/ArticleGrid.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ArticleGrid_vue_vue_type_template_id_000b637e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArticleGrid.vue?vue&type=template&id=000b637e&scoped=true& */ "./resources/js/components/ArticleGrid.vue?vue&type=template&id=000b637e&scoped=true&");
/* harmony import */ var _ArticleGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArticleGrid.vue?vue&type=script&lang=js& */ "./resources/js/components/ArticleGrid.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ArticleGrid_vue_vue_type_style_index_0_id_000b637e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArticleGrid.vue?vue&type=style&index=0&id=000b637e&scoped=true&lang=css& */ "./resources/js/components/ArticleGrid.vue?vue&type=style&index=0&id=000b637e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ArticleGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ArticleGrid_vue_vue_type_template_id_000b637e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ArticleGrid_vue_vue_type_template_id_000b637e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "000b637e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ArticleGrid.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ArticleGrid.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/ArticleGrid.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ArticleGrid.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ArticleGrid.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ArticleGrid.vue?vue&type=style&index=0&id=000b637e&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/ArticleGrid.vue?vue&type=style&index=0&id=000b637e&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleGrid_vue_vue_type_style_index_0_id_000b637e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ArticleGrid.vue?vue&type=style&index=0&id=000b637e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ArticleGrid.vue?vue&type=style&index=0&id=000b637e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleGrid_vue_vue_type_style_index_0_id_000b637e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleGrid_vue_vue_type_style_index_0_id_000b637e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleGrid_vue_vue_type_style_index_0_id_000b637e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleGrid_vue_vue_type_style_index_0_id_000b637e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleGrid_vue_vue_type_style_index_0_id_000b637e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/ArticleGrid.vue?vue&type=template&id=000b637e&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/ArticleGrid.vue?vue&type=template&id=000b637e&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleGrid_vue_vue_type_template_id_000b637e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ArticleGrid.vue?vue&type=template&id=000b637e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ArticleGrid.vue?vue&type=template&id=000b637e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleGrid_vue_vue_type_template_id_000b637e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleGrid_vue_vue_type_template_id_000b637e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);