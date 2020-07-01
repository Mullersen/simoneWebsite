(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["article"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MyArticle.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/MyArticle.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Navigation_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Navigation.vue */ "./resources/js/components/Navigation.vue");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "myarticle",
  components: {
    NavigationBar: _components_Navigation_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    header: {
      required: true,
      type: String
    },
    user: {
      required: true,
      type: String
    }
  },
  data: function data() {
    return {
      article: [],
      comment: ""
    };
  },
  methods: {
    formatDate: function formatDate(value) {
      if (value) {
        moment__WEBPACK_IMPORTED_MODULE_1___default.a.locale("da");
        return moment__WEBPACK_IMPORTED_MODULE_1___default()(value).format("L");
      }
    },
    getComment: function getComment() {
      axios.post('/comment/getcomments', {
        header: this.header
      }).then(function (response) {
        console.log(response.data);
      })["catch"](function (error) {
        console.log(error.message); // change to error message on screen
      });
    },
    sendComment: function sendComment() {
      axios.post('/comment/sendcomment', {
        content: this.comment,
        user: this.user,
        header: this.header
      }).then(function (response) {
        console.log(response.data);
      })["catch"](function (error) {
        console.log(error.message); // change to error message on screen
      });
    },
    getArticle: function getArticle() {
      var _this = this;

      console.log(this.header);
      axios.post("/articles/getarticle", {
        header: this.header
      }).then(function (response) {
        console.log(response.data.article[0]);
        _this.article = response.data.article[0];
      })["catch"](function (error) {
        console.log(error.message); // change to error message on screen
      });
    }
  },
  beforeMount: function beforeMount() {
    this.getArticle();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MyArticle.vue?vue&type=template&id=4240eaca&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/MyArticle.vue?vue&type=template&id=4240eaca& ***!
  \*******************************************************************************************************************************************************************************************************/
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
      {
        staticClass: "hero is-medium",
        style: { backgroundImage: "url(/" + _vm.article.image + ")" }
      },
      [
        _c(
          "div",
          { staticClass: "hero-head" },
          [_c("NavigationBar", { attrs: { user: this.user } })],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "hero-body" }, [
          _c("div", { staticClass: "container has-text-centered" }, [
            _c("h1", { staticClass: "title" }, [
              _vm._v(_vm._s(_vm.article.header))
            ]),
            _vm._v(" "),
            _c("h2", { staticClass: "subtitle" }, [
              _vm._v(_vm._s(_vm.formatDate(_vm.article.created_at)))
            ])
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c("section", { staticClass: "section" }, [
      _c("div", { staticClass: "container" }, [
        _vm._v(_vm._s(_vm.article.content))
      ])
    ]),
    _vm._v(" "),
    _vm.user.length > 1
      ? _c("section", { staticClass: "section is-small" }, [
          _c("div", { staticClass: "box" }, [
            _c("div", { staticClass: "field" }, [
              _c("label", { staticClass: "label" }, [_vm._v("Kommenter")]),
              _vm._v(" "),
              _c("div", { staticClass: "control" }, [
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.comment,
                      expression: "comment"
                    }
                  ],
                  staticClass: "textarea",
                  attrs: { rows: "3", placeholder: "Din kommentar" },
                  domProps: { value: _vm.comment },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.comment = $event.target.value
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "control" }, [
                _c(
                  "button",
                  {
                    staticClass: "button is-link",
                    on: { click: _vm.sendComment }
                  },
                  [_vm._v("Indsend")]
                )
              ])
            ])
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/MyArticle.vue":
/*!******************************************!*\
  !*** ./resources/js/views/MyArticle.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyArticle_vue_vue_type_template_id_4240eaca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyArticle.vue?vue&type=template&id=4240eaca& */ "./resources/js/views/MyArticle.vue?vue&type=template&id=4240eaca&");
/* harmony import */ var _MyArticle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyArticle.vue?vue&type=script&lang=js& */ "./resources/js/views/MyArticle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MyArticle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MyArticle_vue_vue_type_template_id_4240eaca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MyArticle_vue_vue_type_template_id_4240eaca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/MyArticle.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/MyArticle.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/MyArticle.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyArticle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MyArticle.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MyArticle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyArticle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/MyArticle.vue?vue&type=template&id=4240eaca&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/MyArticle.vue?vue&type=template&id=4240eaca& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyArticle_vue_vue_type_template_id_4240eaca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./MyArticle.vue?vue&type=template&id=4240eaca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MyArticle.vue?vue&type=template&id=4240eaca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyArticle_vue_vue_type_template_id_4240eaca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyArticle_vue_vue_type_template_id_4240eaca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);