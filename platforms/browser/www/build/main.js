webpackJsonp([0],{

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_service_auth_service__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(357);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(authService, navCtrl, toastCtrl) {
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
    }
    LoginPage.prototype.ngOnInit = function () {
        this.checkLoginStatus();
    };
    LoginPage.prototype.checkLoginStatus = function () {
        var token = localStorage.getItem('token');
        var expiresAt = localStorage.getItem('expires_at');
        if (token && expiresAt && Date.now() < +expiresAt) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
            this.showToast('Login successful!');
        }
    };
    LoginPage.prototype.onLogin = function (form) {
        var _this = this;
        this.authService.login(form.value.email, form.value.password).subscribe(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
            _this.showToast('Login successful!');
        }, function (error) {
            console.log('Login error:', error);
            _this.showToast('Login failed. Please try again.');
        });
    };
    LoginPage.prototype.onRegister = function (form) {
        var _this = this;
        this.authService.register(form.value.email, form.value.password).subscribe(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
            _this.showToast('Login successful!');
        }, function (error) {
            console.log('Registration error:', error);
            _this.showToast('Registration failed. Please try again.');
        });
    };
    LoginPage.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/user/Desktop/fishable/src/pages/login/login.html"*/'<ion-content padding class="background">\n  <ion-card>\n    <img src="assets/imgs/fishable-banner.png" />\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content>\n      <form #form="ngForm">\n\n        <ion-item>\n          <ion-icon slot="start" name="person-circle"></ion-icon>\n          <ion-input type="email" name="email" placeholder="Email" ngModel required></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-icon slot="start" name="key"></ion-icon>\n          <ion-input type="password" name="password" placeholder="Password" ngModel required></ion-input>\n        </ion-item>\n\n        <ion-card-content>\n          <button ion-button expand="block" color="primary" (click)="onRegister(form)" type="button">Log in / Register</button>\n          <!-- <button ion-button expand="block" color="secondary" (click)="onRegister(form)" type="button">Register</button> -->\n        </ion-card-content>\n\n      </form>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <img src="assets/imgs/fishable-fishing.png" />\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/user/Desktop/fishable/src/pages/login/login.html"*/,
            styleUrls: ['/src/pages/login/login.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 171;

/***/ }),

/***/ 214:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 214;

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_chooser__ = __webpack_require__(354);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ItemModal = /** @class */ (function () {
    function ItemModal(navParams, viewCtrl, camera, geolocation, fileChooser) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.geolocation = geolocation;
        this.fileChooser = fileChooser;
        this.item = {};
        this.gpsCoordinates = "Loading...";
        this.item = this.navParams.get('item') || {};
        this.index = this.navParams.get('index');
        this.mode = this.navParams.get('mode');
        this.subTitle = this.navParams.get('subTitle');
        if (this.mode == "create") {
            this.loadGPS();
        }
        else {
            this.gpsCoordinates = this.item.latlong;
        }
        console.log('loaded item:', this.item);
        console.log('this.mode:', this.mode);
    }
    ItemModal.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.item.image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            console.error('Error taking photo:', err);
        });
    };
    ItemModal.prototype.loadGPS = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            if (_this.mode == "create") {
                _this.item.latlong = resp.coords.latitude + ", " + resp.coords.longitude;
                _this.gpsCoordinates = _this.item.latlong;
            }
        }).catch(function (error) {
            console.log('Error getting location', error);
            _this.gpsCoordinates = "GPS unavailable";
        });
    };
    ItemModal.prototype.chooseImage = function () {
        this.fileChooser.open().then(function (uri) {
            console.log('Image URI:', uri);
        }).catch(function (e) { return console.log('Error choosing file:', e); });
    };
    ItemModal.prototype.saveItem = function () {
        this.item.subTitle = this.subTitle;
        this.viewCtrl.dismiss(this.item);
    };
    ItemModal.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ItemModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'item-modal',template:/*ion-inline-start:"/Users/user/Desktop/fishable/src/components/item-modal/item-modal.html"*/'<div class="item-modal">\n  <div class="modal-content">\n\n    <input type="text" [(ngModel)]="item.name" placeholder="Enter name" class="modal-input">\n    <input type="text" [(ngModel)]="item.description" placeholder="Enter description" class="modal-input">\n\n    <input *ngIf="subTitle === \'My Lures\' || subTitle === \'Bait History\'"\n           type="text" [(ngModel)]="item.price" placeholder="Enter price" class="modal-input">\n\n    <input *ngIf="subTitle === \'Favorite Fishing Spots\'"\n           type="text" [(ngModel)]="gpsCoordinates" placeholder="Loading GPS..." class="modal-input" disabled>\n\n    <img *ngIf="item.image" [src]="item.image" alt="Preview" style="width: 50px; height: 50px;">\n\n    <button class="modal-button icon-button" (click)="takePhoto()">\n      <ion-icon name="camera"></ion-icon>\n    </button>\n\n    <button class="modal-button icon-button" (click)="chooseImage()">\n      <ion-icon name="images"></ion-icon>\n    </button>\n\n    <button class="modal-button" (click)="saveItem()">Save</button>\n\n    <button class="modal-button" (click)="close()">Close</button>\n\n  </div>\n</div>\n'/*ion-inline-end:"/Users/user/Desktop/fishable/src/components/item-modal/item-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_chooser__["a" /* FileChooser */]])
    ], ItemModal);
    return ItemModal;
}());

//# sourceMappingURL=item-modal.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.uploadImage = function (imageData, itemId) {
        var url = "https://yourapi.com/upload/" + itemId;
        var body = {
            image: imageData
        };
        return this.http.post(url, body);
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ApiService);
    return ApiService;
}());

