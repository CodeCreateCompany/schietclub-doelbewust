"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var NavigationBarComponent = (function () {
    function NavigationBarComponent() {
    }
    NavigationBarComponent = __decorate([
        core_1.Component({
            selector: 'navigation-bar',
            template: "\n        <nav class=\"navbar navbar-default\" role=\"navigation\">\n            <div class=\"container-fluid\">\n              <!-- Brand and toggle get grouped for better mobile display -->\n              <div class=\"navbar-header\">\n\n                <!-- Navbar dropdown button for mobile screens.-->\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#nav-collapse\" aria-expanded=\"false\">\n                  <span class=\"sr-only\">Toggle navigation</span>\n                  <span class=\"icon-bar\"></span>\n                  <span class=\"icon-bar\"></span>\n                  <span class=\"icon-bar\"></span>\n                </button>\n                <a href=\"#\" class=\"navbar-brand\">\n                  <img alt=\"Doelbewust\" src=\"assets/images/logo-klein.png\" class=\"img-responsive\"/>\n                </a>\n                <p href=\"#\" class=\"hidden-sm hidden-md hidden-lg\">Doelbewust</p>\n\n              </div>\n\n              <!-- Collect the nav links, forms, and other content for toggling -->\n              <div class=\"collapse navbar-collapse\" id=\"nav-collapse\">\n                <ul class=\"nav navbar-nav\">\n                  <li><a href=\"/\">Home</a></li>\n                  <li><a href=\"/info\">Info</a></li>\n                  <li><a href=\"contact.php\">Contact</a></li>\n                  <li><a href=\"historie.php\">Historie</a></li>\n                  <li><a href=\"evenementen.php\">Evenementen</a></li>\n                  <li><a href=\"uitslagen.php\">Uitslagen</a></li>\n                </ul>\n              </div><!-- /.navbar-collapse -->\n            </div><!-- /.container-fluid -->\n        </nav>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], NavigationBarComponent);
    return NavigationBarComponent;
}());
exports.NavigationBarComponent = NavigationBarComponent;
//# sourceMappingURL=navigation-bar.component.js.map