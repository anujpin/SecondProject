(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser'), require('@angular/router'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@first-project/second-project', ['exports', '@angular/platform-browser', '@angular/router', '@angular/core'], factory) :
    (factory((global['first-project'] = global['first-project'] || {}, global['first-project']['second-project'] = {}),global.ng.platformBrowser,global.ng.router,global.ng.core));
}(this, (function (exports,platformBrowser,router,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var routes = [];
    var AppRoutingModule = /** @class */ (function () {
        function AppRoutingModule() {
        }
        AppRoutingModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [router.RouterModule.forRoot(routes)],
                        exports: [router.RouterModule]
                    },] }
        ];
        return AppRoutingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AppComponent = /** @class */ (function () {
        function AppComponent() {
            this.title = 'SecondProject';
        }
        AppComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-root',
                        template: "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n\n<router-outlet></router-outlet>\n",
                        styles: [""]
                    }] }
        ];
        return AppComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RegistrationComponent = /** @class */ (function () {
        function RegistrationComponent() {
        }
        /**
         * @return {?}
         */
        RegistrationComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        RegistrationComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-registration',
                        template: "<p>\n  registration works!\n</p>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        RegistrationComponent.ctorParameters = function () { return []; };
        return RegistrationComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AppModule = /** @class */ (function () {
        function AppModule() {
        }
        AppModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            AppComponent,
                            RegistrationComponent
                        ],
                        imports: [
                            platformBrowser.BrowserModule,
                            AppRoutingModule
                        ],
                        providers: [],
                        bootstrap: [AppComponent]
                    },] }
        ];
        return AppModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.AppModule = AppModule;
    exports.RegistrationComponent = RegistrationComponent;
    exports.ɵb = AppRoutingModule;
    exports.ɵa = AppComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=first-project-second-project.umd.js.map