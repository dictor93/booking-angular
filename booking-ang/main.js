(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-drawer>\n\n</app-drawer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'booking-ang';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _drawer_drawer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./drawer/drawer.module */ "./src/app/drawer/drawer.module.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _drawer_drawer_module__WEBPACK_IMPORTED_MODULE_7__["DrawerModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/booking/api-methods.service.ts":
/*!************************************************!*\
  !*** ./src/app/booking/api-methods.service.ts ***!
  \************************************************/
/*! exports provided: ApiMethodsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiMethodsService", function() { return ApiMethodsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./src/config.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var shake_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shake.js */ "./node_modules/shake.js/shake.js");
/* harmony import */ var shake_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(shake_js__WEBPACK_IMPORTED_MODULE_5__);






var ApiMethodsService = /** @class */ (function () {
    function ApiMethodsService(_http) {
        this._http = _http;
        this.hotelsUrl = _config__WEBPACK_IMPORTED_MODULE_3__["API_BASE_URL"] + "hotels/";
        this.bookingsUrl = _config__WEBPACK_IMPORTED_MODULE_3__["API_BASE_URL"] + "bookings/";
    }
    ApiMethodsService.prototype.getHotels = function () {
        return this._http.get(this.hotelsUrl);
    };
    ApiMethodsService.prototype.getBookings = function (id) {
        return this._http.get(this.bookingsUrl + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            // console.log(resp[0].bookings);
            return resp[0].bookings;
        }));
    };
    ApiMethodsService.prototype.setBookings = function (id, data) {
        return this._http.put(this.bookingsUrl, { _id: id, bookings: data });
    };
    ApiMethodsService.prototype.shakeListen = function () {
        var shakeEvent = new shake_js__WEBPACK_IMPORTED_MODULE_5___default.a({ threshold: 15 });
        shakeEvent.start();
        window.addEventListener('shake', function () {
            alert("Shaked");
        }, false);
    };
    ApiMethodsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiMethodsService);
    return ApiMethodsService;
}());



/***/ }),

/***/ "./src/app/booking/booking.component.html":
/*!************************************************!*\
  !*** ./src/app/booking/booking.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class='title'>Booking Widget</h1>\n<div class=\"booking-content\">\n  <div fxLayout=\"row\" fxLayoutGap='14px' fxLayout.sm=\"column\" fxLayout.xs=\"column\" fxFlexFill>\n    <div fxFlex.sm='100' fxFlex='65' fxLayout=\"row\" fxLayoutGap='14px' fxLayout.xs=\"column\" fxFlexFill>\n      <div [fxFlex]='100/12*8' fxFlex.xs=\"100\">\n        <mat-card class=\"hotels-card\">\n          <img mat-card-image [src]=\"currentHotel?.picture\" alt=\"Loading...\">\n          <mat-form-field appearance=\"outline\" color='primary' class=\"search-field\">\n            <input matInput placeholder=\"Serch hotels\" [value]=\"searchText || ''\" (input)=\"search($event)\">\n          </mat-form-field>\n          <div flexLayout=\"row\" fxFlexFill>\n            <div fxFlex='65'>\n              <star-rating [starType]=\"'svg'\" size='large' [rating]=\"starsSort\" (ratingChange)=\"setStarsSort($event)\">\n              </star-rating>\n            </div>\n            <div fxFlex='35'>\n              <button color='primary' mat-raised-button (click)=\"resetFilters()\">Reset</button>\n            </div>\n          </div>\n          <mat-card-content>\n            <h2>Hotels list</h2>\n            <p *ngIf='isLoading'>Loading...</p>\n            <app-list (onHotelChange)='changeHotel($event)' (onBooking)='bookingHotel($event)' [searchText]=searchText\n              [starsSort]='starsSort' [hotels$]='hotels$'></app-list>\n          </mat-card-content>\n        </mat-card>\n      </div>\n      <div [fxFlex]='100/12*4' fxFlex.xs=\"100\" fxLayout.xs=\"row\" fxLayout=\"column\" fxLayoutGap='14px'>\n        <app-weather [weather]='currentHotel?.weather' fxFlex=\"45\" fxLayoutAlign=\"start stretch\" [isLoading]=isLoading>\n        </app-weather>\n        <app-detail [detail]='currentHotel?.profile' fxFlex=\"55\" fxLayoutAlign=\"start stretch\" [isLoading]=isLoading>\n        </app-detail>\n      </div>\n    </div>\n    <div fxFlex.sm='100'>\n      <app-hotels-list [hotels]='hotels$ | async | bookedFilter : bookedHotels' [title]=\"'Booked hotels'\" [buttonText]=\"'Unbook'\"\n        (onButtonAction)='unbook($event)'></app-hotels-list>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/booking/booking.component.scss":
/*!************************************************!*\
  !*** ./src/app/booking/booking.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  text-align: center;\n  font-size: 2em;\n  color: #fff;\n  margin: 3em 0em 2em 0em; }\n\n.booking-content {\n  margin: auto;\n  max-width: 1250px;\n  padding: 8px; }\n\n.booking-content .hotels-card .search-field {\n    width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Zpa3Rvci93b3JrZGlyL2Jvb2tpbmctYW5ndWxhci9zcmMvYXBwL2Jvb2tpbmcvYm9va2luZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztFQUNYLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWSxFQUFBOztBQUhoQjtJQUtRLFdBRUosRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Jvb2tpbmcvYm9va2luZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbjogM2VtIDBlbSAyZW0gMGVtO1xufVxuXG4uYm9va2luZy1jb250ZW50IHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWF4LXdpZHRoOiAxMjUwcHg7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIC5ob3RlbHMtY2FyZCAuc2VhcmNoLWZpZWxkIHtcbiAgICAgICAgd2lkdGg6IDEwMCVcbiAgICAgICAgXG4gICAgfVxufVxuXG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/booking/booking.component.ts":
/*!**********************************************!*\
  !*** ./src/app/booking/booking.component.ts ***!
  \**********************************************/