//# sourceMappingURL=api-service.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.apiUrl = 'http://fishableapp.com/api/auth';
    }
    AuthService.prototype.saveToken = function (token) {
        var expiresAt = Date.now() + (23 * 60 * 60 * 1000);
        localStorage.setItem('token', token);
        localStorage.setItem('expires_at', expiresAt.toString());
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return this.http.post(this.apiUrl + "/login", { email: email, password: password }).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["tap"])(function (response) {
            if (response && response.token) {
                _this.saveToken(response.token);
            }
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(function (error) {
            console.error('Login error:', error);
            throw error;
        }));
    };
    AuthService.prototype.register = function (email, password) {
        var _this = this;
        return this.http.post(this.apiUrl + "/register", { email: email, password: password }).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["tap"])(function (response) {
            if (response && response.token) {
                _this.saveToken(response.token);
            }
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(function (error) {
            console.error('Registration error:', error);
            throw error;
        }));
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__feed_feed__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__riverAccess_riverAccess__ = __webpack_require__(362);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__about_about__["a" /* AboutPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_6__feed_feed__["a" /* FeedPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_7__riverAccess_riverAccess__["a" /* RiverAccessPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_4__contact_contact__["a" /* ContactPage */];
    }
    TabsPage.prototype.logout = function () {
        console.log('logout');
        localStorage.removeItem('token');
        localStorage.removeItem('expires_at');
        this.showToast('You have been logged out.');
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    TabsPage.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Users/user/Desktop/fishable/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Feed" tabIcon="people-outline"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Profile" tabIcon="person"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="FindRiverAccess" tabIcon="map-outline"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Contact" tabIcon="call-outline"></ion-tab>\n  <ion-tab (ionSelect)="logout()" tabTitle="Logout" tabIcon="log-out-outline"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/user/Desktop/fishable/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.title = "About";
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/user/Desktop/fishable/src/pages/about/about.html"*/'<app-header></app-header>\n\n<ion-content class="page-content" padding>\n  <ion-card>\n    <ion-card-header>\n      The Fishable Solution\n    </ion-card-header>\n    <ion-card-content>\n      Fishing commonly reduces anxiety, fights off depression, promotes relaxation. Though a collaborative community, Fishable inspires new and advanced fellow fishing enthusiasts to create lasting memories with friends and family while tracking their personal fishing adventures and sharing favorite locations, bait, and lure recommendations.\n    </ion-card-content>\n    <ion-card-content>\n      Olivia Salvini ID: 1058732\n    </ion-card-content>\n  </ion-card>\n\n  <img style="margin-top: 10px;" src="assets/imgs/fishable-fishing.png" />\n\n</ion-content>\n'/*ion-inline-end:"/Users/user/Desktop/fishable/src/pages/about/about.html"*/,
            styleUrls: ['/src/pages/about/about.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, dataService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        this.toastCtrl = toastCtrl;
        this.title = 'Reach Our Team';
        this.categories = [
            { name: 'catch', subTitle: "My Catches" },
            { name: 'location', subTitle: "Favorite Fishing Spots" },
            { name: 'bait', subTitle: "Bait History" },
            { name: 'lure', subTitle: "My Lures" },
            { name: 'email', subTitle: "Reach Our Team" },
        ];
    }
    ContactPage.prototype.getSubTitle = function (name) {
        var category = this.categories.find(function (c) { return c.name === name; });
        return category ? category.subTitle : '';
    };
    ContactPage.prototype.sendEmail = function () {
        var _this = this;
        if (this.email.length < 8) {
            this.showToast('Email invalid');
            return;
        }
        if (this.message.length < 20) {
            this.showToast('Message invalid');
            return;
        }
        var emailMessage = { email: this.email, message: this.message };
        this.dataService.sendEmail(emailMessage).subscribe(function (result) {
            _this.showToast('Email sent successfully');
            _this.email = '';
            _this.message = '';
        }, function (error) {
            console.error('Error send email message: ', error);
            _this.showToast('Failed to send email');
        });
    };
    ContactPage.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/user/Desktop/fishable/src/pages/contact/contact.html"*/'<app-header></app-header>\n\n<ion-content class="page-content" padding>\n\n  <ion-list>\n    <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input type="email" [(ngModel)]="email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Message</ion-label>\n      <ion-textarea rows="6" [(ngModel)]="message"></ion-textarea>\n    </ion-item>\n  </ion-list>\n\n  <div padding>\n    <button ion-button color="primary" (click)="sendEmail()">Send Message</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/user/Desktop/fishable/src/pages/contact/contact.html"*/,
            styleUrls: ['/src/pages/contact/contact.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_input_dialog_service_input_dialog_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, toastCtrl, dataService, inputDialogService, socialSharing) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.dataService = dataService;
        this.inputDialogService = inputDialogService;
        this.socialSharing = socialSharing;
        this.title = "Fishable Profile";
        this.subTitle = "My Lures";
        this.items = [];
        this.userProfile = {
            image: 'assets/imgs/user.png',
            name: 'User Profile',
            location: 'Sacramento, California'
        };
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/user/Desktop/fishable/src/pages/home/home.html"*/'<app-header></app-header>\n\n<ion-content class="page-content" padding>\n  <ion-item class="profile-container">\n    <user-profile [userProfileData]="userProfile"></user-profile>\n  </ion-item>\n  <components-itemList></components-itemList>\n\n</ion-content>\n'/*ion-inline-end:"/Users/user/Desktop/fishable/src/pages/home/home.html"*/,
            styleUrls: ['/src/pages/home/home.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3__providers_input_dialog_service_input_dialog_service__["a" /* InputDialogServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_input_dialog_service_input_dialog_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FeedPage = /** @class */ (function () {
    function FeedPage(navCtrl, toastCtrl, dataService, inputDialogService, socialSharing) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.dataService = dataService;
        this.inputDialogService = inputDialogService;
        this.socialSharing = socialSharing;
        this.title = "Community Feed";
        this.items = [];
    }
    FeedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feed',template:/*ion-inline-start:"/Users/user/Desktop/fishable/src/pages/feed/feed.html"*/'<app-header></app-header>\n\n<ion-content class="page-content" padding>\n  <components-feedListItem></components-feedListItem>\n</ion-content>\n'/*ion-inline-end:"/Users/user/Desktop/fishable/src/pages/feed/feed.html"*/,
            styleUrls: ['/src/pages/feed/feed.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3__providers_input_dialog_service_input_dialog_service__["a" /* InputDialogServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], FeedPage);
    return FeedPage;
}());

//# sourceMappingURL=feed.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiverAccessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_map_river_map_component__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RiverAccessPage = /** @class */ (function () {
    function RiverAccessPage(dataService, geolocation, alertCtrl) {
        this.dataService = dataService;
        this.geolocation = geolocation;
        this.alertCtrl = alertCtrl;
        this.title = "Find River Access";
        this.searchTerm = '';
        this.locations = [];
        this.filteredLocations = [];
        this.addingLocation = false;
        this.categories = [
            { name: 'location', subTitle: "Favorite Fishing Spots" },
            { name: 'feed_location', subTitle: "Community Fishing Spots" },
        ];
        this.loadLocations();
    }
    RiverAccessPage.prototype.getSubTitle = function (name) {
        var category = this.categories.find(function (c) { return c.name === name; });
        return category ? category.subTitle : '';
    };
    RiverAccessPage.prototype.loadLocations = function () {
        var _this = this;
        var subTitle = this.getSubTitle('feed_location');
        this.dataService.getItems(subTitle).subscribe(function (result) {
            _this.locations = result.items;
            _this.filteredLocations = _this.locations.slice();
            _this.loadGPS();
        });
    };
    RiverAccessPage.prototype.loadGPS = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.userLat = resp.coords.latitude;
            _this.userLng = resp.coords.longitude;
            _this.riverMapComponent.plotLocations(_this.filteredLocations, _this.userLat, _this.userLng);
        }).catch(function (error) {
            console.error('Error getting user location', error);
        });
    };
    RiverAccessPage.prototype.filterResults = function (searchTerm) {
        if (!searchTerm) {
            this.resetView();
        }
        else {
            this.filteredLocations = this.locations.filter(function (location) {
                return location.name.toLowerCase().includes(searchTerm.toLowerCase());
            });
            if (this.filteredLocations.length > 0) {
                this.riverMapComponent.plotLocations(this.filteredLocations, this.userLat, this.userLng);
            }
            else {
                console.log("No locations match the search criteria.");
            }
        }
    };
    RiverAccessPage.prototype.resetView = function () {
        this.searchTerm = '';
        this.filteredLocations = this.locations.slice();
        this.riverMapComponent.plotLocations(this.filteredLocations, this.userLat, this.userLng);
    };
    RiverAccessPage.prototype.toggleAddLocation = function () {
        this.addingLocation = !this.addingLocation;
        this.riverMapComponent.toggleNewLocationMode(this.addingLocation, this.userLat, this.userLng);
    };
    RiverAccessPage.prototype.saveNewLocation = function (latLng) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'New Location',
            message: 'Enter a name for this location:',
            inputs: [{ name: 'title', placeholder: 'Title' }],
            buttons: [
                {
                    text: 'Cancel', handler: function (data) { }
                },
                {
                    text: 'Save', handler: function (data) {
                        if (data.title) {
                            var newLocation = { name: data.title, lat: latLng.lat, lng: latLng.lng };
                            var subTitle = _this.getSubTitle('location');
                            _this.dataService.addItem(subTitle, newLocation).subscribe(function () {
                                _this.toggleAddLocation();
                                _this.loadLocations();
                            });
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__components_map_river_map_component__["a" /* RiverMapComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__components_map_river_map_component__["a" /* RiverMapComponent */])
    ], RiverAccessPage.prototype, "riverMapComponent", void 0);
    RiverAccessPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-river-access',template:/*ion-inline-start:"/Users/user/Desktop/fishable/src/pages/riverAccess/riverAccess.html"*/'<app-header></app-header>\n\n<ion-content class="page-content" padding>\n\n  <ion-list>\n    <ion-list-header>Search</ion-list-header>\n    <ion-item>\n      <input type="text" placeholder="Find river access" [(ngModel)]="searchTerm" (ionInput)="filterResults(searchTerm)">\n      <button class="mapButton" ion-button (click)="filterResults(searchTerm)">Search</button>\n      <button class="mapButton" ion-button (click)="resetView()">Reset</button>\n      <button class="mapButton" ion-button (click)="toggleAddLocation()">\n        {{ addingLocation ? \'Cancel\' : \'New Location\' }}\n      </button>\n    </ion-item>\n  </ion-list>\n\n  <components-river-map (locationSelected)="saveNewLocation($event)"></components-river-map>\n</ion-content>\n'/*ion-inline-end:"/Users/user/Desktop/fishable/src/pages/riverAccess/riverAccess.html"*/,
            styleUrls: ['/src/pages/riverAccess/riverAccess.scss'],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RiverAccessPage);
    return RiverAccessPage;
}());

