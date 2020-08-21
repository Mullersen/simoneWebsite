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
      comment: "",
      comments: [],
      tags: []
    };
  },
  methods: {
    closeError: function closeError() {
      document.getElementById("hidden").classList.remove("visible");
    },
    formatDate: function formatDate(value) {
      if (value) {
        moment__WEBPACK_IMPORTED_MODULE_1___default.a.locale("da");
        return moment__WEBPACK_IMPORTED_MODULE_1___default()(value).format("L");
      }
    },
    getComments: function getComments() {
      var _this = this;

      axios.post("/comment/getcomments", {
        header: this.header
      }).then(function (response) {
        console.log(response.data);

        if (response.data.comments.length >= 1) {
          response.data.comments.forEach(function (element) {
            _this.comments.push(element);
          });
        }
      })["catch"](function (error) {
        console.log(error.message); // change to error message on screen
      });
    },
    sendComment: function sendComment() {
      var _this2 = this;

      //diable comment button
      document.getElementById("commentButton").disabled = true; //send the comment, and retrieve it for insertion

      axios.post("/comment/sendcomment", {
        content: this.comment,
        user: this.user,
        header: this.header
      }).then(function (response) {
        console.log(response.data.comment[0]);
        _this2.comment = "";

        _this2.comments.push(response.data.comment[0]);
      })["catch"](function (error) {
        console.log(error.message);
        document.getElementById("hidden").classList.add("visible");

        if (_this2.user == "") {
          document.getElementById("errorTitle").innerHTML = "Du er blevet logget ud";
          document.getElementById("errorText").innerHTML = "Prøv at logge ind igen.";
        } else {
          document.getElementById("errorTitle").innerHTML = "Der gik noget galt";
          document.getElementById("errorText").innerHTML = "Prøv at logge ind igen for at sende en kommentar";
        }
      }); //enable button again

      setTimeout(function () {
        document.getElementById("commentButton").disabled = false;
      }, 3000);
    },
    deleteComment: function deleteComment(comment_id) {
      var _this3 = this;

      axios.post("/comment/deleteComment", {
        comment_id: comment_id,
        user_name: this.user
      }).then(function (response) {
        console.log(response.data);

        _this3.getComments();
      })["catch"](function (error) {
        console.log(error.message); // change to error message on screen
      });
    },
    getArticle: function getArticle() {
      var _this4 = this;

      console.log(this.header);
      axios.post("/articles/getarticle", {
        header: this.header
      }).then(function (response) {
        console.log(response.data.tags);
        _this4.article = response.data.article;
        _this4.tags = response.data.tags;
      })["catch"](function (error) {
        console.log(error.message); // change to error message on screen
      });
    }
  },
  beforeMount: function beforeMount() {
    this.getArticle();
    this.getComments();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MyArticle.vue?vue&type=style&index=0&id=4240eaca&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/MyArticle.vue?vue&type=style&index=0&id=4240eaca&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.content[data-v-4240eaca] {\n  margin-bottom: 1.5rem;\n}\n.button[data-v-4240eaca] {\n  border: none !important;\n}\n#hidden[data-v-4240eaca] {\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MyArticle.vue?vue&type=style&index=0&id=4240eaca&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/MyArticle.vue?vue&type=style&index=0&id=4240eaca&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./MyArticle.vue?vue&type=style&index=0&id=4240eaca&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MyArticle.vue?vue&type=style&index=0&id=4240eaca&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MyArticle.vue?vue&type=template&id=4240eaca&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/MyArticle.vue?vue&type=template&id=4240eaca&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
        staticClass: "hero is-medium heroBackgroundImage",
        style: { backgroundImage: "url(/" + _vm.article.header_image + ")" }
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
      _c("div", { staticClass: "columns is-centered" }, [
        _c("div", { staticClass: "column is-7" }, [
          _c(
            "div",
            { staticClass: "container has-text-centered" },
            _vm._l(_vm.tags, function(tag) {
              return _c(
                "span",
                { key: tag.id, staticClass: "tag is-medium is-white" },
                [_vm._v(_vm._s(tag.name))]
              )
            }),
            0
          ),
          _vm._v(" "),
          _c("div", {
            staticClass: "container",
            staticStyle: { "margin-top": "3rem" },
            domProps: { innerHTML: _vm._s(_vm.article.content) }
          })
        ])
      ])
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "section is-small" }, [
      this.comments.length >= 1
        ? _c("div", { staticClass: "container has-text-centered" }, [
            _c(
              "p",
              {
                staticClass: "subtitle",
                staticStyle: { "margin-bottom": "3.5rem" }
              },
              [_vm._v("Kommentarer")]
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "columns" }, [
          _c(
            "div",
            { staticClass: "column is-half" },
            _vm._l(_vm.comments, function(comment, index) {
              return _c("div", { key: index }, [
                _c("span", [
                  _c("h6", { staticStyle: { display: "inline" } }, [
                    _vm._v(_vm._s(comment.user.name))
                  ]),
                  _vm._v(" "),
                  comment.user.name === _vm.user
                    ? _c(
                        "button",
                        {
                          staticClass: "button is-small",
                          staticStyle: { float: "right" },
                          on: {
                            "~click": function($event) {
                              return _vm.deleteComment(comment.id)
                            }
                          }
                        },
                        [_vm._v("Slet")]
                      )
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "content" }, [
                  _vm._v(_vm._s(comment.content))
                ])
              ])
            }),
            0
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _vm.user.length > 1
      ? _c("section", { staticClass: "section is-small" }, [
          _c("div", { staticClass: "box" }, [
            _c("div", { staticClass: "field" }, [
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
              ])
            ]),
            _vm._v(" "),
            _c("div", [
              _c("div", { staticClass: "control" }, [
                _c(
                  "button",
                  {
                    staticClass: "button subtitle",
                    attrs: { id: "commentButton" },
                    on: { click: _vm.sendComment }
                  },
                  [_vm._v("Kommenter")]
                )
              ])
            ])
          ])
        ])
      : _c("section", [_vm._m(0)]),
    _vm._v(" "),
    _c("div", { staticClass: "box", attrs: { id: "hidden" } }, [
      _c("p", { staticClass: "subtitle", attrs: { id: "errorTitle" } }),
      _vm._v(" "),
      _c("p", { staticClass: "content", attrs: { id: "errorText" } }),
      _vm._v(" "),
      _c(
        "button",
        {
          on: {
            click: function($event) {
              return _vm.closeError()
            }
          }
        },
        [_vm._v("Close")]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box" }, [
      _c("p", { staticClass: "subtitle" }, [
        _vm._v("Log ind for at kommentere")
      ])
    ])
  }
]
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
/* harmony import */ var _MyArticle_vue_vue_type_template_id_4240eaca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyArticle.vue?vue&type=template&id=4240eaca&scoped=true& */ "./resources/js/views/MyArticle.vue?vue&type=template&id=4240eaca&scoped=true&");
/* harmony import */ var _MyArticle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyArticle.vue?vue&type=script&lang=js& */ "./resources/js/views/MyArticle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MyArticle_vue_vue_type_style_index_0_id_4240eaca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyArticle.vue?vue&type=style&index=0&id=4240eaca&scoped=true&lang=css& */ "./resources/js/views/MyArticle.vue?vue&type=style&index=0&id=4240eaca&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MyArticle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MyArticle_vue_vue_type_template_id_4240eaca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MyArticle_vue_vue_type_template_id_4240eaca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4240eaca",
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

/***/ "./resources/js/views/MyArticle.vue?vue&type=style&index=0&id=4240eaca&scoped=true&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/MyArticle.vue?vue&type=style&index=0&id=4240eaca&scoped=true&lang=css& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyArticle_vue_vue_type_style_index_0_id_4240eaca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./MyArticle.vue?vue&type=style&index=0&id=4240eaca&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MyArticle.vue?vue&type=style&index=0&id=4240eaca&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyArticle_vue_vue_type_style_index_0_id_4240eaca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyArticle_vue_vue_type_style_index_0_id_4240eaca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyArticle_vue_vue_type_style_index_0_id_4240eaca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyArticle_vue_vue_type_style_index_0_id_4240eaca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyArticle_vue_vue_type_style_index_0_id_4240eaca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/MyArticle.vue?vue&type=template&id=4240eaca&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/MyArticle.vue?vue&type=template&id=4240eaca&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyArticle_vue_vue_type_template_id_4240eaca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./MyArticle.vue?vue&type=template&id=4240eaca&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MyArticle.vue?vue&type=template&id=4240eaca&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyArticle_vue_vue_type_template_id_4240eaca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyArticle_vue_vue_type_template_id_4240eaca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);