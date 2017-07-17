webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div> \n<header>\n  <div id=\"nav-icon3\" (click)=\"toogleOpen()\" [(className)]=\"myClass\">\n    <span></span>\n    <span></span>\n    <span></span>\n    <span></span>\n  </div>\n  <h1>King Tutor App</h1>\n</header>\n<div [@navTrigger]=\"navState\" class=\"nav-container\">\n  <app-nav ></app-nav>\n</div>\n<div class=\"body-container\">\n  <router-outlet></router-outlet>\n</div>\n\n\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.navState = "hidden";
        this.myClass = 'close';
    }
    AppComponent.prototype.toogleOpen = function () {
        this.navState = (this.navState === 'show' ? 'hidden' : 'show');
        this.myClass = (this.myClass === 'open' ? 'close' : 'open');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.scss")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* trigger */])('navTrigger', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* state */])('hidden', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* style */])({
                    marginLeft: '-300px'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* state */])('show', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* style */])({
                    marginLeft: '0'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* transition */])('show => hidden', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* animate */])('500ms')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* transition */])('hidden => show', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* animate */])('500ms'))
            ])
        ]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_nav_nav_component__ = __webpack_require__("./src/app/components/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard_component__ = __webpack_require__("./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_math_math_component__ = __webpack_require__("./src/app/pages/math/math.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_math_manthIndex_mathIndex_component__ = __webpack_require__("./src/app/pages/math/manthIndex/mathIndex.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_math_addition_addition_component__ = __webpack_require__("./src/app/pages/math/addition/addition.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_math_subtraction_subtraction_component__ = __webpack_require__("./src/app/pages/math/subtraction/subtraction.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_nav_nav_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_7__pages_math_math_component__["a" /* MathComponent */],
            __WEBPACK_IMPORTED_MODULE_8__pages_math_manthIndex_mathIndex_component__["a" /* MathIndexComponent */],
            __WEBPACK_IMPORTED_MODULE_9__pages_math_addition_addition_component__["a" /* AdditionComponent */],
            __WEBPACK_IMPORTED_MODULE_10__pages_math_subtraction_subtraction_component__["a" /* SubtractionComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* routing */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_dashboard_dashboard_component__ = __webpack_require__("./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_math_math_component__ = __webpack_require__("./src/app/pages/math/math.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_math_manthIndex_mathIndex_component__ = __webpack_require__("./src/app/pages/math/manthIndex/mathIndex.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_math_addition_addition_component__ = __webpack_require__("./src/app/pages/math/addition/addition.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_math_subtraction_subtraction_component__ = __webpack_require__("./src/app/pages/math/subtraction/subtraction.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });






var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__pages_dashboard_dashboard_component__["a" /* DashboardComponent */]
    },
    {
        path: 'math',
        component: __WEBPACK_IMPORTED_MODULE_2__pages_math_math_component__["a" /* MathComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_3__pages_math_manthIndex_mathIndex_component__["a" /* MathIndexComponent */]
            },
            {
                path: 'addition',
                component: __WEBPACK_IMPORTED_MODULE_4__pages_math_addition_addition_component__["a" /* AdditionComponent */]
            },
            {
                path: 'subtraction',
                component: __WEBPACK_IMPORTED_MODULE_5__pages_math_subtraction_subtraction_component__["a" /* SubtractionComponent */]
            }
        ]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "./src/app/components/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n    <ul>\n        <li [routerLink]=\"['math']\">Math</li>\n        <li [routerLink]=\"['english']\">English</li>\n    </ul>\n</nav>"

/***/ }),

/***/ "./src/app/components/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () { };
    return NavComponent;
}());
NavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-nav',
        template: __webpack_require__("./src/app/components/nav/nav.component.html"),
    }),
    __metadata("design:paramtypes", [])
], NavComponent);