//# sourceMappingURL=riverAccess.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiverMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RiverMapComponent = /** @class */ (function () {
    function RiverMapComponent(platform, googleMaps, geolocation) {
        this.platform = platform;
        this.googleMaps = googleMaps;
        this.geolocation = geolocation;
        this.locationSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    RiverMapComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.loadMap();
        });
    };
    RiverMapComponent.prototype.loadMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.map = _this.googleMaps.create(_this.mapElement.nativeElement, {
                camera: {
                    target: {
                        lat: resp.coords.latitude,
                        lng: resp.coords.longitude
                    },
                    zoom: 10
                }
            });
            _this.map.on(__WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY).subscribe(function () {
                _this.addUserLocationMarker(resp.coords.latitude, resp.coords.longitude);
            });
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    RiverMapComponent.prototype.addUserLocationMarker = function (lat, lng) {
        var _this = this;
        var markerOptions = {
            position: { lat: lat, lng: lng },
            title: 'Your Location',
            icon: 'blue'
        };
        this.map.addMarker(markerOptions).then(function (marker) {
            _this.userMarker = marker;
            marker.showInfoWindow();
        });
    };
    RiverMapComponent.prototype.plotLocations = function (locations, userLat, userLng) {
        var _this = this;
        if (!this.map) {
            console.log('Map not initialized yet');
            setTimeout(function () { return _this.plotLocations(locations, userLat, userLng); }, 3000);
            return;
        }
        this.map.clear().then(function () {
            var points = [];
            // Create a marker for the user
            var userPosition = { lat: userLat, lng: userLng };
            points.push(userPosition);
            _this.map.addMarker({
                position: userPosition,
                title: 'Your Location',
                icon: 'blue'
            }).then(function (marker) {
                _this.userMarker = marker;
                marker.showInfoWindow();
            });
            // Add other markers
            locations.forEach(function (location) {
                var _a = location.latlong.split(', '), lat = _a[0], lng = _a[1];
                location.lat = lat;
                location.lng = lng;
                var locPosition = { lat: location.lat, lng: location.lng };
                points.push(locPosition);
                _this.map.addMarker({
                    position: locPosition,
                    title: location.name
                }).then(function (marker) {
                    marker.on(__WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MARKER_CLICK).subscribe(function () {
                        _this.map.animateCamera({ target: marker.getPosition(), zoom: 10 });
                        marker.showInfoWindow();
                    });
                });
            });
            _this.map.moveCamera({
                target: points,
                padding: 100
            });
        });
    };
    RiverMapComponent.prototype.toggleNewLocationMode = function (enable, userLat, userLng) {
        var _this = this;
        if (enable) {
            this.map.clear().then(function () {
                _this.addUserLocationMarker(userLat, userLng);
                _this.setupMapClick();
            });
        }
        else {
            this.tempMarker && this.tempMarker.remove();
            this.tempMarker = null;
            this.plotLocations([], userLat, userLng);
        }
    };
    RiverMapComponent.prototype.setupMapClick = function () {
        var _this = this;
        this.map.on(__WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_CLICK).subscribe(function (event) {
            _this.placeTempMarker(event[0]);
        });
    };
    RiverMapComponent.prototype.placeTempMarker = function (latLng) {
        var _this = this;
        if (this.tempMarker) {
            this.tempMarker.setPosition(latLng);
        }
        else {
            this.map.addMarker({
                position: latLng,
                draggable: true,
                title: "New Location"
            }).then(function (marker) {
                _this.tempMarker = marker;
                marker.showInfoWindow();
            });
        }
        this.locationSelected.emit({ lat: latLng.lat, lng: latLng.lng });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], RiverMapComponent.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], RiverMapComponent.prototype, "locationSelected", void 0);
    RiverMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'components-river-map',template:/*ion-inline-start:"/Users/user/Desktop/fishable/src/components/map/river-map.component.html"*/'<ion-content>\n  <div #map id="map" style="height: 80%; width: 100%;"></div>\n</ion-content>\n'/*ion-inline-end:"/Users/user/Desktop/fishable/src/components/map/river-map.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["a" /* GoogleMaps */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]])
    ], RiverMapComponent);
    return RiverMapComponent;
}());