/*! exports provided: BookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingComponent", function() { return BookingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_methods_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api-methods.service */ "./src/app/booking/api-methods.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var BookingComponent = /** @class */ (function () {
    function BookingComponent(apiMethodsService, snackBar) {
        this.apiMethodsService = apiMethodsService;
        this.snackBar = snackBar;
        this.bookedHotels = [];
    }
    BookingComponent.prototype.resetFilters = function (event) {
        event.stopPropagation();
        this.searchText = '';
        this.starsSort = 0;
    };
    BookingComponent.prototype.setStarsSort = function (event) {
        this.starsSort = event.rating;
    };
    BookingComponent.prototype.changeHotel = function (id) {
        var _this = this;
        this.selectedHotelId = id;
        this.hotels$.subscribe(function (hotels) {
            _this.currentHotel = hotels.find(function (hotel) { return hotel.id === id; });
        });
    };
    BookingComponent.prototype.search = function (event) {
        this.searchText = event.target.value;
    };
    BookingComponent.prototype.bookingHotel = function (id) {
        if (this.bookedHotels && this.bookedHotels.find(function (currentId) { return currentId === id; })) {
            this.snackBar.open('This hotel is alredy booked', 'OK', {
                duration: 3000,
                verticalPosition: 'top',
                horizontalPosition: 'end'
            });
        }
        else {
            var bookedHotels = [id].concat(this.bookedHotels);
            this.setBooking(bookedHotels);
        }
    };
    BookingComponent.prototype.unbook = function (id) {
        var bookedHotels = this.bookedHotels.filter(function (hotel) { return !(hotel === id); });
        this.setBooking(bookedHotels);
    };
    BookingComponent.prototype.ngOnInit = function () {
        this.apiMethodsService.shakeListen();
        this.getHotels();
        this.getBookings();
    };
    BookingComponent.prototype.getHotels = function () {
        this.hotels$ = this.apiMethodsService.getHotels();
    };
    BookingComponent.prototype.getBookings = function () {
        var _this = this;
        this.apiMethodsService.getBookings('default').subscribe(function (hotelsId) {
            _this.bookedHotels = hotelsId;
        });
    };
    BookingComponent.prototype.setBooking = function (booked) {
        var _this = this;
        this.apiMethodsService.setBookings('default', booked).subscribe(function (response) {
            if (response.ok) {
                _this.bookedHotels = booked;
            }
        });
    };
    BookingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-booking',
            template: __webpack_require__(/*! ./booking.component.html */ "./src/app/booking/booking.component.html"),
            styles: [__webpack_require__(/*! ./booking.component.scss */ "./src/app/booking/booking.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_methods_service__WEBPACK_IMPORTED_MODULE_2__["ApiMethodsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], BookingComponent);
    return BookingComponent;
}());



