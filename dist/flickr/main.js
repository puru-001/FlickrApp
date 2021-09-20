(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\purus\Downloads\angular-flickr-search-master\angular-flickr-search-master\src\main.ts */"zUnb");


/***/ }),

/***/ "0bJH":
/*!**********************************************************!*\
  !*** ./src/app/search-images/search-images.component.ts ***!
  \**********************************************************/
/*! exports provided: SearchImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchImagesComponent", function() { return SearchImagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_search_images_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./search-images.component.html */ "g67q");
/* harmony import */ var _search_images_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-images.component.css */ "0yU2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_flickr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/flickr.service */ "0g4Q");





let SearchImagesComponent = class SearchImagesComponent {
    constructor(flickrService) {
        this.flickrService = flickrService;
        this.images = [];
    }
    ngOnInit() {
    }
    search(event) {
        this.keyword = event.target.value.toLowerCase();
        if (this.keyword && this.keyword.length > 0) {
            this.flickrService.search_keyword(this.keyword)
                .toPromise()
                .then(res => {
                this.images = res;
            });
        }
    }
    onScroll() {
        if (this.keyword && this.keyword.length > 0) {
            this.flickrService.search_keyword(this.keyword)
                .toPromise()
                .then(res => {
                this.images = this.images.concat(res);
            });
        }
    }
};
SearchImagesComponent.ctorParameters = () => [
    { type: _services_flickr_service__WEBPACK_IMPORTED_MODULE_4__["FlickrService"] }
];
SearchImagesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-search-images',
        template: _raw_loader_search_images_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_search_images_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SearchImagesComponent);



/***/ }),

/***/ "0g4Q":
/*!********************************************!*\
  !*** ./src/app/services/flickr.service.ts ***!
  \********************************************/
/*! exports provided: FlickrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlickrService", function() { return FlickrService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");





let FlickrService = class FlickrService {
    constructor(http) {
        this.http = http;
        this.currPage = 1;
    }
    search_keyword(keyword) {
        if (this.prevKeyword === keyword) {
            this.currPage++;
        }
        else {
            this.currPage = 1;
        }
        this.prevKeyword = keyword;
        const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&';
        const params = `api_key=${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].flickr.key}&text=${keyword}&format=json&nojsoncallback=1&per_page=12&page=${this.currPage}`;
        return this.http.get(url + params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            const urlArr = [];
            res.photos.photo.forEach((ph) => {
                const photoObj = {
                    url: `https://farm${ph.farm}.staticflickr.com/${ph.server}/${ph.id}_${ph.secret}`,
                    title: ph.title
                };
                urlArr.push(photoObj);
            });
            return urlArr;
        }));
    }
};
FlickrService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FlickrService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FlickrService);



/***/ }),

/***/ "0yU2":
/*!***********************************************************!*\
  !*** ./src/app/search-images/search-images.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  object-fit: cover;\n  width: 100%;\n  height: 250px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1pbWFnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsYUFBYTtBQUNmIiwiZmlsZSI6InNlYXJjaC1pbWFnZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNTBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    flickr: {
        key: '6c1cf4c4d5fe283be9162eb56bae31a9'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() {
        this.title = 'flickr';
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-search-images></app-search-images>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _search_images_search_images_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-images/search-images.component */ "0bJH");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-infinite-scroll */ "dlKe");







let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _search_images_search_images_component__WEBPACK_IMPORTED_MODULE_4__["SearchImagesComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__["InfiniteScrollModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "g67q":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search-images/search-images.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <h1 class=\"text-center\">Flickr Image Search</h1>\n  <div class=\"form-group\">\n    <input type=\"search\" class=\"form-control\" (keyup)=\"search($event)\" placeholder=\"Search images\">\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-md-6 col-lg-4 p-3\" *ngFor=\"let image of images\">\n      \n      <div class=\"card\" style=\"height: 25%;width: 95%;\">\n        <p>{{image.title}}</p>\n        <a href=\"{{image.url}}_b.jpg\">\n          <img src=\"{{image.url}}_m.jpg\" title=\"{{image.title}}\">\n        </a>\n        \n      </div>\n    </div>\n  </div>\n  <div\n    class=\"search-results\"\n    infiniteScroll\n    [infiniteScrollDistance]=\"2\"\n    [infiniteScrollThrottle]=\"50\"\n    (scrolled)=\"onScroll()\">\n  </div>\n</div>\n");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map