//# sourceMappingURL=river-map.component.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(370);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_input_dialog_service_input_dialog_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_api_service_api_service__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_itemList_itemList__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_feedListItem_feedListItem__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_uploadImage_uploadImage__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_riverAccessLocation_river_access_location_component__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_chooser__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_geolocation__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_about_about__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_contact_contact__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_home_home__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_feed_feed__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_tabs_tabs__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_riverAccess_riverAccess__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_userProfile_user_profile_component__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_header_header_component__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_login_login__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_auth_service_auth_service__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_data_service_data_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_item_modal_item_modal__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_email_composer__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_map_river_map_component__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_google_maps__ = __webpack_require__(364);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_17__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_feed_feed__["a" /* FeedPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__components_itemList_itemList__["a" /* ItemList */],
                __WEBPACK_IMPORTED_MODULE_11__components_feedListItem_feedListItem__["a" /* FeedListItem */],
                __WEBPACK_IMPORTED_MODULE_12__components_uploadImage_uploadImage__["a" /* UploadImage */],
                __WEBPACK_IMPORTED_MODULE_13__components_riverAccessLocation_river_access_location_component__["a" /* RiverAccessLocationComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_userProfile_user_profile_component__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_item_modal_item_modal__["a" /* ItemModal */],
                __WEBPACK_IMPORTED_MODULE_22__pages_riverAccess_riverAccess__["a" /* RiverAccessPage */],
                __WEBPACK_IMPORTED_MODULE_30__components_map_river_map_component__["a" /* RiverMapComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_header_header_component__["a" /* HeaderComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */], {
                    tabsPlacement: 'bottom',
                    platforms: {
                        ios: { tabsPlacement: 'bottom' },
                        android: { tabsPlacement: 'bottom' },
                        windows: { tabsPlacement: 'bottom' }
                    }
                }, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_17__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_feed_feed__["a" /* FeedPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__components_itemList_itemList__["a" /* ItemList */],
                __WEBPACK_IMPORTED_MODULE_11__components_feedListItem_feedListItem__["a" /* FeedListItem */],
                __WEBPACK_IMPORTED_MODULE_12__components_uploadImage_uploadImage__["a" /* UploadImage */],
                __WEBPACK_IMPORTED_MODULE_13__components_riverAccessLocation_river_access_location_component__["a" /* RiverAccessLocationComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_userProfile_user_profile_component__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_item_modal_item_modal__["a" /* ItemModal */],
                __WEBPACK_IMPORTED_MODULE_22__pages_riverAccess_riverAccess__["a" /* RiverAccessPage */],
                __WEBPACK_IMPORTED_MODULE_30__components_map_river_map_component__["a" /* RiverMapComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_5__providers_input_dialog_service_input_dialog_service__["a" /* InputDialogServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_26__providers_auth_service_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_27__providers_data_service_data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_chooser__["a" /* FileChooser */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_9__providers_api_service_api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_google_maps__["a" /* GoogleMaps */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_forkJoin__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.baseURL = 'http://fishableapp.com';
        this.categoryEndpoints = [
            { community: false, endpoint: this.baseURL + "/api/catch", name: 'catch', subTitle: "My Catches" },
            { community: false, endpoint: this.baseURL + "/api/location", name: 'location', subTitle: "Favorite Fishing Spots" },
            { community: false, endpoint: this.baseURL + "/api/bait", name: 'bait', subTitle: "Bait History" },
            { community: false, endpoint: this.baseURL + "/api/lure", name: 'lure', subTitle: "My Lures" },
            { community: false, endpoint: this.baseURL + "/api/email", name: 'email', subTitle: "Email" },
            { community: true, endpoint: this.baseURL + "/api/feed/catch", name: 'feed_catch', subTitle: "Community Catches" },
            { community: true, endpoint: this.baseURL + "/api/feed/location", name: 'feed_location', subTitle: "Community Fishing Spots" },
            { community: true, endpoint: this.baseURL + "/api/feed/bait", name: 'feed_bait', subTitle: "Community Bait" },
            { community: true, endpoint: this.baseURL + "/api/feed/lure", name: 'feed_lure', subTitle: "Community Lures" },
        ];
        this.dataChangeSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        this.dataChanged$ = this.dataChangeSubject.asObservable();
    }
    DataService.prototype.getHeaders = function () {
        var token = localStorage.getItem('token');
        return new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token
        });
    };
    DataService.prototype.fetchCategoryData = function () {
        var _this = this;
        var requests = this.categoryEndpoints.map(function (category) {
            if (!category.community) {
                return _this.http.get(_this.baseURL + "/" + category.endpoint, { headers: _this.getHeaders() }).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (items) { return ({ name: category.subTitle, items: items }); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(_this.handleError));
            }
        });
        return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_forkJoin__["forkJoin"])(requests);
    };
    DataService.prototype.fetchCommunityData = function () {
        var _this = this;
        var requests = this.categoryEndpoints.map(function (category) {
            if (category.community) {
                return _this.http.get(_this.baseURL + "/" + category.endpoint, { headers: _this.getHeaders() }).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (items) { return ({ name: category.subTitle, items: items }); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(_this.handleError));
            }
        });
        return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_forkJoin__["forkJoin"])(requests);
    };
    DataService.prototype.getItems = function (subTitle) {
        var url = this.getEndPoint(subTitle);
        return this.http.get(url, { headers: this.getHeaders() }).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (items) { return ({
            subTitle: subTitle, items: items.map(function (i) {
                if (i.image.length === 0) {
                    i.image = '/assets/imgs/logo.png';
                }
                return i;
            })
        }); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    DataService.prototype.addItem = function (subTitle, item) {
        var _this = this;
        var url = this.getEndPoint(subTitle);
        return this.http.post(url, item, { headers: this.getHeaders() }).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (response) {
            _this.dataChangeSubject.next(true);
            return { subTitle: subTitle, items: response };
        }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    DataService.prototype.removeItem = function (endpoint, id) {
        var url = this.getEndPoint(endpoint) + ("/" + id);
        return this.http.delete(url, { headers: this.getHeaders() }).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    DataService.prototype.editItem = function (subTitle, item) {
        var _this = this;
        // get item id
        var category = this.categoryEndpoints.find(function (c) { return subTitle === c.subTitle; });
        var tablename = category.name;
        var pks = {
            'location': 'location_id',
            'catch': 'catch_id',
            'lure': 'lure_id',
            'bait': 'bait_id'
        };
        var pk = pks[tablename];
        var id = item[pk];
        var url = this.getEndPoint(subTitle) + ("/" + id);
        return this.http.put(url, item, { headers: this.getHeaders() }).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (response) {
            _this.dataChangeSubject.next(true);
            return { subTitle: subTitle, items: response };
        }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    DataService.prototype.sendEmail = function (email) {
        var url = this.getEndPoint('Email');
        return this.http.post(url, email, { headers: this.getHeaders() }).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (response) { return response; }));
    };
    DataService.prototype.getEndPoint = function (subTitle) {
        var category = this.categoryEndpoints.find(function (ce) { return ce.subTitle === subTitle; });
        return category ? category.endpoint : "Wrong SubTitle (" + subTitle + ") Provided for Endpoint.";
    };
    DataService.prototype.handleError = function (error) {
        console.error('DataService Error:', error.message);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(function () { return new Error("Error: " + error.message); });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DataService);
    return DataService;
}());

//# sourceMappingURL=data-service.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputDialogServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service_data_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_item_modal_item_modal__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InputDialogServiceProvider = /** @class */ (function () {
    function InputDialogServiceProvider(modalCtrl, dataService) {
        this.modalCtrl = modalCtrl;
        this.dataService = dataService;
    }
    InputDialogServiceProvider.prototype.showPrompt = function (subTitle, item, mode) {
        var _this = this;
        if (mode === void 0) { mode = "create"; }
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__components_item_modal_item_modal__["a" /* ItemModal */], { mode: mode, item: item, subTitle: subTitle });
        modal.onDidDismiss(function (data) {
            if (data && mode == "create") {
                _this.dataService.addItem(data.subTitle, data).subscribe(function () { return console.log('Item updated successfully'); }, function (error) { return console.error('Error adding item:', error); });
            }
            else if (data && mode == "edit") {
                _this.dataService.editItem(data.subTitle, data).subscribe(function () { return console.log('Item updated successfully'); }, function (error) { return console.error('Error adding item:', error); });
            }
        });
        modal.present();
    };
    InputDialogServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1__data_service_data_service__["a" /* DataService */]])
    ], InputDialogServiceProvider);
    return InputDialogServiceProvider;
}());