/***/ }),

/***/ "./src/app/booking/booking.module.ts":
/*!*******************************************!*\
  !*** ./src/app/booking/booking.module.ts ***!
  \*******************************************/
/*! exports provided: BookingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingModule", function() { return BookingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _booking_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./booking.component */ "./src/app/booking/booking.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/booking/list/list.component.ts");
/* harmony import */ var _weather_weather_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weather/weather.component */ "./src/app/booking/weather/weather.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/booking/detail/detail.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _api_methods_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./api-methods.service */ "./src/app/booking/api-methods.service.ts");
/* harmony import */ var angular_star_rating__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-star-rating */ "./node_modules/angular-star-rating/esm5/angular-star-rating.js");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/filter.pipe */ "./src/app/booking/pipes/filter.pipe.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _pipes_booked_filter_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipes/booked-filter.pipe */ "./src/app/booking/pipes/booked-filter.pipe.ts");
/* harmony import */ var _hotels_list_hotels_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./hotels-list/hotels-list.component */ "./src/app/booking/hotels-list/hotels-list.component.ts");














var BookingModule = /** @class */ (function () {
    function BookingModule() {
    }
    BookingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_booking_component__WEBPACK_IMPORTED_MODULE_3__["BookingComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _weather_weather_component__WEBPACK_IMPORTED_MODULE_5__["WeatherComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__["DetailComponent"], _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_10__["FilterPipe"], _pipes_booked_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["BookedFilterPipe"], _hotels_list_hotels_list_component__WEBPACK_IMPORTED_MODULE_13__["HotelsListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                angular_star_rating__WEBPACK_IMPORTED_MODULE_9__["StarRatingModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"]
            ],
            exports: [
                _booking_component__WEBPACK_IMPORTED_MODULE_3__["BookingComponent"],
            ],
            providers: [_api_methods_service__WEBPACK_IMPORTED_MODULE_8__["ApiMethodsService"]],
        })
    ], BookingModule);
    return BookingModule;
}());



/***/ }),

/***/ "./src/app/booking/detail/detail.component.html":
/*!******************************************************!*\
  !*** ./src/app/booking/detail/detail.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"detail-card\">\n  <p *ngIf='isLoading'>Loading...</p>\n  <mat-card-title>Lorem ipsum</mat-card-title>\n  <img mat-card-image [src]='detail?.photo'>\n  <mat-card-footer fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n      <strong>{{detail?.followers}}</strong>\n      <p>\n        followers\n      </p>\n    </div>\n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n      <strong>{{detail?.following}}</strong>\n      <p>\n        following\n      </p>\n    </div>\n  </mat-card-footer>\n</mat-card>"

/***/ }),

/***/ "./src/app/booking/detail/detail.component.scss":
/*!******************************************************!*\
  !*** ./src/app/booking/detail/detail.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detail-card {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Zpa3Rvci93b3JrZGlyL2Jvb2tpbmctYW5ndWxhci9zcmMvYXBwL2Jvb2tpbmcvZGV0YWlsL2RldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Jvb2tpbmcvZGV0YWlsL2RldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWwtY2FyZHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/booking/detail/detail.component.ts":
/*!****************************************************!*\
  !*** ./src/app/booking/detail/detail.component.ts ***!
  \****************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetailComponent = /** @class */ (function () {
    function DetailComponent() {
    }
    DetailComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DetailComponent.prototype, "detail", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], DetailComponent.prototype, "isLoading", void 0);
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! ./detail.component.html */ "./src/app/booking/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/booking/detail/detail.component.scss")]
        })
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/booking/hotels-list/hotels-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/booking/hotels-list/hotels-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"root\">\n  <mat-card-title>{{title}}</mat-card-title>\n  <mat-card-content>\n      <div *ngIf='(!hotels?.length > 0)' >Nothisg yest</div>\n    <mat-list>\n      <mat-list-item *ngFor='let hotel of hotels'>\n        <img *ngFor='let photo of hotel.photos' matListAvatar [src]=\"photo\" alt=\"...\">\n        <h3 matLine> {{hotel.title}} </h3>\n        <p matLine>\n          {{hotel.address}}\n        </p>\n        <p matLine>\n          <star-rating [readOnly]='true' [rating]='hotel.stars' [starType]=\"'svg'\"></star-rating>\n        </p>\n        <p matLine>\n          {{hotel.description}}\n        </p>\n        <p matLine>\n          {{hotel.phone}}\n        </p>\n        <button class=\"unbooking-button\" color=\"error\" (click)=\"buttonAction(hotel.id)\"\n          mat-raised-button>{{buttonText}}</button>\n      </mat-list-item>\n    </mat-list>\n  </mat-card-content>\n\n</mat-card>"

