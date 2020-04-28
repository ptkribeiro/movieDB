(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"swiper-no-swiping\">\n  <div class=\"container top\" [hidden]=\"this.keyboard.isVisible\">\n    <img src=\"/assets/unisuam.png\">\n\n    <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"login\">\n      <ion-segment-button value=\"login\">\n        <ion-label>Login</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"register\">\n          <ion-label>Cadastro</ion-label>\n        </ion-segment-button>\n    </ion-segment>\n  </div>\n  \n  <ion-slides>\n    <ion-slide>\n      <div class=\"slide-inner ion-padding\">\n        <span>Login</span>\n        <ion-item class=\"ion-margin-top\" lines=\"none\">\n          <ion-input type=\"email\" placeholder=\"E-mail\" [(ngModel)]=\"userLogin.email\"></ion-input>\n        </ion-item>\n\n        <ion-item class=\"ion-margin-top\" lines=\"none\">\n          <ion-input type=\"password\" placeholder=\"Senha\" [(ngModel)]=\"userLogin.password\"></ion-input>\n        </ion-item>\n\n        <ion-button class=\"ion-margin-top\" (click)=\"login()\" color=\"light\" expand=\"block\">Entrar</ion-button>\n      </div>\n    </ion-slide>\n\n    <ion-slide>\n      <div class=\"slide-inner ion-padding\">\n        <span>Cadastro</span>\n\n        <ion-item class=\"ion-margin-top\" lines=\"none\">\n          <ion-input type=\"text\" placeholder=\"Nome\"></ion-input>\n        </ion-item>\n\n        <ion-item class=\"ion-margin-top\" lines=\"none\">\n          <ion-input type=\"email\" placeholder=\"E-mail\" [(ngModel)]=\"userRegister.email\"></ion-input>\n        </ion-item>\n\n        <ion-item class=\"ion-margin-top\" lines=\"none\">\n          <ion-input type=\"password\" placeholder=\"Senha\" [(ngModel)]=\"userRegister.password\"></ion-input>\n        </ion-item>\n\n        <ion-button class=\"ion-margin-top\" (click)=\"register()\" color=\"light\" expand=\"block\">Cadastrar</ion-button>\n      </div>\n    </ion-slide>\n  </ion-slides>\n  <div class=\"ocean\">\n    <div class=\"waves\"></div>\n\n    <div class=\"container ion-text-center bottom\" [hidden]=\"this.keyboard.isVisible\">\n      <span>App criado para APS 2 da disciplina de desenvolvimento móvel da UNISUAM</span>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
var LoginPageRoutingModule = /** @class */ (function () {
    function LoginPageRoutingModule() {
    }
    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LoginPageRoutingModule);
    return LoginPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: 75%;\n  margin: 0 auto;\n  z-index: 2;\n}\n.container.top {\n  top: 5%;\n}\n.container.bottom {\n  bottom: 20%;\n}\n.container.bottom span {\n  color: #ffffff;\n}\nion-slides {\n  height: 100%;\n}\nion-slides .slide-inner {\n  width: 75%;\n  color: #ffffff;\n  background-color: #f07d00;\n  border-radius: 10px;\n}\nion-slides ion-item {\n  --background: rgba(255, 255, 255, 0.2);\n  --border-radius: 10px;\n}\nion-slides ion-item ion-input {\n  --color: #ffffff;\n}\n.ocean {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 45%;\n  background-color: #3d9ddd;\n}\n.ocean .waves {\n  position: absolute;\n  top: -100px;\n  left: 0;\n  right: 0;\n  height: 100px;\n  background-image: url(\"/assets/waves.png\");\n  background-size: contain;\n  -webkit-transition: all 0.5;\n  transition: all 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXEFycXVpdm9zXFxQcm9qZXRvc1xcVW5pc3VhbVxcbXlBcHAvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNDSjtBRENJO0VBQ0ksT0FBQTtBQ0NSO0FERUk7RUFDSSxXQUFBO0FDQVI7QURFUTtFQUNJLGNBQUE7QUNBWjtBREtBO0VBQ0ksWUFBQTtBQ0ZKO0FESUk7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNGUjtBREtJO0VBQ0ksc0NBQUE7RUFDQSxxQkFBQTtBQ0hSO0FES1E7RUFDSSxnQkFBQTtBQ0haO0FEUUE7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0xKO0FET0k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSwwQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFBQSxtQkFBQTtBQ0xSIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB6LWluZGV4OiAyO1xyXG5cclxuICAgICYudG9wIHtcclxuICAgICAgICB0b3A6IDUlO1xyXG4gICAgfVxyXG5cclxuICAgICYuYm90dG9tIHtcclxuICAgICAgICBib3R0b206IDIwJTtcclxuXHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tc2xpZGVze1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIC5zbGlkZS1pbm5lciB7XHJcbiAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjA3ZDAwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICAgICAgLS1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5vY2VhbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBoZWlnaHQ6IDQ1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZDlkZGQ7XHJcblxyXG4gICAgLndhdmVzIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAtMTAwcHg7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy93YXZlcy5wbmcnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNTsgXHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIi5jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgei1pbmRleDogMjtcbn1cbi5jb250YWluZXIudG9wIHtcbiAgdG9wOiA1JTtcbn1cbi5jb250YWluZXIuYm90dG9tIHtcbiAgYm90dG9tOiAyMCU7XG59XG4uY29udGFpbmVyLmJvdHRvbSBzcGFuIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbmlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5pb24tc2xpZGVzIC5zbGlkZS1pbm5lciB7XG4gIHdpZHRoOiA3NSU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjA3ZDAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuaW9uLXNsaWRlcyBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5pb24tc2xpZGVzIGlvbi1pdGVtIGlvbi1pbnB1dCB7XG4gIC0tY29sb3I6ICNmZmZmZmY7XG59XG5cbi5vY2VhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiA0NSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDlkZGQ7XG59XG4ub2NlYW4gLndhdmVzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMDBweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvd2F2ZXMucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjU7XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var LoginPage = /** @class */ (function () {
    function LoginPage(loadingController, keyboard, toastController, authService, router) {
        this.loadingController = loadingController;
        this.keyboard = keyboard;
        this.toastController = toastController;
        this.authService = authService;
        this.router = router;
        this.userLogin = {};
        this.userRegister = {};
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.segmentChanged = function (event) {
        if (event.detail.value === "login") {
            this.slides.slidePrev();
        }
        else {
            this.slides.slideNext();
        }
    };
    LoginPage.prototype.login = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.presentLoading()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, 5, 6]);
                        return [4 /*yield*/, this.authService.login(this.userLogin)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        error_1 = _a.sent();
                        console.log(error_1);
                        this.presentToast(error_1.message);
                        return [3 /*break*/, 6];
                    case 5:
                        this.loading.dismiss();
                        this.router.navigate(['tabs/tabs/tab1']);
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.register = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.presentLoading()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, 5, 6]);
                        return [4 /*yield*/, this.authService.register(this.userRegister)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        error_2 = _a.sent();
                        console.log(error_2);
                        this.presentToast(error_2.message);
                        return [3 /*break*/, 6];
                    case 5:
                        this.loading.dismiss();
                        this.router.navigate(['tabs/tabs/tab1']);
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create({ message: 'Por favor, aguarde...' })];
                    case 1:
                        _a.loading = _b.sent();
                        return [2 /*return*/, this.loading.present()];
                }
            });
        });
    };
    LoginPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_3__["Keyboard"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], LoginPage.prototype, "slides", void 0);
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_3__["Keyboard"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module-es5.js.map