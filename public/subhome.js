(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subhome"],{

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
      paginationCollection: {}
    };
  },
  methods: {
    formatDate: function formatDate(value) {
      if (value) {
        moment__WEBPACK_IMPORTED_MODULE_1___default.a.locale('da');
        return moment__WEBPACK_IMPORTED_MODULE_1___default()(value).format('L');
      }
    },
    getArticles: function getArticles(index) {
      var _this = this;

      axios.post("/article/getarticles/?page=" + index, {
        tagselection: this.subject
      }).then(function (response) {
        console.log(response.data.articles.data);
        _this.paginationCollection = response.data;
        response.data.articles.data.forEach(function (element) {
          _this.articles.push(element);
        });

        _this.buildMasonry();
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
    this.getArticles(1);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SubHome.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/SubHome.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Navigation_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Navigation.vue */ "./resources/js/components/Navigation.vue");
/* harmony import */ var _components_ArticleGrid_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ArticleGrid.vue */ "./resources/js/components/ArticleGrid.vue");
/* harmony import */ var _components_InstagramGrid_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/InstagramGrid.vue */ "./resources/js/components/InstagramGrid.vue");
/* harmony import */ var _subhome_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../subhome.js */ "./resources/js/subhome.js");
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




/* harmony default export */ __webpack_exports__["default"] = ({
  Name: "SubHome",
  props: {
    user: {
      required: true,
      type: String
    },
    subject: {
      required: true,
      type: String
    }
  },
  components: {
    NavigationBar: _components_Navigation_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ArticleGrid: _components_ArticleGrid_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    InstagramGrid: _components_InstagramGrid_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  computed: {
    subjectPage: function subjectPage() {
      var _this = this;

      return _subhome_js__WEBPACK_IMPORTED_MODULE_3__["default"].pages.find(function (element) {
        return element.name === _this.subject;
      });
    }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SubHome.vue?vue&type=template&id=4c80e3f0&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/SubHome.vue?vue&type=template&id=4c80e3f0& ***!
  \*****************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c(
        "div",
        {
          staticClass: "hero is-medium",
          style: { backgroundImage: "url(" + _vm.subjectPage.image + ")" }
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
              _c("h1", { staticClass: "title" }, [_vm._v(_vm._s(_vm.subject))])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c("section", { staticClass: "section is-medium has-text-centered" }, [
        _c(
          "p",
          {
            directives: [
              { name: "scrollanimation", rawName: "v-scrollanimation" }
            ],
            staticClass: "title citat",
            attrs: { id: "citation" }
          },
          [_vm._v(_vm._s(_vm.subjectPage.citation))]
        )
      ]),
      _vm._v(" "),
      _vm.subject == "OM"
        ? _c("div", [
            _c(
              "section",
              { staticClass: "section is-medium has-text-centered" },
              [
                _c("div", { staticClass: "container" }, [
                  _c(
                    "p",
                    {
                      directives: [
                        {
                          name: "scrollanimation",
                          rawName: "v-scrollanimation"
                        }
                      ],
                      staticClass: "content"
                    },
                    [
                      _vm._v(
                        "essou er en platform, hvor din mentale sundhed og balance er i fokus. Gennem deling af personlige erfaringer, faglig viden og kærlige værktøjer til dagligdagen ønsker vi at inspirere til en kultur, hvor du står øverst på to-do listen. Vi vil bidrage til en nuancering af, hvilken betydning og påvirkning stress har for den enkelte gennem fortællinger, man kan spejle sig i, og hvor den positive vinkel skaber håb om, at stress kan være en øjenåbner og anledning til at ændre retning i livet. Ved at se travlhed og stress som en mulighed for at gentænke din livsstil samt genfinde dig selv og dine værdier, kan du designe en mere meningsfuld tilværelse med alt det, der opløfter dig. Du har ansvaret og evnerne til at skabe dit bedste liv, og det er vores intention at styrke din bevidsthed om, hvordan det kan se ud i praksis."
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("h1", { staticClass: "title" }, [
                    _c(
                      "svg",
                      {
                        staticStyle: { height: "32px", width: "32px" },
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 512 512"
                        }
                      },
                      [
                        _c("path", {
                          attrs: {
                            d: "M0 0h512v512H0z",
                            fill: "#000000",
                            "fill-opacity": "0.01"
                          }
                        }),
                        _c(
                          "g",
                          {
                            staticStyle: { "touch-action": "none" },
                            attrs: { transform: "translate(0,0)" }
                          },
                          [
                            _c(
                              "g",
                              {
                                attrs: {
                                  transform:
                                    "translate(0, 0) scale(1, 1) rotate(-90, 256, 256)"
                                }
                              },
                              [
                                _c("path", {
                                  attrs: {
                                    d:
                                      "M256 23C127.424 23 23 127.424 23 256C23 384.576 127.424 489 256 489C384.576 489 489 384.576 489 256C489 127.424 384.576 23 256 23Z",
                                    fill: "#000000",
                                    "fill-opacity": "1"
                                  }
                                }),
                                _c("path", {
                                  attrs: {
                                    d:
                                      "M249.906 41.09C128.036 47.807 130.066 256 256 256C381.215 256 383.935 461.872 264.168 470.83C261.458 470.93 258.736 471 256 471C137.152 471 41 374.848 41 256C41 139.19 133.883 44.31 249.906 41.09Z",
                                    fill: "#ffffff",
                                    "fill-opacity": "1"
                                  }
                                }),
                                _c("path", {
                                  attrs: {
                                    d:
                                      "M256 103C278.537 103 297 121.463 297 144C297 166.537 278.537 185 256 185C233.463 185 215 166.537 215 144C215 121.463 233.463 103 256 103Z",
                                    fill: "#ffffff",
                                    "fill-opacity": "1"
                                  }
                                }),
                                _c("path", {
                                  staticClass: "selected",
                                  attrs: {
                                    d:
                                      "M256 327C233.463 327 215 345.463 215 368C215 390.537 233.463 409 256 409C278.537 409 297 390.537 297 368C297 345.463 278.537 327 256 327Z",
                                    fill: "#000000",
                                    "fill-opacity": "1"
                                  }
                                })
                              ]
                            )
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "svg",
                      {
                        staticStyle: { height: "32px", width: "32px" },
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 512 512"
                        }
                      },
                      [
                        _c("path", {
                          attrs: {
                            d: "M0 0h512v512H0z",
                            fill: "#000000",
                            "fill-opacity": "0.01"
                          }
                        }),
                        _c(
                          "g",
                          {
                            staticStyle: { "touch-action": "none" },
                            attrs: { transform: "translate(0,0)" }
                          },
                          [
                            _c(
                              "g",
                              {
                                attrs: {
                                  transform:
                                    "translate(0, 0) scale(1, 1) rotate(-90, 256, 256)"
                                }
                              },
                              [
                                _c("path", {
                                  attrs: {
                                    d:
                                      "M256 23C127.424 23 23 127.424 23 256C23 384.576 127.424 489 256 489C384.576 489 489 384.576 489 256C489 127.424 384.576 23 256 23Z",
                                    fill: "#000000",
                                    "fill-opacity": "1"
                                  }
                                }),
                                _c("path", {
                                  attrs: {
                                    d:
                                      "M249.906 41.09C128.036 47.807 130.066 256 256 256C381.215 256 383.935 461.872 264.168 470.83C261.458 470.93 258.736 471 256 471C137.152 471 41 374.848 41 256C41 139.19 133.883 44.31 249.906 41.09Z",
                                    fill: "#ffffff",
                                    "fill-opacity": "1"
                                  }
                                }),
                                _c("path", {
                                  attrs: {
                                    d:
                                      "M256 103C278.537 103 297 121.463 297 144C297 166.537 278.537 185 256 185C233.463 185 215 166.537 215 144C215 121.463 233.463 103 256 103Z",
                                    fill: "#ffffff",
                                    "fill-opacity": "1"
                                  }
                                }),
                                _c("path", {
                                  staticClass: "selected",
                                  attrs: {
                                    d:
                                      "M256 327C233.463 327 215 345.463 215 368C215 390.537 233.463 409 256 409C278.537 409 297 390.537 297 368C297 345.463 278.537 327 256 327Z",
                                    fill: "#000000",
                                    "fill-opacity": "1"
                                  }
                                })
                              ]
                            )
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "svg",
                      {
                        staticStyle: { height: "32px", width: "32px" },
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 512 512"
                        }
                      },
                      [
                        _c("path", {
                          attrs: {
                            d: "M0 0h512v512H0z",
                            fill: "#000000",
                            "fill-opacity": "0.01"
                          }
                        }),
                        _c(
                          "g",
                          {
                            staticStyle: { "touch-action": "none" },
                            attrs: { transform: "translate(0,0)" }
                          },
                          [
                            _c(
                              "g",
                              {
                                attrs: {
                                  transform:
                                    "translate(0, 0) scale(1, 1) rotate(-90, 256, 256)"
                                }
                              },
                              [
                                _c("path", {
                                  attrs: {
                                    d:
                                      "M256 23C127.424 23 23 127.424 23 256C23 384.576 127.424 489 256 489C384.576 489 489 384.576 489 256C489 127.424 384.576 23 256 23Z",
                                    fill: "#000000",
                                    "fill-opacity": "1"
                                  }
                                }),
                                _c("path", {
                                  attrs: {
                                    d:
                                      "M249.906 41.09C128.036 47.807 130.066 256 256 256C381.215 256 383.935 461.872 264.168 470.83C261.458 470.93 258.736 471 256 471C137.152 471 41 374.848 41 256C41 139.19 133.883 44.31 249.906 41.09Z",
                                    fill: "#ffffff",
                                    "fill-opacity": "1"
                                  }
                                }),
                                _c("path", {
                                  attrs: {
                                    d:
                                      "M256 103C278.537 103 297 121.463 297 144C297 166.537 278.537 185 256 185C233.463 185 215 166.537 215 144C215 121.463 233.463 103 256 103Z",
                                    fill: "#ffffff",
                                    "fill-opacity": "1"
                                  }
                                }),
                                _c("path", {
                                  staticClass: "selected",
                                  attrs: {
                                    d:
                                      "M256 327C233.463 327 215 345.463 215 368C215 390.537 233.463 409 256 409C278.537 409 297 390.537 297 368C297 345.463 278.537 327 256 327Z",
                                    fill: "#000000",
                                    "fill-opacity": "1"
                                  }
                                })
                              ]
                            )
                          ]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("p", { staticClass: "subtitle" }, [
                    _vm._v("For spørgsmål eller samarbejde")
                  ]),
                  _vm._v(" "),
                  _vm._m(0),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "h2",
                    {
                      directives: [
                        {
                          name: "scrollanimation",
                          rawName: "v-scrollanimation"
                        }
                      ],
                      staticClass: "subtitle"
                    },
                    [_vm._v("BIOGRAFI")]
                  ),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      directives: [
                        {
                          name: "scrollanimation",
                          rawName: "v-scrollanimation"
                        }
                      ],
                      staticClass: "content"
                    },
                    [
                      _vm._v(
                        "Simone Løkke er cand.merc i strategisk kommunikation og marketing fra Copenhagen Business School og har senest arbejdet med sociale medier, marketing, PR og events. Som følge af stress har hendes personlige rejse affødt en nysgerrighed for udvikling, selvindsigt og bevidsthed, der netop har resulteret i gennemførelsen af et seks måneders intensivt coachingforløb om menneskets og sindets potentiale."
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      directives: [
                        {
                          name: "scrollanimation",
                          rawName: "v-scrollanimation"
                        }
                      ],
                      staticClass: "content"
                    },
                    [
                      _vm._v(
                        "“For mig var stress reaktionen på en årelang negligering af mig selv og mine behov. Det blev en omvej i den rigtige retning med livslektien om at sænke tempoet, sætte grænser, sige nej tak og fylde min egen kop op før andres. Jeg nyder i dag et liv med langt større glæde, overskud og balance, og det er derfor mit ønske at være ambassadør for, at stress kan være en konstruktiv mulighed for at skabe en hverdag i større overensstemmelse med din essens. Denne platform er manifestationen af det indre arbejde med mig selv og drømmen om at viderebringe min viden og erfaring til gavn for dig. Jeg er ufatteligt taknemmelig for, at du læser med og håber, at du vil blive inspireret til at foretage kærlige ændringer i dit eget liv.”"
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      directives: [
                        {
                          name: "scrollanimation",
                          rawName: "v-scrollanimation"
                        }
                      ],
                      staticClass: "content is-italic"
                    },
                    [_vm._v("-- Simone Løkke")]
                  )
                ])
              ]
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("ArticleGrid", {
        directives: [{ name: "scrollanimation", rawName: "v-scrollanimation" }],
        attrs: { subject: _vm.subject }
      }),
      _vm._v(" "),
      _c("InstagramGrid", {
        directives: [{ name: "scrollanimation", rawName: "v-scrollanimation" }]
      })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "content" }, [
      _c("a", { attrs: { href: "mailto:kontakt@essou.dk" } }, [
        _vm._v("kontakt@essou.dk")
      ])
    ])
  }
]
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
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleGrid_vue_vue_type_style_index_0_id_000b637e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleGrid_vue_vue_type_style_index_0_id_000b637e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
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



/***/ }),

/***/ "./resources/js/views/SubHome.vue":
/*!****************************************!*\
  !*** ./resources/js/views/SubHome.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubHome_vue_vue_type_template_id_4c80e3f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubHome.vue?vue&type=template&id=4c80e3f0& */ "./resources/js/views/SubHome.vue?vue&type=template&id=4c80e3f0&");
/* harmony import */ var _SubHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubHome.vue?vue&type=script&lang=js& */ "./resources/js/views/SubHome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SubHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SubHome_vue_vue_type_template_id_4c80e3f0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SubHome_vue_vue_type_template_id_4c80e3f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/SubHome.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/SubHome.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/views/SubHome.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SubHome.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SubHome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/SubHome.vue?vue&type=template&id=4c80e3f0&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/SubHome.vue?vue&type=template&id=4c80e3f0& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubHome_vue_vue_type_template_id_4c80e3f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SubHome.vue?vue&type=template&id=4c80e3f0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SubHome.vue?vue&type=template&id=4c80e3f0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubHome_vue_vue_type_template_id_4c80e3f0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubHome_vue_vue_type_template_id_4c80e3f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);