/***/ }),

/***/ "./src/app/booking/hotels-list/hotels-list.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/booking/hotels-list/hotels-list.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".root .unbooking-button {\n  box-sizing: content-box; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Zpa3Rvci93b3JrZGlyL2Jvb2tpbmctYW5ndWxhci9zcmMvYXBwL2Jvb2tpbmcvaG90ZWxzLWxpc3QvaG90ZWxzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHUSx1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Jvb2tpbmcvaG90ZWxzLWxpc3QvaG90ZWxzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm9vdHtcbiAgICAvLyBoZWlnaHQ6IDEwMCU7XG4gICAgLnVuYm9va2luZy1idXR0b24ge1xuICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/booking/hotels-list/hotels-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/booking/hotels-list/hotels-list.component.ts ***!
  \**************************************************************/
/*! exports provided: HotelsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelsListComponent", function() { return HotelsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HotelsListComponent = /** @class */ (function () {
    function HotelsListComponent() {
        this.onButtonAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    HotelsListComponent.prototype.buttonAction = function (id) {
        this.onButtonAction.emit(id);
    };
    HotelsListComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HotelsListComponent.prototype, "hotels", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HotelsListComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HotelsListComponent.prototype, "buttonText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], HotelsListComponent.prototype, "onButtonAction", void 0);
    HotelsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hotels-list',
            template: __webpack_require__(/*! ./hotels-list.component.html */ "./src/app/booking/hotels-list/hotels-list.component.html"),
            styles: [__webpack_require__(/*! ./hotels-list.component.scss */ "./src/app/booking/hotels-list/hotels-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HotelsListComponent);
    return HotelsListComponent;
}());



/***/ }),

/***/ "./src/app/booking/list/list.component.html":
/*!**************************************************!*\
  !*** ./src/app/booking/list/list.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-wraper\">\n  <mat-action-list>\n    <mat-list-item class=\"hotels-item\" *ngFor='let hotel of hotels$ | async | filter : starsSort : searchText'\n      (click)=\"selectHotel(hotel.id)\">\n      <img *ngFor='let photo of hotel.photos' matListAvatar [src]=\"photo\" alt=\"...\">\n      <h3 matLine> {{hotel.title}} </h3>\n      <p matLine>\n        {{hotel.address}}\n      </p>\n      <p matLine>\n        <star-rating [readOnly]='true' [rating]='hotel.stars' [starType]=\"'svg'\"></star-rating>\n      </p>\n      <p matLine>\n        {{hotel.description}}\n      </p>\n      <p matLine>\n        {{hotel.phone}}\n      </p>\n      <button class=\"booking-button\" color=\"primary\" (click)=\"bookingHotel($event, hotel.id)\"\n        mat-raised-button>Booking</button>\n    </mat-list-item>\n  </mat-action-list>\n\n</div>"

/***/ }),