//# sourceMappingURL=input-dialog-service.js.map

/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_input_dialog_service_input_dialog_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ItemList = /** @class */ (function () {
    function ItemList(navCtrl, toastCtrl, dataService, inputDialogService, socialSharing, cdr) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.dataService = dataService;
        this.inputDialogService = inputDialogService;
        this.socialSharing = socialSharing;
        this.cdr = cdr;
        this.categories = [
            { name: 'catch', subTitle: "My Catches", items: [] },
            { name: 'location', subTitle: "Favorite Fishing Spots", items: [] },
            { name: 'lure', subTitle: "My Lures", items: [] },
            { name: 'bait', subTitle: "Bait History", items: [] }
        ];
        this.dataChangedSubscription = dataService.dataChanged$.subscribe(function (dataChanged) {
            if (dataChanged) {
                _this.loadItems();
            }
        });
    }
    ItemList.prototype.ngOnInit = function () {
        var _this = this;
        this.loadItems();
        this.dataChangedSubscription = this.dataService.dataChanged$.subscribe(function (dataChanged) {
            if (dataChanged) {
                _this.loadItems();
            }
        });
    };
    ItemList.prototype.ngOnDestroy = function () {
        if (this.dataChangedSubscription) {
            this.dataChangedSubscription.unsubscribe();
        }
    };
    ItemList.prototype.loadItems = function () {
        var _this = this;
        this.categories.forEach(function (category) {
            _this.dataService.getItems(category.subTitle)
                .subscribe(function (response) {
                _this.categories.map(function (c) {
                    if (c.subTitle === response.subTitle) {
                        c.subTitle = response.subTitle;
                        c.items = response.items;
                        return c;
                    }
                    return c;
                });
            }, function (error) {
                console.error('Error loading items:', error);
            });
        });
        this.cdr.detectChanges();
    };
    ItemList.prototype.removeItem = function (subTitle, item) {
        var _this = this;
        if (!item || !subTitle) {
            console.error('Error: Item ID and subTitle parameters are required');
            return;
        }
        // Get item id
        var category = this.categories.find(function (c) { return subTitle === c.subTitle; });
        var tablename = category.name;
        var pks = {
            'location': 'location_id',
            'catch': 'catch_id',
            'lure': 'lure_id',
            'bait': 'bait_id'
        };
        var pk = pks[tablename];
        var id = item[pk];
        console.log('Item ID: ', id, item);
        this.dataService.removeItem(subTitle, id).subscribe(function () {
            _this.loadItems();
        }, function (error) {
            console.error('Error removing item', error);
        });
    };
    ItemList.prototype.shareItem = function (item, index) {
        console.log("sharing item: ", item, index);
        var toast = this.toastCtrl.create({
            message: "sharing item: " + index + " ...",
            duration: 3000,
            position: 'top'
        });
        toast.present();
        var message = "message";
        var subject = "Shared via Groceries app";
        this.socialSharing.share(message, subject).then(function () {
            console.log("Shared Successfully");
        }).catch(function (error) {
            console.log("Error while sharing", error);
        });
    };
    ItemList.prototype.editItem = function (subTitle, item, mode) {
        if (mode === void 0) { mode = "edit"; }
        console.log("Edit item ", subTitle, item);
        this.inputDialogService.showPrompt(subTitle, item, 'edit');
    };
    ItemList.prototype.addItem = function (subTitle) {
        console.log('Launching', subTitle, ' modal.');
        this.inputDialogService.showPrompt(subTitle, {}, 'create');
    };
    ItemList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'components-itemList',template:/*ion-inline-start:"/Users/user/Desktop/fishable/src/components/itemList/itemList.html"*/'<ion-content padding scrollbar-y>\n\n  <ng-container *ngFor="let category of categories">\n    <ion-list-header>\n      <div style="height: 60px; display: flex; align-items: flex-start; justify-content: space-evenly;">\n        <div style="height: 60px; width: 75%; border: 0px solid #000;">\n          <div style="margin-top: 20px;">\n            {{ category.subTitle }}\n          </div>\n        </div>\n        <div style="height: 60px; width: 25%; border: 0px solid #000;">\n          <ion-fab>\n            <button (click)="addItem(category.subTitle)" ion-fab mini>\n              <ion-icon name="add"></ion-icon>\n            </button>\n          </ion-fab>\n        </div>\n      </div>\n    </ion-list-header>\n\n    <h3 class="no-item" text-center *ngIf="category.items.length === 0">\n      No items available in the list.\n    </h3>\n\n    <ion-list *ngIf="category.items.length > 0">\n\n      <ion-item-sliding *ngFor="let item of category.items; let i = index">\n\n        <ion-item>\n          <img class="user-profile-img" [src]="item.image" alt="User Content" />\n          <h2>Name: {{item.name}}</h2>\n          <p *ngIf="item.latlong">See Map</p>\n          <p *ngIf="item.price && item.price > 0">Price: {{ item.price }}</p>\n          <p *ngIf="item.description">Description: {{ item.description }}</p>\n        </ion-item>\n\n        <ion-item-options>\n          <button (click)="editItem(category.subTitle, item)" ion-button color="primary" icon-start>\n            <ion-icon name="create"></ion-icon>\n            Edit\n          </button>\n\n          <!-- <button (click)="shareItem(category.subTitle, item.id)" ion-button color="primary" icon-start>\n            <ion-icon name="share"></ion-icon>\n            Share\n          </button> -->\n\n          <button (click)="removeItem(category.subTitle, item)" ion-button color="secondary" icon-start>\n            <ion-icon name="trash"></ion-icon>\n            Delete\n          </button>\n        </ion-item-options>\n\n      </ion-item-sliding>\n\n    </ion-list>\n\n  </ng-container>\n\n</ion-content>\n'/*ion-inline-end:"/Users/user/Desktop/fishable/src/components/itemList/itemList.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3__providers_input_dialog_service_input_dialog_service__["a" /* InputDialogServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]])
    ], ItemList);
    return ItemList;
}());

//# sourceMappingURL=itemList.js.map

/***/ }),

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedListItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_input_dialog_service_input_dialog_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FeedListItem = /** @class */ (function () {
    function FeedListItem(navCtrl, toastCtrl, dataService, inputDialogService, socialSharing, cdr) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.dataService = dataService;
        this.inputDialogService = inputDialogService;
        this.socialSharing = socialSharing;
        this.cdr = cdr;
        this.categories = [
            { subTitle: "Community Catches", items: [] },
            { subTitle: "Community Fishing Spots", items: [] },
            { subTitle: "Community Bait", items: [] },
            { subTitle: "Community Lures", items: [] }
        ];
        this.dataChangedSubscription = dataService.dataChanged$.subscribe(function (dataChanged) {
            if (dataChanged) {
                _this.loadItems();
            }
        });
    }
    FeedListItem.prototype.ngOnInit = function () {
        var _this = this;
        this.loadItems();
        this.dataChangedSubscription = this.dataService.dataChanged$.subscribe(function (dataChanged) {
            if (dataChanged) {
                _this.loadItems();
            }
        });
    };
    FeedListItem.prototype.ngOnDestroy = function () {
        if (this.dataChangedSubscription) {
            this.dataChangedSubscription.unsubscribe();
        }
    };
    FeedListItem.prototype.loadItems = function () {
        var _this = this;
        this.categories.forEach(function (category) {
            _this.dataService.getItems(category.subTitle)
                .subscribe(function (response) {
                _this.categories.map(function (c) {
                    if (c.subTitle === response.subTitle) {
                        c.subTitle = response.subTitle;
                        c.items = response.items;
                        return c;
                    }
                    return c;
                });
            }, function (error) {
                console.error('Error loading items:', error);
            });
        });
        this.cdr.detectChanges();
    };
    FeedListItem.prototype.shareItem = function (item, index) {
        console.log("sharing item: ", item, index);
        var toast = this.toastCtrl.create({
            message: "sharing item: " + index + " ...",
            duration: 3000,
            position: 'top'
        });
        toast.present();
        var message = "message";
        var subject = "Shared via Groceries app";
        this.socialSharing.share(message, subject).then(function () {
            console.log("Shared Successfully");
        }).catch(function (error) {
            console.log("Error while sharing", error);
        });
    };
    FeedListItem = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'components-feedListItem',template:/*ion-inline-start:"/Users/user/Desktop/fishable/src/components/feedListItem/feedListItem.html"*/'<ion-content padding scrollbar-y>\n\n  <ng-container *ngFor="let category of categories">\n    <ion-list-header>\n      <div style="width: 100%; height: 20px; border-bottom: 1px dotted #666666;">{{ category.subTitle }}</div>\n    </ion-list-header>\n\n    <h3 class="no-item" text-center *ngIf="category.items.length === 0">\n      No items available in the list.\n    </h3>\n\n    <ion-list *ngIf="category.items.length > 0">\n\n      <ion-item-sliding *ngFor="let item of category.items; let i = index">\n\n        <ion-item>\n          <img class="user-profile-img" [src]="item.image" alt="User Content" />\n          <h2>Name: {{item.name}}</h2>\n          <p *ngIf="item.latlong">See Map</p>\n          <p *ngIf="item.price && item.price > 0">Price: {{ item.price }}</p>\n          <p *ngIf="item.description">Description: {{ item.description }}</p>\n        </ion-item>\n\n        <!-- <ion-item-options>\n          <button (click)="shareItem(category.subTitle, item.id)" ion-button color="primary" icon-start>\n            <ion-icon name="share"></ion-icon>\n            Share\n          </button>\n        </ion-item-options> -->\n\n      </ion-item-sliding>\n\n    </ion-list>\n\n  </ng-container>\n\n</ion-content>\n'/*ion-inline-end:"/Users/user/Desktop/fishable/src/components/feedListItem/feedListItem.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3__providers_input_dialog_service_input_dialog_service__["a" /* InputDialogServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]])
    ], FeedListItem);
    return FeedListItem;
}());

//# sourceMappingURL=feedListItem.js.map

/***/ }),

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadImage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_service_api_service__ = __webpack_require__(355);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Component file






