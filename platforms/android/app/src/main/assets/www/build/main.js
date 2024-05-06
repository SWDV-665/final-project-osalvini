webpackJsonp([0],{

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputDialogServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service_data_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_item_modal_item_modal__ = __webpack_require__(350);
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
        console.log('showPrompt mode: ', mode);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__components_item_modal_item_modal__["a" /* ItemModal */], { mode: mode, item: item, subTitle: subTitle });
        modal.onDidDismiss(function (data) {
            console.log("SAVING MODAL DATA: ", data);
            if (data) {
                console.log("Item saved", data);
                _this.dataService.addItem(data.subTitle, data).subscribe(function () { return console.log('Item added successfully'); }, function (error) { return console.error('Error adding item:', error); });
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

/***/ 170:
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
webpackEmptyAsyncContext.id = 170;

/***/ }),

/***/ 213:
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
webpackEmptyAsyncContext.id = 213;

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_chooser__ = __webpack_require__(351);
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
            selector: 'item-modal',template:/*ion-inline-start:"/Users/user/Desktop/fishable/src/components/item-modal/item-modal.html"*/'<div class="item-modal">\n  <div class="modal-content">\n\n    <input type="text" [(ngModel)]="item.name" placeholder="Enter name" class="modal-input">\n    <input type="text" [(ngModel)]="item.description" placeholder="Enter description" class="modal-input">\n\n    <input *ngIf="subTitle === \'My Lures\' || subTitle === \'Bait History\'"\n           type="text" [(ngModel)]="item.price" placeholder="Enter price" class="modal-input">\n\n    <input *ngIf="subTitle === \'Favorite Fishing Spots\'"\n           type="text" [(ngModel)]="gpsCoordinates" placeholder="Loading GPS..." class="modal-input" disabled>\n\n    <button class="modal-button icon-button" (click)="takePhoto()">\n      <ion-icon name="camera"></ion-icon>\n    </button>\n\n    <button class="modal-button icon-button" (click)="chooseImage()">\n      <ion-icon name="images"></ion-icon>\n    </button>\n\n    <button class="modal-button" (click)="saveItem()">Save</button>\n\n    <button class="modal-button" (click)="close()">Close</button>\n\n  </div>\n</div>\n'/*ion-inline-end:"/Users/user/Desktop/fishable/src/components/item-modal/item-modal.html"*/
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

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(79);
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

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_service_auth_service__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(355);
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
    function LoginPage(authService, navCtrl) {
        this.authService = authService;
        this.navCtrl = navCtrl;
    }
    LoginPage.prototype.ngOnInit = function () { };
    LoginPage.prototype.onLogin = function (form) {
        var _this = this;
        this.authService.login(form.value.username, form.value.password).subscribe(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
        }, function (error) {
            console.log(error);
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/user/Desktop/fishable/src/pages/login/login.html"*/'<ion-content padding class="background">\n\n  <ion-card>\n    <img src="assets/imgs/fishable-banner.png" />\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content>\n      <form #form="ngForm" (ngSubmit)="onLogin(form)">\n\n        <ion-item>\n          <ion-icon slot="start" name="person-circle"></ion-icon>\n          <ion-label position="floating"></ion-label>\n          <ion-input type="email" name="username" placeholder="Email" ngModel required></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-icon slot="start" name="key"></ion-icon>\n          <ion-label position="floating"></ion-label>\n          <ion-input type="password" name="password" placeholder="Password" ngModel required></ion-input>\n        </ion-item>\n\n        <ion-card-content>\n          <button ion-button expand="block" color="primary" type="submit">Log in</button>\n        </ion-card-content>\n\n      </form>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <img src="assets/imgs/fishable-fishing.png" />\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/user/Desktop/fishable/src/pages/login/login.html"*/,
            styleUrls: ['/src/pages/login/login.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(158);
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
        this.apiUrl = 'http://localhost:3003/api/auth';
    }
    AuthService.prototype.login = function (username, password) {
        return this.http.post(this.apiUrl + "/login", { username: username, password: password }).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["tap"])(function (response) {
            if (response && response.token) {
                localStorage.setItem('token', response.token);
            }
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(function (error) {
            console.error('Login error:', error);
            throw error;
        }));
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
    };
    AuthService.prototype.isAuthenticated = function () {
        return !!localStorage.getItem('token');
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__riverAccess_riverAccess__ = __webpack_require__(359);
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
    function TabsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_5__riverAccess_riverAccess__["a" /* RiverAccessPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Users/user/Desktop/fishable/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab1Root" tabTitle="Profile" tabIcon="people-outline"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="FindRiverAccess" tabIcon="map-outline"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Contact" tabIcon="call-outline"></ion-tab>\n  <!-- <ion-tab [root]="tab5Root" tabTitle="Contact" tabIcon="call-outline"></ion-tab> -->\n</ion-tabs>\n'/*ion-inline-end:"/Users/user/Desktop/fishable/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(45);
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
    function ContactPage(navCtrl, dataService) {
        this.navCtrl = navCtrl;
        this.dataService = dataService;
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
    ContactPage.prototype.sendEmail = function (emailMessage) {
        var subTitle = this.getSubTitle('email');
        this.dataService.sendEmail(emailMessage).subscribe(function (result) {
            console.log('Email sent successfully: ', result);
        }, function (error) {
            console.error('Error send email message: ', error);
        });
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/user/Desktop/fishable/src/pages/contact/contact.html"*/'<app-header></app-header>\n\n<ion-content class="page-content" padding>\n\n  <ion-list>\n    <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input type="email" [(ngModel)]="email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Message</ion-label>\n      <ion-textarea rows="6" [(ngModel)]="message"></ion-textarea>\n    </ion-item>\n  </ion-list>\n\n  <div padding>\n    <button ion-button color="primary" (click)="sendEmail()">Send Message</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/user/Desktop/fishable/src/pages/contact/contact.html"*/,
            styleUrls: ['/src/pages/contact/contact.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataService */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_input_dialog_service_input_dialog_service__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { UserProfileComponent } from '../../components/userProfile/user-profile.component';
//import { RiverMapComponent } from '../../components/map/river-map.component';
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
            name: 'PoisonIvy',
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

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiverAccessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_map_river_map_component__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(89);
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
            { name: 'catch', subTitle: "My Catches" },
            { name: 'location', subTitle: "Favorite Fishing Spots" },
            { name: 'bait', subTitle: "Bait History" },
            { name: 'lure', subTitle: "My Lures" },
            { name: 'email', subTitle: "Reach Our Team" }
        ];
        this.loadLocations();
    }
    RiverAccessPage.prototype.getSubTitle = function (name) {
        var category = this.categories.find(function (c) { return c.name === name; });
        return category ? category.subTitle : '';
    };
    RiverAccessPage.prototype.loadLocations = function () {
        var _this = this;
        var subTitle = this.getSubTitle('location');
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
                { text: 'Cancel', handler: function (data) { } },
                {
                    text: 'Save', handler: function (data) {
                        if (data.title) {
                            var newLocation = { name: data.title, lat: latLng.lat, lng: latLng.lng };
                            var subTitle = _this.getSubTitle('location');
                            _this.dataService.addItem(subTitle, newLocation).subscribe(function () {
                                _this.loadLocations(); // Reload locations from API
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
            selector: 'page-river-access',template:/*ion-inline-start:"/Users/user/Desktop/fishable/src/pages/riverAccess/riverAccess.html"*/'<app-header></app-header>\n\n<ion-content class="page-content" padding>\n\n  <ion-list>\n    <ion-list-header>Search</ion-list-header>\n    <ion-item>\n      <input type="text" placeholder="Find river access" [(ngModel)]="searchTerm"\n        (ionInput)="filterResults(searchTerm)">\n      <button ion-button (click)="filterResults(searchTerm)">Search</button>\n      <button ion-button (click)="resetView()">Reset</button>\n      <button ion-button (click)="toggleAddLocation()">\n        {{ addingLocation ? \'Cancel\' : \'New Location\' }}\n      </button>\n    </ion-item>\n  </ion-list>\n\n  <components-river-map (locationSelected)="saveNewLocation($event)"></components-river-map>\n</ion-content>\n'/*ion-inline-end:"/Users/user/Desktop/fishable/src/pages/riverAccess/riverAccess.html"*/,
            styleUrls: ['/src/pages/riverAccess/riverAccess.scss'],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RiverAccessPage);
    return RiverAccessPage;
}());

//# sourceMappingURL=riverAccess.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiverMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(89);
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
                    zoom: 15
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
            setTimeout(function () { return _this.plotLocations(locations, userLat, userLng); });
            return;
        }
        this.map.clear().then(function () {
            var points = [];
            // Create a marker for the user's location and add to points array
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
            // Add other markers and collect their positions
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
                        _this.map.animateCamera({ target: marker.getPosition(), zoom: 15 });
                        marker.showInfoWindow();
                    });
                });
            });
            // Adjust the map view to include all markers
            _this.map.moveCamera({
                target: points,
                padding: 100 // Adjust padding as needed
            });
        });
    };
    RiverMapComponent.prototype.toggleNewLocationMode = function (enable, userLat, userLng) {
        var _this = this;
        if (enable) {
            this.map.clear().then(function () {
                _this.addUserLocationMarker(userLat, userLng); // Ensure the user marker is re-added
                _this.setupMapClick();
            });
        }
        else {
            this.tempMarker && this.tempMarker.remove();
            this.tempMarker = null;
            this.plotLocations([], userLat, userLng); // Clear all markers and replot the user location only
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

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(367);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_input_dialog_service_input_dialog_service__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_api_service_api_service__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_itemList_itemList__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_uploadImage_uploadImage__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_riverAccessLocation_river_access_location_component__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_chooser__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_geolocation__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_about_about__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_contact_contact__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_home_home__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_tabs_tabs__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_riverAccess_riverAccess__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_userProfile_user_profile_component__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_header_header_component__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_login_login__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_auth_service_auth_service__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_data_service_data_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_item_modal_item_modal__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_email_composer__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_map_river_map_component__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_google_maps__ = __webpack_require__(361);
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
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__components_itemList_itemList__["a" /* ItemList */],
                __WEBPACK_IMPORTED_MODULE_11__components_uploadImage_uploadImage__["a" /* uploadImage */],
                __WEBPACK_IMPORTED_MODULE_12__components_riverAccessLocation_river_access_location_component__["a" /* RiverAccessLocationComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_userProfile_user_profile_component__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_item_modal_item_modal__["a" /* ItemModal */],
                __WEBPACK_IMPORTED_MODULE_20__pages_riverAccess_riverAccess__["a" /* RiverAccessPage */],
                __WEBPACK_IMPORTED_MODULE_28__components_map_river_map_component__["a" /* RiverMapComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_header_header_component__["a" /* HeaderComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */], {
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
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__components_itemList_itemList__["a" /* ItemList */],
                __WEBPACK_IMPORTED_MODULE_11__components_uploadImage_uploadImage__["a" /* uploadImage */],
                __WEBPACK_IMPORTED_MODULE_12__components_riverAccessLocation_river_access_location_component__["a" /* RiverAccessLocationComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_userProfile_user_profile_component__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_item_modal_item_modal__["a" /* ItemModal */],
                __WEBPACK_IMPORTED_MODULE_20__pages_riverAccess_riverAccess__["a" /* RiverAccessPage */],
                __WEBPACK_IMPORTED_MODULE_28__components_map_river_map_component__["a" /* RiverMapComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_5__providers_input_dialog_service_input_dialog_service__["a" /* InputDialogServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_24__providers_auth_service_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_25__providers_data_service_data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_chooser__["a" /* FileChooser */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_9__providers_api_service_api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_google_maps__["a" /* GoogleMaps */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_forkJoin__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__);
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
        this.baseURL = 'http://localhost:3003';
        this.dataChangeSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        this.dataChanged$ = this.dataChangeSubject.asObservable();
        this.categoryEndpoints = [
            { endpoint: this.baseURL + "/api/catch", name: 'catch', subTitle: "My Catches" },
            { endpoint: this.baseURL + "/api/location", name: 'location', subTitle: "Favorite Fishing Spots" },
            { endpoint: this.baseURL + "/api/bait", name: 'bait', subTitle: "Bait History" },
            { endpoint: this.baseURL + "/api/lure", name: 'lure', subTitle: "My Lures" },
            { endpoint: this.baseURL + "/api/email", name: 'email', subTitle: "email" }
        ];
    }
    DataService.prototype.fetchCategoryData = function () {
        var _this = this;
        var requests = this.categoryEndpoints.map(function (category) {
            return _this.http.get(_this.baseURL + "/" + category.endpoint).pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (items) { return ({ name: category.subTitle, items: items }); }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["catchError"])(_this.handleError));
        });
        return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_forkJoin__["forkJoin"])(requests);
    };
    DataService.prototype.getEndPoint = function (subTitle) {
        var category = this.categoryEndpoints
            .find(function (ce) { return ce.subTitle === subTitle; });
        var url = category ? category.endpoint : "Wrong SubTitle (" + subTitle + ") Provided for Endpoint.";
        return url;
    };
    DataService.prototype.getItems = function (subTitle) {
        var url = this.getEndPoint(subTitle);
        return this.http.get("" + url)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (items) { return ({ subTitle: subTitle, items: items }); }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["catchError"])(this.handleError));
    };
    DataService.prototype.addItem = function (subTitle, item) {
        var _this = this;
        var url = this.getEndPoint(subTitle);
        return this.http.post(url, item).pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["catchError"])(this.handleError), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (response) {
            console.log('Item added successfully:', response);
            _this.dataChangeSubject.next(true);
            return { subTitle: subTitle, items: response };
        }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["catchError"])(function (error) {
            console.error('Failed to add item:', error);
            _this.dataChangeSubject.next(false);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error);
        }));
    };
    DataService.prototype.removeItem = function (endpoint, id) {
        var url = this.getEndPoint(endpoint);
        return this.http.delete(url + "/" + id)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["catchError"])(function (error) {
            console.error('Failed to remove item:', error);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(new Error('Failed to remove item'));
        }));
    };
    DataService.prototype.editItem = function (subTitle, item) {
        var _this = this;
        var url = this.getEndPoint(subTitle);
        return this.http.put(url + "/" + item._id, item).pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["catchError"])(this.handleError), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (response) {
            console.log('Item edited successfully:', response);
            _this.dataChangeSubject.next(true);
            return { subTitle: subTitle, items: response };
        }));
    };
    DataService.prototype.sendEmail = function (email) {
        var url = this.getEndPoint('email');
        return this.http.post(url, email)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["catchError"])(this.handleError), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (response) {
            console.log('Email sent successfully:', response);
            return response;
        }));
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

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_input_dialog_service_input_dialog_service__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(159);
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
            { subTitle: "My Catches", items: [] },
            { subTitle: "Favorite Fishing Spots", items: [] },
            { subTitle: "My Lures", items: [] },
            { subTitle: "Bait History", items: [] }
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
    ItemList.prototype.removeItem = function (subTitle, id) {
        var _this = this;
        if (!id || !subTitle) {
            console.error('Error: Item ID and subTitle parameters are required');
            return;
        }
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
            duration: 3000
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
            selector: 'components-itemList',template:/*ion-inline-start:"/Users/user/Desktop/fishable/src/components/itemList/itemList.html"*/'<ion-content padding scrollbar-y>\n\n  <ng-container *ngFor="let category of categories">\n    <ion-list-header>\n      <div style="height: 60px; display: flex; align-items: flex-start; justify-content: space-evenly;">\n        <div style="height: 60px; width: 75%; border: 0px solid #000;">\n          <div style="margin-top: 20px;">\n            {{ category.subTitle }}\n          </div>\n        </div>\n        <div style="height: 60px; width: 25%; border: 0px solid #000;">\n          <ion-fab>\n            <button (click)="addItem(category.subTitle)" ion-fab mini>\n              <ion-icon name="add"></ion-icon>\n            </button>\n          </ion-fab>\n        </div>\n      </div>\n    </ion-list-header>\n\n    <h3 class="no-item" text-center *ngIf="category.items.length === 0">\n      No items available in the list.\n    </h3>\n\n    <ion-list *ngIf="category.items.length > 0">\n\n      <ion-item-sliding *ngFor="let item of category.items; let i = index">\n        <ion-item>\n          <upload-image></upload-image>\n          <h2>Name: {{item.name}}</h2>\n          <ion-img *ngIf="item.image" [src]="\'data:image/jpeg;base64,\' + item.image" alt="Lure Image"></ion-img>\n          <p>Price: {{item.price}}</p>\n          <p>Desc: {{item.description}}</p>\n\n        </ion-item>\n\n        <ion-item-options>\n          <button (click)="editItem(category.subTitle, item)" ion-button color="primary" icon-start>\n            <ion-icon name="create"></ion-icon>\n            Edit\n          </button>\n\n          <button (click)="shareItem(category.subTitle, item.id)" ion-button color="primary" icon-start>\n            <ion-icon name="share"></ion-icon>\n            Share\n          </button>\n\n          <button (click)="removeItem(category.subTitle, item.id)" ion-button color="secondary" icon-start>\n            <ion-icon name="trash"></ion-icon>\n            Done\n          </button>\n        </ion-item-options>\n\n      </ion-item-sliding>\n\n    </ion-list>\n\n  </ng-container>\n\n</ion-content>\n'/*ion-inline-end:"/Users/user/Desktop/fishable/src/components/itemList/itemList.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3__providers_input_dialog_service_input_dialog_service__["a" /* InputDialogServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]])
    ], ItemList);
    return ItemList;
}());

//# sourceMappingURL=itemList.js.map

/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return uploadImage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_service_api_service__ = __webpack_require__(352);
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






var uploadImage = /** @class */ (function () {
    function uploadImage(platform, statusBar, splashScreen, camera, apiService) {
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
    uploadImage.prototype.openCamera = function () {
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
    uploadImage.prototype.openGallery = function () {
        var _this = this;
        this.camera.getPicture(this.galleryOptions).then(function (imgData) {
            console.log('image data =>  ', imgData);
            _this.base64Img = 'data:image/jpeg;base64,' + imgData;
            _this.userImg = _this.base64Img;
        }, function (err) {
            console.log(err);
        });
    };
    uploadImage.prototype.uploadImageToServer = function (itemId) {
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
    uploadImage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'upload-image',template:/*ion-inline-start:"/Users/user/Desktop/fishable/src/components/uploadImage/uploadImage.html"*/'\n<!-- <ion-fab bottom left>\n  <button (click)="openCamera()" ion-fab mini>\n    <ion-icon name="camera-outline"></ion-icon>\n  </button>\n</ion-fab>\n\n<ion-fab bottom right>\n  <button (click)="openGallery()" ion-fab mini>\n    <ion-icon name="image-outline"></ion-icon>\n  </button>\n</ion-fab> -->\n\n<img class="user-profile-img" src="{{userImg}}" alt="">\n'/*ion-inline-end:"/Users/user/Desktop/fishable/src/components/uploadImage/uploadImage.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_5__providers_api_service_api_service__["a" /* ApiService */]])
    ], uploadImage);
    return uploadImage;
}());

//# sourceMappingURL=uploadImage.js.map

/***/ }),

/***/ 689:
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

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(353);
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

/***/ 691:
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

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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

},[362]);
//# sourceMappingURL=main.js.map