/***/ "./src/app/booking/list/list.component.scss":
/*!**************************************************!*\
  !*** ./src/app/booking/list/list.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-wraper {\n  overflow-y: scroll;\n  height: 250px; }\n  .list-wraper::-webkit-scrollbar {\n    width: 3px;\n    height: 3px; }\n  .list-wraper::-webkit-scrollbar-button {\n    background-color: #666;\n    height: 0; }\n  .list-wraper::-webkit-scrollbar-track {\n    background-color: #999; }\n  .list-wraper::-webkit-scrollbar-track-piece {\n    background-color: #ffffff; }\n  .list-wraper::-webkit-scrollbar-thumb {\n    height: 50px;\n    background-color: #7b1fa2;\n    border-radius: 3px; }\n  .list-wraper::-webkit-scrollbar-corner {\n    background-color: #999; }\n  .list-wraper::-webkit-resizer {\n    background-color: #666; }\n  .list-wraper .booking-button {\n    box-sizing: content-box; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Zpa3Rvci93b3JrZGlyL2Jvb2tpbmctYW5ndWxhci9zcmMvYXBwL2Jvb2tpbmcvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLGFBQWEsRUFBQTtFQUZqQjtJQUcyQixVQUFVO0lBQUUsV0FBVyxFQUFBO0VBSGxEO0lBSW1DLHNCQUFzQjtJQUFFLFNBQVMsRUFBQTtFQUpwRTtJQUtrQyxzQkFBc0IsRUFBQTtFQUx4RDtJQU11Qyx5QkFBeUIsRUFBQTtFQU5oRTtJQU9pQyxZQUFZO0lBQUUseUJBQXdCO0lBQUUsa0JBQWtCLEVBQUE7RUFQM0Y7SUFRa0Msc0JBQXNCLEVBQUE7RUFSeEQ7SUFTeUIsc0JBQXNCLEVBQUE7RUFUL0M7SUFXUSx1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Jvb2tpbmcvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3Qtd3JhcGVyIHtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7IHdpZHRoOiAzcHg7IGhlaWdodDogM3B4OyB9XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uIHsgIGJhY2tncm91bmQtY29sb3I6ICM2NjY7IGhlaWdodDogMDsgfVxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHsgIGJhY2tncm91bmQtY29sb3I6ICM5OTk7fVxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLXBpZWNlIHsgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjt9XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIgeyBoZWlnaHQ6IDUwcHg7IGJhY2tncm91bmQtY29sb3I6IzdiMWZhMjsgYm9yZGVyLXJhZGl1czogM3B4O31cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O31cbiAgICAmOjotd2Via2l0LXJlc2l6ZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O31cbiAgICAuYm9va2luZy1idXR0b24ge1xuICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICB9XG4gICAgXG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/booking/list/list.component.ts":
/*!************************************************!*\
  !*** ./src/app/booking/list/list.component.ts ***!
  \************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ListComponent = /** @class */ (function () {
    function ListComponent() {
        this.onHotelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onBooking = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onFavorit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ListComponent.prototype.ngOnInit = function () { };
    ListComponent.prototype.selectHotel = function (id) {
        this.onHotelChange.emit(id);
    };
    ListComponent.prototype.bookingHotel = function (event, id) {
        event.stopPropagation();
        this.onBooking.emit(id);
    };
    ListComponent.prototype.toFavorit = function (event, id) {
        event.stopPropagation();
        this.onFavorit.emit(id);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], ListComponent.prototype, "hotels$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ListComponent.prototype, "starsSort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ListComponent.prototype, "searchText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ListComponent.prototype, "onHotelChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ListComponent.prototype, "onBooking", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ListComponent.prototype, "onFavorit", void 0);
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/booking/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/booking/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/booking/pipes/booked-filter.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/booking/pipes/booked-filter.pipe.ts ***!
  \*****************************************************/
/*! exports provided: BookedFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookedFilterPipe", function() { return BookedFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BookedFilterPipe = /** @class */ (function () {
    function BookedFilterPipe() {
    }
    BookedFilterPipe.prototype.transform = function (hotels, booked) {
        return hotels && hotels.filter(function (hotel) { return booked ? booked.includes(hotel.id) : false; });
    };
    BookedFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'bookedFilter'
        })
    ], BookedFilterPipe);
    return BookedFilterPipe;
}());



/***/ }),

/***/ "./src/app/booking/pipes/filter.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/booking/pipes/filter.pipe.ts ***!
  \**********************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (hotels, stars, text) {
        return hotels
            ? hotels
                .filter(function (hotel) { return stars ? (hotel.stars === stars) : true; })
                .filter(function (hotel) { return text ? ((hotel.title + " " + hotel.description).toLowerCase().includes(text.toLowerCase())) : true; })
            : hotels;
    };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/booking/weather/weather.component.html":