var UploadImage = /** @class */ (function () {
    function UploadImage(platform, statusBar, splashScreen, camera, apiService) {
        this.camera = camera;
        this.apiService = apiService;
        this.userImg = '';
        this.base64Img = '';
        this.cameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true
        };
        this.galleryOptions = {
            quality: 100,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            allowEdit: true
        };
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.userImg = 'assets/imgs/logo.png';
    }
    UploadImage.prototype.openCamera = function () {
        var _this = this;
        this.camera.getPicture(this.cameraOptions).then(function (imgData) {
            console.log('image data =>  ', imgData);
            _this.base64Img = 'data:image/jpeg;base64,' + imgData;
            _this.userImg = _this.base64Img;
            var itemId = "{{item.id}}";
            _this.apiService.uploadImage(_this.base64Img, itemId).subscribe(function (response) {
                console.log('Image uploaded successfully', response);
            }, function (error) {
                console.error('Failed to upload image', error);
            });
        }, function (err) {
            console.log(err);
        });
    };
    UploadImage.prototype.openGallery = function () {
        var _this = this;
        this.camera.getPicture(this.galleryOptions).then(function (imgData) {
            console.log('image data =>  ', imgData);
            _this.base64Img = 'data:image/jpeg;base64,' + imgData;
            _this.userImg = _this.base64Img;
        }, function (err) {
            console.log(err);
        });
    };
    UploadImage.prototype.uploadImageToServer = function (itemId) {
        if (this.base64Img) {
            this.apiService.uploadImage(this.base64Img, itemId).subscribe(function (response) {
                console.log('Upload successful', response);
            }, function (err) {
                console.error('Upload failed', err);
            });
        }
        else {
            console.log('No image to upload');
        }
    };
    UploadImage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'upload-image',template:/*ion-inline-start:"/Users/user/Desktop/fishable/src/components/uploadImage/uploadImage.html"*/'<img class="user-profile-img" src="{{userImg}}" alt="">\n'/*ion-inline-end:"/Users/user/Desktop/fishable/src/components/uploadImage/uploadImage.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_5__providers_api_service_api_service__["a" /* ApiService */]])
    ], UploadImage);
    return UploadImage;
}());

