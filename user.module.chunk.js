webpackJsonp(["user.module"],{

/***/ "../../../../../src/app/user/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".user-info {\n  padding: 15px 0;\n  background-color: #376AA6;\n  color: #fff;\n  font-size: 14px;\n}\n.user-info p {\n  margin: 0;\n}\n.user-info .username {\n  font-size: 18px;\n  font-weight: 500;\n}\n.user-info .middle-div {\n  border-right: 1px solid;\n  border-left: 1px solid;\n}\n.user-info .middle-div p {\n  word-wrap: break-word;\n}\n.page-header {\n  text-align: center;\n  font-size: 20px;\n  color: #E06C4F;\n  font-weight: 600;\n  padding: 15px 0;\n  -webkit-box-shadow: 0 2px 2px -2px #808080;\n          box-shadow: 0 2px 2px -2px #808080;\n  margin-bottom: 35px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"user-info\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-4\">\n        <p class=\"username\">{{userData?.name}}</p>\n      </div>\n      <div class=\"col-4 middle-div\">\n        <p>{{userData?.email}}</p>\n        <p>{{userData?.phone}}</p>\n      </div>\n      <div class=\"col-4\">\n        <span>{{userData?.address.street}}</span>,\n        <span> {{userData?.address.suite}}</span>,\n        <span> {{userData?.address.city}}</span>,\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <p class=\"page-header\">\n        <span *ngIf=\"!showPhotos; else photos\">{{username}}</span>\n        <ng-template #photos>Photos</ng-template>\n      </p>\n    </div>\n  </div>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/user/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_http_users_service__ = __webpack_require__("../../../../../src/app/core/services/http/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainComponent = /** @class */ (function () {
    function MainComponent(userService, router, route) {
        this.userService = userService;
        this.router = router;
        this.route = route;
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var userId = params['userId'];
            _this.chechParam();
            _this.subscription = _this.userService.getUserById(userId).subscribe(function (res) {
                _this.userData = res;
                _this.username = res['name'] + "'s Albums";
            }, function (err) {
                _this.router.navigate(['/404']);
            });
        });
        this.router.events.subscribe(function (val) {
            if (val instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                _this.chechParam();
            }
        });
    };
    MainComponent.prototype.chechParam = function () {
        var albumId = this.route.firstChild.snapshot.params['albumId'];
        if (albumId !== undefined) {
            this.showPhotos = true;
        }
        else {
            this.showPhotos = false;
        }
    };
    MainComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__("../../../../../src/app/user/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_services_http_users_service__["a" /* UsersService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/user-album/user-album.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".photo {\n  margin-bottom: 30px;\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user-album/user-album.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"photo col-6 col-md-3 col-lg-2\" *ngFor=\"let photo of photos\">\n      <img [src]=\"photo.thumbnailUrl\" alt=\"album image\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user/user-album/user-album.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAlbumComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_http_users_service__ = __webpack_require__("../../../../../src/app/core/services/http/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserAlbumComponent = /** @class */ (function () {
    function UserAlbumComponent(router, route, userService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
    }
    UserAlbumComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var albumId = params['albumId'];
            _this.subscription = _this.userService.getAlbumPhotos(albumId).subscribe(function (res) {
                _this.photos = res;
            }, function (err) {
                _this.router.navigate(['/404']);
            });
        });
    };
    UserAlbumComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    UserAlbumComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-album',
            template: __webpack_require__("../../../../../src/app/user/user-album/user-album.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user-album/user-album.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__core_services_http_users_service__["a" /* UsersService */]])
    ], UserAlbumComponent);
    return UserAlbumComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/user-component/user-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".album {\n  margin-bottom: 20px;\n}\n.card {\n  text-align: center;\n  cursor: pointer;\n  -webkit-box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.2);\n          box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.2);\n  -webkit-transition: .3s ease-out;\n  transition: .3s ease-out;\n}\n.card:hover {\n  -webkit-box-shadow: 0 8px 17px 0 rgba(0,0,0,.2), 0 6px 20px 0 rgba(0,0,0,.19);\n          box-shadow: 0 8px 17px 0 rgba(0,0,0,.2), 0 6px 20px 0 rgba(0,0,0,.19);\n}\n.card .card-header {\n  background-color: #E06C4F;\n  color: #fff;\n  padding: 2.75rem 1.25rem;\n  font-size: 20px;\n  text-transform: uppercase;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user-component/user-component.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"album col-12 col-sm-6 col-lg-4\" *ngFor=\"let album of userAlbums; let i = index;\">\n      <div class=\"card\" [routerLink]=\"['album', album.id]\">\n        <div class=\"card-header\">Album {{i+1}}</div>\n        <div class=\"card-body\">\n          <h6 class=\"card-title\">{{album.title}}</h6>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user/user-component/user-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_http_users_service__ = __webpack_require__("../../../../../src/app/core/services/http/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = /** @class */ (function () {
    function UserComponent(userService, router, route) {
        this.userService = userService;
        this.router = router;
        this.route = route;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var userId = params['userId'];
            _this.subscription = _this.userService.getUserAlbums(userId).subscribe(function (res) {
                _this.userAlbums = res;
            }, function (err) {
                _this.router.navigate(['/404']);
            });
        });
    };
    UserComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-component',
            template: __webpack_require__("../../../../../src/app/user/user-component/user-component.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user-component/user-component.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_services_http_users_service__["a" /* UsersService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/user-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_main_component__ = __webpack_require__("../../../../../src/app/user/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_component_user_component_component__ = __webpack_require__("../../../../../src/app/user/user-component/user-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_album_user_album_component__ = __webpack_require__("../../../../../src/app/user/user-album/user-album.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: ':userId',
        component: __WEBPACK_IMPORTED_MODULE_2__main_main_component__["a" /* MainComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_3__user_component_user_component_component__["a" /* UserComponent */]
            },
            {
                path: 'album/:albumId',
                component: __WEBPACK_IMPORTED_MODULE_4__user_album_user_album_component__["a" /* UserAlbumComponent */]
            }
        ]
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)
            ],
            declarations: [],
            exports: []
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_routing_module__ = __webpack_require__("../../../../../src/app/user/user-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_services_http_users_service__ = __webpack_require__("../../../../../src/app/core/services/http/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_main_component__ = __webpack_require__("../../../../../src/app/user/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_component_user_component_component__ = __webpack_require__("../../../../../src/app/user/user-component/user-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_album_user_album_component__ = __webpack_require__("../../../../../src/app/user/user-album/user-album.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_3__user_routing_module__["a" /* UserRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__core_services_http_users_service__["a" /* UsersService */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__user_component_user_component_component__["a" /* UserComponent */], __WEBPACK_IMPORTED_MODULE_5__main_main_component__["a" /* MainComponent */], __WEBPACK_IMPORTED_MODULE_7__user_album_user_album_component__["a" /* UserAlbumComponent */]],
            exports: []
        })
    ], UserModule);
    return UserModule;
}());



/***/ })

});
//# sourceMappingURL=user.module.chunk.js.map