/*!********************************************************!*\
  !*** ./src/app/booking/weather/weather.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"weather-card\">\n  <mat-card-title>\n    Weather\n  </mat-card-title>\n  <mat-card-content>\n    <p *ngIf='isLoading'>Loading...</p>\n    <h1 class=\"weather-icon\"><i class=\"material-icons\">pool</i>{{weather?.wind}}<sup>°</sup></h1>\n    <h1 class=\"weather-icon\"><i class=\"material-icons\">{{(weather?.temperature > 0) ? \"brightness_high\" : \"ac_unit\" }}</i>{{weather?.temperature}}<sup>°</sup></h1>\n    <h3>Fallouts: {{weather?.icon}}</h3> \n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/booking/weather/weather.component.scss":
/*!********************************************************!*\
  !*** ./src/app/booking/weather/weather.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".weather-card {\n  width: 100%; }\n  .weather-card .weather-icon {\n    font-size: 32px; }\n  .weather-card .weather-icon > i {\n      font-size: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Zpa3Rvci93b3JrZGlyL2Jvb2tpbmctYW5ndWxhci9zcmMvYXBwL2Jvb2tpbmcvd2VhdGhlci93ZWF0aGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVyxFQUFBO0VBRGY7SUFHUSxlQUFlLEVBQUE7RUFIdkI7TUFLWSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ib29raW5nL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWF0aGVyLWNhcmR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLndlYXRoZXItaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgPiBpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/booking/weather/weather.component.ts":
/*!******************************************************!*\
  !*** ./src/app/booking/weather/weather.component.ts ***!
  \******************************************************/
/*! exports provided: WeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherComponent", function() { return WeatherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WeatherComponent = /** @class */ (function () {
    function WeatherComponent() {
    }
    WeatherComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WeatherComponent.prototype, "weather", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], WeatherComponent.prototype, "isLoading", void 0);
    WeatherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-weather',
            template: __webpack_require__(/*! ./weather.component.html */ "./src/app/booking/weather/weather.component.html"),
            styles: [__webpack_require__(/*! ./weather.component.scss */ "./src/app/booking/weather/weather.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WeatherComponent);
    return WeatherComponent;
}());



/***/ }),

/***/ "./src/app/drawer/drawer.component.html":
/*!**********************************************!*\
  !*** ./src/app/drawer/drawer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"container\">\n  <mat-sidenav [mode]=\"drawerMode\" [opened]='isDrawerOpen' role=\"navigation\" (closed)=\"drawerController(false)\">\n    <app-menu></app-menu>\n  </mat-sidenav>\n  <mat-sidenav-content>\n      <app-header (drawerToggle)=\"drawerController()\"></app-header>\n    <app-booking></app-booking>\n  </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/drawer/drawer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/drawer/drawer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Zpa3Rvci93b3JrZGlyL2Jvb2tpbmctYW5ndWxhci9zcmMvYXBwL2RyYXdlci9kcmF3ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZHJhd2VyL2RyYXdlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgLy8gYmFja2dyb3VuZDogI2VlZTtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/drawer/drawer.component.ts":
/*!********************************************!*\
  !*** ./src/app/drawer/drawer.component.ts ***!
  \********************************************/
/*! exports provided: DrawerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerComponent", function() { return DrawerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_window_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/window.service */ "./src/app/drawer/services/window.service.ts");



var DrawerComponent = /** @class */ (function () {
    function DrawerComponent(windowService) {
        this.windowService = windowService;
        this.isDrawerOpen = window.innerWidth >= 960;
        this.drawerMode = window.innerWidth < 960 ? 'over' : 'side';
    }
    DrawerComponent.prototype.drawerController = function (isOpen) {
        if (isOpen === void 0) { isOpen = null; }
        if (isOpen !== null) {
            this.isDrawerOpen = isOpen;
        }
        else {
            this.isDrawerOpen = !this.isDrawerOpen;
        }
    };
    DrawerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.windowService.resizeObservable$.subscribe(function (small) {
            _this.drawerMode = small ? 'over' : 'side';
            _this.isDrawerOpen = !small;
        });
    };
    DrawerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-drawer',
            template: __webpack_require__(/*! ./drawer.component.html */ "./src/app/drawer/drawer.component.html"),
            styles: [__webpack_require__(/*! ./drawer.component.scss */ "./src/app/drawer/drawer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_window_service__WEBPACK_IMPORTED_MODULE_2__["WindowService"]])
    ], DrawerComponent);
    return DrawerComponent;
}());