//# sourceMappingURL=uploadImage.js.map

/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiverAccessLocationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RiverAccessLocationComponent = /** @class */ (function () {
    function RiverAccessLocationComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], RiverAccessLocationComponent.prototype, "riverAccessLocation", void 0);
    RiverAccessLocationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'river-access-location',template:/*ion-inline-start:"/Users/user/Desktop/fishable/src/components/riverAccessLocation/river-access-location.component.html"*/'<ion-item>\n  <h2>{{ riverAccessLocation.name }}</h2>\n  <p>{{ riverAccessLocation.description }}</p>\n</ion-item>\n'/*ion-inline-end:"/Users/user/Desktop/fishable/src/components/riverAccessLocation/river-access-location.component.html"*/,
        })
    ], RiverAccessLocationComponent);
    return RiverAccessLocationComponent;
}());

//# sourceMappingURL=river-access-location.component.js.map

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, camera) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/user/Desktop/fishable/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/user/Desktop/fishable/src/app/app.html"*/,
            styleUrls: ['/src/app/app.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent() {
        this.userProfileData = {
            image: 'assets/imgs/fishable-banner.png',
            name: 'Jane Doe',
            location: 'Sacramento, California'
        };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], UserProfileComponent.prototype, "userProfileData", void 0);
    UserProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'user-profile',template:/*ion-inline-start:"/Users/user/Desktop/fishable/src/components/userProfile/user-profile.component.html"*/'<div class="user-profile">\n  <img [src]="userProfileData?.image" alt="User Image">\n  <h2>{{ userProfileData.name }}</h2>\n  <p>{{ userProfileData.location }}</p>\n</div>\n'/*ion-inline-end:"/Users/user/Desktop/fishable/src/components/userProfile/user-profile.component.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], UserProfileComponent);
    return UserProfileComponent;
}());

//# sourceMappingURL=user-profile.component.js.map

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(navCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.currentTitle = '';
        this.updateTitleBasedOnCurrentPage();
        this.navCtrl.viewDidEnter.subscribe(function (view) {
            _this.updateTitleBasedOnCurrentPage();
        });
    }
    HeaderComponent.prototype.updateTitleBasedOnCurrentPage = function () {
        var activeView = this.navCtrl.getActive();
        if (activeView) {
            console.log('Actual Page name: ', activeView.component.name);
            switch (activeView.component.name) {
                case 'AboutPage':
                    this.currentTitle = 'About Fishable';
                    break;
                case 'HomePage':
                    this.currentTitle = 'Fishable Profile';
                    break;
                case 'RiverAccessPage':
                    this.currentTitle = 'Find River Access';
                    break;
                case 'ContactPage':
                    this.currentTitle = 'Reach Our Team';
                    break;
                case 'FeedPage':
                    this.currentTitle = 'Community Feed';
                    break;
                default:
                    this.currentTitle = 'Fishable';
                    break;
            }
        }
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-header',template:/*ion-inline-start:"/Users/user/Desktop/fishable/src/components/header/header.component.html"*/'<ion-header>\n  <ion-navbar>\n    <div class="header-content">\n      <img src="assets/imgs/fishable-banner.png" class="header-image" />\n      <ion-title class="header-title">{{ currentTitle }}</ion-title>\n    </div>\n  </ion-navbar>\n</ion-header>\n'/*ion-inline-end:"/Users/user/Desktop/fishable/src/components/header/header.component.html"*/,
            styleUrls: ['/src/components/header/header.component.scss'],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=header.component.js.map

/***/ })

},[365]);
//# sourceMappingURL=main.js.map