//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard\">\n    <h1>Results</h1>\n\n    <table>\n        <thead>\n            <tr>\n                <td>Subject</td>\n                <td>Date</td>\n                <td>Score</td>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n                <td>Math</td>\n                <td>January 1</td>\n                <td>10/10</td>\n            </tr>        \n        </tbody>\n    </table>\n</div>"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () { };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        template: __webpack_require__("./src/app/pages/dashboard/dashboard.component.html")
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "./src/app/pages/math/addition/addition.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"inner-container addition\">\n<h1>Addition</h1>\n    <div *ngIf=\"!submitted\"> \n    <div class=\"item\" *ngFor=\"let item of items\">\n        <div *ngIf=\"item.number+1 == active\">\n            <span class=\"item-number\">{{item.number+1}}.)</span>   \n            <div class=\"problem\">\n                <div class=\"carry clearfix\">\n                    <span>&nbsp;</span>\n                    <span (click)=\"carry1()\">{{carry_1}}</span>\n                    <span (click)=\"carry2()\">{{carry_2}}</span>                 \n                </div>\n                <span class=\"topItem\">{{item.addtop}}</span>\n                <span class=\"operator\">+</span>\n                <span class=\"botItem\">{{item.addbot}}</span>\n            </div>\n                \n        </div>\n    </div>\n    <div *ngIf=\"!readyToSubmit\">\n    <input type=\"text\" #answer class=\"math-answer\" > \n    <button class=\"next\" (click)=\"nextItem(answer.value,active-1)\" >\n        Next\n    </button>\n    </div>\n    <button class=\"next\" (click)=\"submit()\" *ngIf=\"readyToSubmit\">\n        Submit\n    </button>\n    </div>\n\n    <div *ngIf=\"submitted\">\n        <h2>Result</h2>\n        <div class=\"item\" *ngFor=\"let result of results\">\n            <div>\n                <span class=\"item-number\">{{result.number+1}}.)\n                    <span *ngIf=\"result.addtop + result.addbot != result.answer\" class=\"wrong\">Wrong. The correct answer is <span class=\"correct\">{{result.addtop + result.addbot}}</span></span>\n                    <span *ngIf=\"result.addtop + result.addbot == result.answer\" class=\"correct\">Correct</span>    \n                </span>   \n                <div class=\"problem\">\n                    <span class=\"topItem\">{{result.addtop}}</span>\n                    <span class=\"operator\">+</span>\n                    <span class=\"botItem\">{{result.addbot}}</span>                \n                </div>\n                <span class=\"math-answer\">{{result.answer}}</span>       \n            </div>    \n        </div>\n        <button class=\"try-again\" [routerLink]=\"['/math']\"> Try again</button>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/pages/math/addition/addition.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdditionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdditionComponent = (function () {
    function AdditionComponent(_element) {
        this._element = _element;
        this.items = [];
        this.active = 1;
        this.readyToSubmit = false;
        this.submitted = false;
        this.results = [];
        this.carry = [];
        this.carry_1 = "+";
        this.carry_2 = "+";
    }
    AdditionComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < 20; i++) {
            this.items.push({
                "number": i,
                "addtop": (Math.floor((Math.random() * (1000 - 0))) + 0 + 1),
                "addbot": (Math.floor((Math.random() * (1000 - 0))) + 0 + 1),
                "answer": null
            });
        }
        this.carryInit();
    };
    AdditionComponent.prototype.nextItem = function (answer, currentItem) {
        var number = this.items[currentItem]['number'];
        var addtop = this.items[currentItem]['addtop'];
        var addbot = this.items[currentItem]['addbot'];
        var textBox = this._element.nativeElement.querySelector('.math-answer');
        var answer = answer;
        this.carry_1 = "+";
        this.carry_2 = "+";
        if (this.active <= 20) {
            this.items[currentItem] = {
                "number": number,
                "addtop": addtop,
                "addbot": addbot,
                "answer": +answer
            };
            if (this.active == 20) {
                this.readyToSubmit = true;
            }
            this.active = this.active + 1;
            textBox.value = "";
        }
        this.carryInit();
    };
    AdditionComponent.prototype.submit = function () {
        this.submitted = true;
        this.results = this.items;
    };
    AdditionComponent.prototype.carryInit = function () {
        // var addTop = this.items[this.active-1]['addtop'].toString();
        // var addBot = this.items[this.active-1]['addbot'].toString();
        // // if() {
        // // }
    };
    AdditionComponent.prototype.carry1 = function () {
        this.carry_1 = (this.carry_1 === '1' ? '+' : '1');
    };
    AdditionComponent.prototype.carry2 = function () {
        this.carry_2 = (this.carry_2 === '1' ? '+' : '1');
    };
    return AdditionComponent;
}());
AdditionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        template: __webpack_require__("./src/app/pages/math/addition/addition.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */]) === "function" && _a || Object])
], AdditionComponent);

var _a;
//# sourceMappingURL=addition.component.js.map

/***/ }),

/***/ "./src/app/pages/math/manthIndex/MathIndex.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"math-container\">\n    <div [routerLink]=\"['addition']\">\n        Addition\n    </div>\n\n    <div [routerLink]=\"['subtraction']\">\n        Subtraction\n    </div>\n\n    <div [routerLink]=\"['division']\">\n        Division\n    </div>\n\n    <div [routerLink]=\"['mulitiplication']\">\n        Multiplication\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/math/manthIndex/mathIndex.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MathIndexComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MathIndexComponent = (function () {
    function MathIndexComponent() {
    }
    MathIndexComponent.prototype.ngOnInit = function () { };
    return MathIndexComponent;
}());
MathIndexComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'selector',
        template: __webpack_require__("./src/app/pages/math/manthIndex/MathIndex.component.html")
    }),
    __metadata("design:paramtypes", [])
], MathIndexComponent);

//# sourceMappingURL=mathIndex.component.js.map

/***/ }),

/***/ "./src/app/pages/math/math.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/pages/math/math.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MathComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MathComponent = (function () {
    function MathComponent() {
    }
    MathComponent.prototype.ngOnInit = function () { };
    return MathComponent;
}());
MathComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'selector',
        template: __webpack_require__("./src/app/pages/math/math.component.html")
    }),
    __metadata("design:paramtypes", [])
], MathComponent);

//# sourceMappingURL=math.component.js.map

/***/ }),

/***/ "./src/app/pages/math/subtraction/subtraction.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Subtraction</h1>"

/***/ }),

/***/ "./src/app/pages/math/subtraction/subtraction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubtractionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SubtractionComponent = (function () {
    function SubtractionComponent() {
    }
    SubtractionComponent.prototype.ngOnInit = function () { };
    return SubtractionComponent;
}());
SubtractionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        template: __webpack_require__("./src/app/pages/math/subtraction/subtraction.component.html")
    }),
    __metadata("design:paramtypes", [])
], SubtractionComponent);

//# sourceMappingURL=subtraction.component.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map