/***/ }),

/***/ "./src/app/drawer/drawer.module.ts":
/*!*****************************************!*\
  !*** ./src/app/drawer/drawer.module.ts ***!
  \*****************************************/
/*! exports provided: DrawerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerModule", function() { return DrawerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _drawer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drawer.component */ "./src/app/drawer/drawer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/drawer/header/header.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/drawer/menu/menu.component.ts");
/* harmony import */ var _booking_booking_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../booking/booking.module */ "./src/app/booking/booking.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");









var DrawerModule = /** @class */ (function () {
    function DrawerModule() {
    }
    DrawerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_drawer_component__WEBPACK_IMPORTED_MODULE_3__["DrawerComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _booking_booking_module__WEBPACK_IMPORTED_MODULE_6__["BookingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
            ],
            exports: [
                _drawer_component__WEBPACK_IMPORTED_MODULE_3__["DrawerComponent"]
            ]
        })
    ], DrawerModule);
    return DrawerModule;
}());



/***/ }),

/***/ "./src/app/drawer/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/drawer/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <div fxHide.gt-sm>\n    <button mat-icon-button (click)=\"onToggleSidenav()\">\n      <mat-icon>menu</mat-icon>\n    </button>\n  </div>\n  <div>\n    My App\n  </div>\n\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/drawer/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/drawer/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RyYXdlci9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/drawer/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/drawer/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.drawerToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onToggleSidenav = function () {
        this.drawerToggle.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], HeaderComponent.prototype, "drawerToggle", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/drawer/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/drawer/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/drawer/menu/menu.component.html":
/*!*************************************************!*\
  !*** ./src/app/drawer/menu/menu.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"side-menu\">\n  <h2 matSubheader>Booking app</h2>\n  <mat-nav-list>\n    <a mat-list-item>\n      <mat-icon mat-list-icon>home</mat-icon>\n      <p mat-line>Home</p>\n    </a>\n    <a mat-list-item>\n      <mat-icon mat-list-icon>list</mat-icon>\n      <p mat-line>Some menu point</p>\n    </a>\n    <a mat-list-item>\n      <mat-icon mat-list-icon>list</mat-icon>\n      <p mat-line>Some menu point</p>\n    </a>\n    <a mat-list-item>\n      <mat-icon mat-list-icon>list</mat-icon>\n      <p mat-line>Some menu point</p>\n    </a>\n    <a mat-list-item>\n      <mat-icon mat-list-icon>list</mat-icon>\n      <p mat-line>Some menu point</p>\n    </a>\n    <a mat-list-item>\n      <mat-icon mat-list-icon>list</mat-icon>\n      <p mat-line>Some menu point</p>\n    </a>\n  </mat-nav-list>\n</div>"

/***/ }),

/***/ "./src/app/drawer/menu/menu.component.scss":
/*!*************************************************!*\
  !*** ./src/app/drawer/menu/menu.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RyYXdlci9tZW51L21lbnUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/drawer/menu/menu.component.ts":
/*!***********************************************!*\
  !*** ./src/app/drawer/menu/menu.component.ts ***!
  \***********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/drawer/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/drawer/menu/menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/drawer/services/window.service.ts":
/*!***************************************************!*\
  !*** ./src/app/drawer/services/window.service.ts ***!
  \***************************************************/
/*! exports provided: WindowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowService", function() { return WindowService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var WindowService = /** @class */ (function () {
    function WindowService() {
        this.resizeObservable$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (event) { return event.target.innerWidth < 960 ? true : false; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
    }
    WindowService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WindowService);
    return WindowService;
}());



/***/ }),

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! exports provided: API_BASE_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_BASE_URL", function() { return API_BASE_URL; });
var API_BASE_URL = 'https://booking-endpoints.herokuapp.com/';


/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/viktor/workdir/booking-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map