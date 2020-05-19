(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li><a routerLink=\"Home\">Home</a></li>\n  <li><a routerLink=\"Products\">Products</a></li>\n</ul>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/carts/carts.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/carts/carts.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"col-sd-12 col-sm-12 col-md-4\"> </div>\n\n  <div class=\"container-fluid\">\n    <div class='col-xs-12 col-sm-12 col-md-12'>\n      <div class=\"container\">\n        <!-- Default panel contents -->\n        <div class=\"col-md-12\">\n          <div class=\"col-md-6\" style=\"padding-left:0;\">\n            <h4>Orders</h4>\n          </div>\n\n        </div>\n        <div class='panel-body'>\n          <table class=\"table table-bordered table-condensed hover\" style=\"text-align:center\">\n            <thead>\n              <th>Item ID</th>\n              <th>Item</th>\n              <th>Product Image</th>\n              <th>Price</th>\n              <th>Qty Ordered</th>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let cart of cartsItemsList\">\n                <td>{{cart.id}}</td>\n                <td>{{cart.Name}}</td>\n                <td>\n                  <img [src]='cart.url' style=\"width:75px;height:40px\" />\n                </td>\n                <td>{{cart.price}}</td>\n                <td>{{cart.orderedQty}}</td>\n              </tr>\n              <tr *ngIf=\"!cartsItemsList|| cartsItemsList.length==0\">\n                <td colspan=\"7\">No Items in the Cart</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <div class='col-xs-6 col-sm-6 col-md-6'>\n\n      </div>\n      <div class='col-xs-6 col-sm-6 col-md-6'>\n        <button id=\"btnbuy\" class=\"btn btn-success\" (click)=\"checkOut(cart)\">CheckOut</button>\n      </div>\n    </div>\n\n  </div>\n  \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/checkout/checkout.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/checkout/checkout.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"col-md-4\"> </div>\n  <div class=\"col-md-3\" style=\"border:lightcoral solid 2px\">\n    <h3>\n      Your order\n      <span *ngIf=\"result!=0\"> {{result}} </span>\n      <span *ngIf=\"result2!=0\">{{result2}} </span>has been placed successfully.\n    </h3>\n  </div>\n  <div class=\"col-md-3\"> </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact/contact.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"top:139px;\">\n  <div class=\"col-md-4\">\n    <form #contactform=\"ngForm\" (ngSubmit)=\"onSubmit(contactform.value)\" novalidate>\n      <label for=\"fname\">FullName</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter Fullname\" #Reffname=\"ngModel\" required [(ngModel)]=\"fname\" name=\"fname\">\n      <div *ngIf=\"Reffname.errors && (Reffname.dirty || Reffname.touched)\" class=\"alert alert-danger\">\n        <div [hidden]=\"!Reffname.errors.required\">\n          please enter Fullname\n        </div>\n      </div>\n      <label for=\"email\">EmailID</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter emailID\" #Refemail=\"ngModel\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\"\n        #Refemail=\"ngModel\" required [(ngModel)]=\"username\" name=\"username\">\n      <div *ngIf=\"Refemail.errors && (Refemail.dirty || Refemail.touched)\" class=\"alert alert-danger\">\n        <div [hidden]=\"!Refemail.errors.required\">\n          please enter EmailID\n        </div>\n        <div [hidden]=\"!Refemail.errors.pattern\">\n          please enter valid emailid\n        </div>\n      </div>\n      <label for=\"fname\">Mobile Number</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter Mobilenumber\" #Refmobile=\"ngModel\" required [(ngModel)]=\"mobile\"\n        name=\"mobile\" pattern=\"^[789]\\d{9}$\">\n      <div *ngIf=\"Refmobile.errors && (Refmobile.dirty || Refmobile.touched)\" class=\"alert alert-danger\">\n        <div [hidden]=\"!Refmobile.errors.required\">\n          please enter Mobile Number\n        </div>\n        <div [hidden]=\"!Refmobile.errors.pattern\">\n          please enter valid Mobilenumber\n        </div>\n      </div>\n      <label for=\"message\">Enter message</label>\n      <textarea class=\"form-control\" placeholder=\"enter message\" #Refmessage=\"ngModel\" rows=\"4\" cols=\"50\" required [(ngModel)]=\"message\"\n        name=\"message\">\n      <div *ngIf=\"Refmessage.errors && (Refmessage.dirty || Refmessage.touched)\" class=\"alert alert-danger\">\n          <div [hidden]=\"!Refmessage.errors.required\">\n            please enter Message\n          </div>\n      </div>      \n  </textarea>\n      <br>\n      <div class=\"form-group\">\n        <button [disabled]=\"!contactform.form.valid\" type=\"submit\" class=\"btn btn-success\">Submit</button>\n\n        <!-- <a routerLink=\"/Forgotpwd\">Forgot password ?</a> -->\n\n      </div>\n    </form>\n\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/forgot-pwd/forgot-pwd.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forgot-pwd/forgot-pwd.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-2 col-sm-3\"></div>\n<div class=\"col-md-5 col-sm-3 panel panel-body\">\n  <h2>Forget password</h2>\n\n  <form #forgetform=\"ngForm\" (ngSubmit)=\"onSubmit(forgetform.value)\" novalidate>\n    <div class=\"form-group\">\n      <label for=\"email\">Enter emailID</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"enter emailid\" name=\"emailid\" placeholder=\"Enter emailID\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\"\n        #Refemail=\"ngModel\" required [(ngModel)]=\"mailID\">\n      <div *ngIf=\"Refemail.errors && (Refemail.dirty || Refemail.touched)\" class=\"alert alert-danger\">\n        <div [hidden]=\"!Refemail.errors.required\">\n          please enter EmailID\n        </div>\n        <div [hidden]=\"!Refemail.errors.pattern\">\n          please enter valid emailid\n        </div>\n      </div>\n    </div>\n    <div>\n      <button [disabled]=\"!forgetform.form.valid\" type=\"submit\" class=\"btn btn-primary\">Submit</button>\n    </div>\n  </form>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" routerLink=\"/Home\">\n        <img src=\"./assets/Images/logo.png\" width=\"100px;\">\n      </a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li>\n        <a routerLink=\"/Home\">\n          <i class=\"glyphicon glyphicon-home\"></i>&nbsp;Home</a>\n      </li>\n      <li>\n        <a routerLink=\"Contact\">\n          <i class=\"glyphicon glyphicon-send\"></i>&nbsp;Contact us</a>\n      </li>\n      <li>\n        <a routerLink=\"Orders\">\n          <i class=\"glyphicon glyphicon-lock\"></i>&nbsp;Orders</a>\n      </li>\n      <li *ngIf=\"showUsers\">\n        <a routerLink=\"UsersList\">\n          <i class=\"glyphicon glyphicon-list-alt\"></i>&nbsp; userList</a>\n      </li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li>\n        <a>\n          <i class=\"glyphicon glyphicon-user\"></i>&nbsp;Welcome&nbsp;{{user}}</a>\n      </li>\n      <li>\n        <a routerLink=\"./Carts\">\n          &nbsp;\n          <span>{{selectedQty}}</span>Cart\n          <i class=\"glyphicon glyphicon-shopping-cart\"></i>\n        </a>\n      </li>\n      <li>\n        <a>&nbsp;\n          <a (click)='logout()'>Logout</a>\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n\n<section class=\"conatiner\">\n  <router-outlet></router-outlet>\n</section>\n\n<!-- <div class=\"footer\" style=\"bottom:30px\">\n  <h3 style=\"text-align: center\">Copy right @kvb</h3>\n</div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/item-details/item-details.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/item-details/item-details.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\" style=\"padding:0px;margin:0px\">\n    <div class=\"col-md-4\">\n      <table>\n        <tr>\n          <th>Product</th>\n        </tr>\n        <tr>\n          <td>\n            <img [src]='items?.url' style=\"width:350px;padding:4px;border:1px solid papayawhip;border-radius: 10px\">\n          </td>\n        </tr>\n        <br/>\n\n      </table>\n      <div class=\"col-xs-12 col-sm-8 col-md-12 form-group\">\n        <div class=\"col-xs-12 col-sm-8 col-md-4 form-group\">\n          <!-- <button id=\"btncart\" class=\"btn btn-success\" (click)=\"addtocart()\">add to cart</button>&nbsp; -->\n          <button id=\"btncart\" class=\"btn btn-success\" (click)=\"addtocart()\">add to cart</button>&nbsp;\n        </div>\n        <div class=\"col-xs-12 col-sm-8 col-md-4 form-group\">\n          <button id=\"btnbuy\" class=\"btn btn-success\" (click)=\"BuyNow(items)\">BuyNow</button>\n          <!-- routerLink='../../checkout'-->\n\n        </div>\n        <div class=\"col-xs-12 col-sm-8 col-md-4 form-group\">\n\n          <select [(ngModel)]=\"selectedQty\" class=\"form-control\">\n            <option value=\"1\">1</option>\n            <option value=\"2\">2</option>\n            <option value=\"3\">3</option>\n            <option value=\"4\">4</option>\n            <option value=\"5\">5</option>\n          </select>\n\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-8\">\n      <h4>Product details</h4>\n      <ul style=\"text-align:justify\">\n        <li> ID :\n          <span style=\"color:blue;font-weight:bold\">{{items.id}}</span>\n        </li>\n        <br>\n        <li> NAME :\n          <span style=\"color:blue;font-weight:bold\">{{items.Name}}</span>\n        </li>\n        <br>\n        <li> DESCRIPTION :\n          <span style=\"color:blue;font-weight:bold\">{{items.longDesc}}</span>\n        </li>\n        <br>\n        <li> PRICE :\n          <span style=\"color:blue;font-weight:bold\">{{items.price | currency:'USD':true}}</span>\n        </li>\n      </ul>\n\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-2 col-sm-3\"></div>\n<div class=\"col-md-6 col-sm-3 container panel panel-body\">\n  <h2>Login Page</h2>\n\n  <form #loginform=\"ngForm\" (ngSubmit)=\"onSubmit(loginform.value)\" novalidate>\n\n    <div class=\"form-group\">\n      <label for=\"name\">EmailID</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter emailID\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" #Refemail=\"ngModel\"\n        required [(ngModel)]=\"username\" name=\"username\">\n      <div *ngIf=\"Refemail.errors && (Refemail.dirty || Refemail.touched)\" class=\"alert alert-danger\">\n        <div [hidden]=\"!Refemail.errors.required\">\n          please enter EmailID\n        </div>\n        <div [hidden]=\"!Refemail.errors.pattern\">\n          please enter valid emailid\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"Password\">Password</label>\n      <input type=\"password\" class=\"form-control\" placeholder=\"Enter password\" name=\"password\" #Refpwd=\"ngModel\" [(ngModel)]=\"password\"\n        required>\n      <div *ngIf=\"Refpwd.errors && (Refpwd.dirty || Refpwd.touched)\" class=\"alert alert-danger\">\n        <div [hidden]=\"!Refpwd.errors.required\">\n          please enter password\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <button [disabled]=\"!loginform.form.valid\" type=\"submit\" class=\"btn btn-success\">Login</button>\n      <a routerLink=\"/ForgotPwd\">Forgotpassword ?</a>\n    </div>\n    \n    <div>\n      <a routerLink=\"/Registration\">Click To Registration ?</a>\n    </div>\n\n    {{userlist | json}}\n\n  </form>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/order/order.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/order/order.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"container-fluid col-md-4 col-xs-12 col-sm-12\"> </div>\n  <div class=\"container-fluid\">\n    <table class=\"table table-bordered table-condensed hover\" style=\"text-align:center\">\n      <thead>\n        <th>Order No</th>\n        <th>Name</th>\n        <th>Product Image</th>\n        <th>Price</th>\n        <th>Ordered Qty</th>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let order of orderItems;let i=index\">\n          <td>{{order.orderId}}</td>\n          <td>{{order.Name}}</td>\n          <td><img [src]='order.url' style=\"width:75px;height:40px\" /></td>\n          <td>{{order.price | currency:'USD':true}}</td>\n          <td>{{order.orderedQty}}</td>\n        </tr>\n        <tr *ngIf=\"!orderItems|| orderItems.length==0\">\n          <td colspan=\" 7 \">no record to display</td>\n        </tr>\n      </tbody>\n    </table>\n\n  </div>\n  <div class=\"container-fluid col-md-4 col-xs-12 col-sm-12 \"> </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/products/products.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/products.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class='col-xs-12 col-sm-12 col-md-12'>\n    <div class=\"container\">\n      <!-- Default panel contents -->\n      <div class=\"col-md-12\">\n        <div class=\"col-md-6\" style=\"padding-left:0;\">\n          <h4>Product List</h4>\n        </div>\n        <div class=\"col-md-4 \" style=\"padding:0px\">\n          <input type=\"text\" class=\"form-control pull-left\" id=\"inputName\" [(ngModel)]=\"inputName\" placeholder=\"Search\" name=\"search\">\n        </div>\n        <div class=\"col-md-2\" style=\"padding-right:0\">\n          <button type=\"submit\" class=\"btn btn-success form-control\" (click)=\"FilterByName()\" value=\"Apply\">Search</button>\n        </div>\n      </div>\n      <div class='panel-body'>\n        <table class=\"table table-bordered table-condensed hover\" style=\"text-align:center\">\n          <thead>\n            <th>Item ID</th>\n            <th>Description</th>\n            <th>Image</th>\n            <th>Price</th>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of filteredItems\">\n              <td>{{item.id}}</td>\n              <td>\n                <a (click)=\"onItemClick(item)\">{{item.Name}}</a>\n              </td>\n              <td>\n                <img [src]='item.url' style=\"width:75px;height:60px\" />\n              </td>\n              <td>{{item.price}}</td>\n            </tr>\n            <tr *ngIf=\"!items||items.length==0\">\n              <td colspan=\"3\">\n                No matching records\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/registration/registration.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/registration/registration.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-2 col-sm-3\"> </div>\n<div class=\"col-md-6 col-sm-3 container panel panel-body\">\n  <h2>User Registration</h2>\n\n  <form #userForm=\"ngForm\" (ngSubmit)=\"onSubmit(userForm.value)\" novalidate>\n    <div class=\"form-group\">\n      <label for=\"fullname\">FullName</label>\n\n      <input type=\"text\" class=\"form-control\" #Reffname=\"ngModel\" minlength=\"4\" name='fname' placeholder=\"Enter firstname\" required\n        [(ngModel)]=\"userlist.fname\">\n\n      <div *ngIf=\"Reffname.errors && (Reffname.dirty || Reffname.touched)\" class=\"alert alert-danger\">\n        <div [hidden]=\"!Reffname.errors.required\">\n          please enter fullname\n        </div>\n        <div [hidden]=\"!Reffname.errors.minlength\">\n          please enter atleast 4 number\n        </div>\n\n      </div>\n      <div class=\"form-group\">\n        <label for=\"Emailid\">Emailid</label>\n        <input type=\"text\" class=\"form-control\" #Refemail=\"ngModel\" name=\"mailid\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\"\n          placeholder=\"Enter mailid\" required [(ngModel)]=\"userlist.mailid\">\n        <div *ngIf=\"Refemail.errors && (Refemail.dirty || Refemail.touched)\" class=\"alert alert-danger\">\n          <div [hidden]=\"!Refemail.errors.required\">\n            please enter emailid\n          </div>\n          <div [hidden]=\"!Refemail.errors.pattern\">\n            please enter valid Emailid\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">password</label>\n      <input type=\"password\" class=\"form-control\" #Refpassword=\"ngModel\" minlength=\"4\" name=\"password\" placeholder=\"Enter password\"\n        required [(ngModel)]=\"userlist.password\">\n      <div *ngIf=\"Refpassword.errors && (Refpassword.dirty || Refpassword.touched)\" class=\"alert alert-danger\">\n        <div [hidden]=\"!Refpassword.errors.required\">\n          please enter password\n        </div>\n        <div [hidden]=\"!Refpassword.errors.minlength\">\n          please enter atleast 4 characters\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"Gender\">Gender</label>\n      <input type=\"radio\" name=\"gender\" value=\"Male\" [(ngModel)]=\"userlist.gender\">Male\n      <input type=\"radio\" name=\"gender\" value=\"Female\" [(ngModel)]=\"userlist.gender\">Female\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"city\">city</label>\n      <input type=\"text\" class=\"form-control\" #Refcity=\"ngModel\" name=\"city\" placeholder=\"Enter city\" required [(ngModel)]=\"userlist.city\">\n      <div *ngIf=\"Refcity.errors && (Refcity.dirty || Refcity.touched)\" class=\"alert alert-danger\">\n        <div [hidden]=\"!Refcity.errors.required\">\n          please enter city name\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"mobile\">mobile</label>\n      <input type=\"text\" class=\"form-control\" #Refmobile=\"ngModel\" name=\"mobile\" pattern=\"^(?:(?:\\+|0{0,2})91(\\s*[\\-]\\s*)?|[0]?)?[789]\\d{9}$\"\n        placeholder=\"Enter mobilenumber\" required [(ngModel)]=\"userlist.mobile\">\n      <div *ngIf=\"Refmobile.errors && (Refmobile.dirty || Refmobile.touched)\" class=\"alert alert-danger\">\n        <div [hidden]=\"!Refmobile.errors.required\">\n          please enter mobilenumber\n        </div>\n        <div [hidden]=\"!Refmobile.errors.pattern\">\n          please enter valid mobile number\n        </div>\n\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"pincode\">pincode</label>\n      <input type=\"text\" class=\"form-control\" #Refpin=\"ngModel\" pattern=\"^[1-9][0-9]{5}$\" name=\"pincode\" placeholder=\"Enter pincode\"\n        required [(ngModel)]=\"userlist.pincode\">\n      <div *ngIf=\"Refpin.errors && (Refpin.dirty || Refpin.touched)\" class=\"alert alert-danger\">\n        <div [hidden]=\"!Refpin.errors.required\">\n          please enter pincode\n        </div>\n        <div [hidden]=\"!Refpin.errors.pattern\">\n          please enter 5 digits valid pincode\n        </div>\n\n      </div>\n    </div>\n    <div>\n\n    </div>\n    <div class=\"form-group  col-md-6 col-sm-6\">\n      <button [disabled]=\"!userForm.form.valid\" type=\"submit\" class=\"btn btn-primary\">Registration</button>\n\n\n    </div>\n    <div class=\"form-group col-md-6 col-sm-6\">\n      <a routerLink=\"/Login\">click to login ?</a>\n\n    </div>\n  </form>\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user-list/user-list.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user-list/user-list.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>hi welcome to UserLIst page</h1>\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'BuyCart';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./in-memory-data.service */ "./src/app/in-memory-data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _forgot_pwd_forgot_pwd_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forgot-pwd/forgot-pwd.component */ "./src/app/forgot-pwd/forgot-pwd.component.ts");
/* harmony import */ var _carts_carts_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./carts/carts.component */ "./src/app/carts/carts.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");
/* harmony import */ var _item_details_item_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./item-details/item-details.component */ "./src/app/item-details/item-details.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/user-list/user-list.component.ts");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared.service */ "./src/app/shared.service.ts");






















const approute = [
    { path: '', redirectTo: 'Login', pathMatch: 'full' },
    { path: 'Login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { path: 'Registration', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_10__["RegistrationComponent"] },
    { path: 'ForgotPwd', component: _forgot_pwd_forgot_pwd_component__WEBPACK_IMPORTED_MODULE_11__["ForgotPwdComponent"] },
    {
        path: 'Home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
        children: [
            { path: '', component: _products_products_component__WEBPACK_IMPORTED_MODULE_16__["ProductsComponent"] },
            { path: 'Contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"] },
            { path: 'Orders', component: _order_order_component__WEBPACK_IMPORTED_MODULE_17__["OrderComponent"] },
            { path: 'UsersList', component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_19__["UserListComponent"] },
            { path: 'Carts', component: _carts_carts_component__WEBPACK_IMPORTED_MODULE_12__["CartsComponent"] },
            { path: 'CheckOut', component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_13__["CheckoutComponent"] },
            { path: 'Products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_16__["ProductsComponent"] },
            { path: 'ItemDetails/:id', component: _item_details_item_details_component__WEBPACK_IMPORTED_MODULE_18__["ItemDetailsComponent"] }
        ]
    }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_10__["RegistrationComponent"], _forgot_pwd_forgot_pwd_component__WEBPACK_IMPORTED_MODULE_11__["ForgotPwdComponent"], _carts_carts_component__WEBPACK_IMPORTED_MODULE_12__["CartsComponent"],
            _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_13__["CheckoutComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_16__["ProductsComponent"], _order_order_component__WEBPACK_IMPORTED_MODULE_17__["OrderComponent"], _item_details_item_details_component__WEBPACK_IMPORTED_MODULE_18__["ItemDetailsComponent"],
            _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_19__["UserListComponent"]
        ],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(approute), _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_6__["InMemoryDataService"])],
        providers: [_login_login_service__WEBPACK_IMPORTED_MODULE_20__["LoginService"], _in_memory_data_service__WEBPACK_IMPORTED_MODULE_6__["InMemoryDataService"], _shared_service__WEBPACK_IMPORTED_MODULE_21__["SharedService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/carts/carts.component.css":
/*!*******************************************!*\
  !*** ./src/app/carts/carts.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnRzL2NhcnRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/carts/carts.component.ts":
/*!******************************************!*\
  !*** ./src/app/carts/carts.component.ts ***!
  \******************************************/
/*! exports provided: CartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartsComponent", function() { return CartsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");



let CartsComponent = class CartsComponent {
    constructor(sharedService) {
        this.sharedService = sharedService;
        this.cartsItemsList = [];
    }
    ngOnInit() {
        this.sharedService.getCarts()
            .subscribe(items => {
            this.cartsItemsList = items;
        });
    }
}; //class close
CartsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-carts',
        template: __webpack_require__(/*! raw-loader!./carts.component.html */ "./node_modules/raw-loader/index.js!./src/app/carts/carts.component.html"),
        styles: [__webpack_require__(/*! ./carts.component.css */ "./src/app/carts/carts.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
], CartsComponent);



/***/ }),

/***/ "./src/app/checkout/checkout.component.css":
/*!*************************************************!*\
  !*** ./src/app/checkout/checkout.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/checkout/checkout.component.ts":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CheckoutComponent = class CheckoutComponent {
    constructor() { }
    ngOnInit() { }
}; //class close
CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkout',
        template: __webpack_require__(/*! raw-loader!./checkout.component.html */ "./node_modules/raw-loader/index.js!./src/app/checkout/checkout.component.html"),
        styles: [__webpack_require__(/*! ./checkout.component.css */ "./src/app/checkout/checkout.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CheckoutComponent);



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ContactComponent = class ContactComponent {
    constructor(_route) {
        this._route = _route;
        this.contactuser = [];
    }
    ngOnInit() { }
    onSubmit(value) {
        console.log(value);
        alert("Your request has been sent!!!");
        this._route.navigate(["Home"]);
    }
}; //class close
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html"),
        styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ContactComponent);



/***/ }),

/***/ "./src/app/forgot-pwd/forgot-pwd.component.css":
/*!*****************************************************!*\
  !*** ./src/app/forgot-pwd/forgot-pwd.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC1wd2QvZm9yZ290LXB3ZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/forgot-pwd/forgot-pwd.component.ts":
/*!****************************************************!*\
  !*** ./src/app/forgot-pwd/forgot-pwd.component.ts ***!
  \****************************************************/
/*! exports provided: ForgotPwdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPwdComponent", function() { return ForgotPwdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _forgot_pwd_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot-pwd.service */ "./src/app/forgot-pwd/forgot-pwd.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ForgotPwdComponent = class ForgotPwdComponent {
    constructor(fgtService, _route) {
        this.fgtService = fgtService;
        this._route = _route;
    }
    ngOnInit() { }
    // Checking User exists in database or not
    isUsersExists() {
        if (this.userlist != null && this.userlist.length > 0) {
            let lstuser = this.userlist.filter(a => a.mailid == this.mailID);
            if (lstuser != null && lstuser.length > 0) {
                this._route.navigate(["Login"]);
            }
            else {
                alert("User Email doen't exist!!!");
            }
        }
        else {
            alert("User Email doen't exist!!!");
        }
    }
    onSubmit(value) {
        this.fgtService.searchUser(this.mailID)
            .subscribe(users => {
            this.userlist = users;
            console.log(this.userlist);
            this.isUsersExists();
        });
    }
}; //class close
ForgotPwdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-pwd',
        template: __webpack_require__(/*! raw-loader!./forgot-pwd.component.html */ "./node_modules/raw-loader/index.js!./src/app/forgot-pwd/forgot-pwd.component.html"),
        providers: [_forgot_pwd_service__WEBPACK_IMPORTED_MODULE_2__["ForgotPwdService"]],
        styles: [__webpack_require__(/*! ./forgot-pwd.component.css */ "./src/app/forgot-pwd/forgot-pwd.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_forgot_pwd_service__WEBPACK_IMPORTED_MODULE_2__["ForgotPwdService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ForgotPwdComponent);



/***/ }),

/***/ "./src/app/forgot-pwd/forgot-pwd.service.ts":
/*!**************************************************!*\
  !*** ./src/app/forgot-pwd/forgot-pwd.service.ts ***!
  \**************************************************/
/*! exports provided: ForgotPwdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPwdService", function() { return ForgotPwdService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ForgotPwdService = class ForgotPwdService {
    constructor(http) {
        this.http = http;
        this.heroesUrl = 'api/users';
    }
    // searchUser(mailID: string): Observable<Users[]> {
    //   if (!mailID.trim()) {
    //     // if not search term, return empty hero array.
    //     return of([]);
    //   }
    //   return this.http.get<Users[]>(`api/users/?mailid=${mailID}`);
    // }
    searchUser(mailID) {
        return this.http.get(this.heroesUrl);
    }
}; //class close
ForgotPwdService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ForgotPwdService);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let HomeComponent = class HomeComponent {
    constructor(_route) {
        this._route = _route;
        this.showUsers = false;
        this.user = '';
        this.selectedQty = 0;
    }
    ngOnInit() {
        this.user = localStorage.getItem('username');
        if (this.user == "admin")
            this.showUsers = true;
        else
            this.showUsers = false;
    }
    logout() {
        localStorage.removeItem("username");
        this._route.navigate(["Login"]);
    }
}; //class close
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/in-memory-data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/in-memory-data.service.ts ***!
  \*******************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
class InMemoryDataService {
    constructor() { }
    createDb() {
        const cartItems = [];
        const orders = [];
        const users = [
            { id: 11, fname: 'Sai', mailid: 's@gmail.com', gender: 'Male', password: '1234', city: 'Hyd', mobile: 9234567890, pincode: 12345 }
        ];
        const products = [
            {
                id: 1,
                orderId: 0,
                Name: "Bagger Daves",
                url: "./assets/Images/1.jpg",
                longDesc: "Bagger Dave's Burger Tavern Inc. ",
                price: 200,
                orderedQty: 0
            },
            {
                id: 2,
                orderId: 0,
                Name: "Gulab jamun",
                url: "./assets/Images/2.jpg",
                longDesc: "Gulab jamun (also spelled gulaab jamun) are a milk",
                price: 4,
                orderedQty: 0
            },
            {
                id: 3,
                orderId: 0,
                Name: "Cheerio",
                url: "./assets/Images/3.jpg",
                longDesc: "Cheerio or Cheerios may refer to: Cheerio, a British",
                price: 200,
                orderedQty: 0
            },
            {
                id: 4,
                orderId: 0,
                Name: "Sun-Maid Growers",
                url: "./assets/Images/4.jpg",
                longDesc: "Sun-Maid Growers of California is a privately owned ",
                price: 132,
                orderedQty: 0,
            },
            {
                id: 5,
                orderId: 0,
                Name: "Horlicks",
                url: "./assets/Images/5.jpg",
                longDesc: "Horlicks is usually taken to be a substitute ",
                price: 1000,
                orderedQty: 0
            },
            {
                id: 6,
                orderId: 0,
                Name: "Maggi",
                url: "./assets/Images/6.jpg",
                longDesc: "Maggi is an international brand of seasonings",
                price: 11022,
                orderedQty: 0
            },
            {
                id: 7,
                orderId: 0,
                Name: "Chocolate brownie",
                url: "./assets/Images/7.jpg",
                longDesc: "A chocolate brownie (commonly referred to as simply brownie)",
                price: 10000,
                orderedQty: 0
            },
            {
                id: 8,
                orderId: 0,
                Name: "Unicorn",
                url: "./assets/Images/8.jpg",
                longDesc: "Unicorn The gentle and pensive maiden has the power to tame",
                price: 165645,
                orderedQty: 0
            },
            {
                id: 9,
                orderId: 0,
                Name: "Vegetable",
                url: "./assets/Images/9.png",
                longDesc: "everyday usage, vegetables are certain parts",
                price: 165648,
                orderedQty: 0
            },
            {
                id: 10,
                orderId: 0,
                Name: "Eggs",
                url: "./assets/Images/10.jpg",
                longDesc: "Eggs seasoned with ground cloves on a ham sandwich",
                price: 165645,
                orderedQty: 0
            }
        ];
        return { users, products, orders, cartItems };
    } //Db close
} //class close


/***/ }),

/***/ "./src/app/item-details/item-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/item-details/item-details.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0tZGV0YWlscy9pdGVtLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/item-details/item-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/item-details/item-details.component.ts ***!
  \********************************************************/
/*! exports provided: ItemDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsComponent", function() { return ItemDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product */ "./src/app/product.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");





let ItemDetailsComponent = class ItemDetailsComponent {
    constructor(_route, route, sharedService) {
        this._route = _route;
        this.route = route;
        this.sharedService = sharedService;
        this.user = '';
        this.CartNo = 0;
        this.cart2 = [];
        this.selectedQty = 1;
        this.items = new _product__WEBPACK_IMPORTED_MODULE_2__["Product"]();
    }
    getSelectedItem(id) {
        this.items = this.list.filter(a => a.id == id)[0];
    }
    ngOnInit() {
        var id = this.route.snapshot.params["id"];
        this.sharedService.getProducts()
            .subscribe(items => {
            this.list = items;
            this.getSelectedItem(id);
        });
    }
    navigateToCartsPage() {
        this._route.navigate(["../../Carts"], { relativeTo: this.route });
    }
    navigateToCheckoutPage() {
        this._route.navigate(["../../CheckOut"], { relativeTo: this.route });
    }
    addtocart() {
        this.items.orderedQty = this.selectedQty;
        this.sharedService.addToCart(this.items).subscribe((v) => {
            this.navigateToCartsPage();
        });
    }
    BuyNow(items) {
        // Get Existing Orders
        // let orderItem = new Orders();
        // orderItem.id = this.items.id;
        // orderItem.itemDesc = this.items.Name;
        // orderItem.itemID = this.items.id;
        // orderItem.orderedQty = this.selectedQty;
        // orderItem.image = this.items.url;
        // orderItem.price = this.items.price;
        this.sharedService.createOrders(this.items).subscribe((v) => {
            this.navigateToCheckoutPage();
        });
    }
}; //class close
ItemDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-item-details',
        template: __webpack_require__(/*! raw-loader!./item-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/item-details/item-details.component.html"),
        styles: [__webpack_require__(/*! ./item-details.component.css */ "./src/app/item-details/item-details.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
], ItemDetailsComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");




let LoginComponent = class LoginComponent {
    constructor(_route, loginService) {
        this._route = _route;
        this.loginService = loginService;
        this.userlist = [];
    }
    ngOnInit() {
        //https://alligator.io/js/introduction-localstorage-sessionstorage/
    }
    // Checking User exists in database or not
    isUsersExists() {
        let lstuser = this.userlist.filter(a => a.mailid == this.username);
        if (lstuser && lstuser.length > 0) {
            let user = lstuser[0];
            if (user.fname == "admin" && user.password == this.password) {
                this._route.navigate(["Home/UsersList"]);
                localStorage.setItem('username', user.fname);
            }
            else if (user.password == this.password) {
                this._route.navigate(["Home"]);
                localStorage.setItem('username', user.fname);
            }
            else {
                alert("Invalid Password!!!");
            }
        }
        else {
            alert("Invalid User or Email!!!");
        }
    }
    onSubmit(value) {
        this.loginService.getUsers()
            .subscribe(users => {
            this.userlist = users;
            this.isUsersExists();
        });
    }
    isUserExists() {
        let lstuser = this.userlist.filter(a => a.mailid == this.username);
        if (lstuser.length > 0) {
            if (lstuser[0].password == this.password) {
                ///navigate to Home ok///
                this._route.navigate(["Home"]);
                localStorage.setItem("username", this.username);
            }
            else {
                alert("invalid password");
            }
        }
        else {
            alert("invalid User or Email");
        }
    }
}; //class close
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
let LoginService = class LoginService {
    constructor(http) {
        this.http = http;
        this.heroesUrl = 'api/users';
    }
    getUsers() {
        return this.http.get(this.heroesUrl);
    }
}; //class close
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], LoginService);



/***/ }),

/***/ "./src/app/order/order.component.css":
/*!*******************************************!*\
  !*** ./src/app/order/order.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyL29yZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/order/order.component.ts":
/*!******************************************!*\
  !*** ./src/app/order/order.component.ts ***!
  \******************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");



let OrderComponent = class OrderComponent {
    constructor(sharedService) {
        this.sharedService = sharedService;
    }
    ngOnInit() {
        this.sharedService.getOrders()
            .subscribe(orders => {
            this.orderItems = orders;
        });
    }
}; //class close
OrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order',
        template: __webpack_require__(/*! raw-loader!./order.component.html */ "./node_modules/raw-loader/index.js!./src/app/order/order.component.html"),
        styles: [__webpack_require__(/*! ./order.component.css */ "./src/app/order/order.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
], OrderComponent);



/***/ }),

/***/ "./src/app/product.ts":
/*!****************************!*\
  !*** ./src/app/product.ts ***!
  \****************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
class Product {
}


/***/ }),

/***/ "./src/app/products/products.component.css":
/*!*************************************************!*\
  !*** ./src/app/products/products.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products.service */ "./src/app/products/products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ProductsComponent = class ProductsComponent {
    constructor(productService, _route, activatedRoute) {
        this.productService = productService;
        this._route = _route;
        this.activatedRoute = activatedRoute;
        this.pageSize = 5; //5  indicate the number of entries per page.
        this.pageNumber = 0; //is the maximum number of page can we deduce from the ‘ProductList’ in terms of ‘pageSize’ value,
        this.currentIndex = 1; //is the index of the current selected page.
        this.pageStart = 1; //this the start index page in the pagination bar.
        this.inputName = ''; //is used to search a new list of Product which the value of the attribute name for each one contains the text in ‘inputName’.
    }
    ngOnInit() {
        this.productService.getProducts()
            .subscribe(products => {
            this.items = products;
            this.filteredItems = products;
        });
    }
    FilterByName() {
        this.filteredItems = [];
        if (this.inputName != "") {
            this.items.forEach(element => {
                if (element.Name.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(element);
                }
                else {
                    this.filteredItems.push();
                }
            });
        }
        else {
            this.filteredItems = this.items; // text box empty then call to list array.
        }
        console.log(this.filteredItems);
    }
    onItemClick(item) {
        this._route.navigate(['./ItemDetails/' + item.id], { relativeTo: this.activatedRoute });
    }
}; //class close
ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products',
        template: __webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/index.js!./src/app/products/products.component.html"),
        providers: [_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]],
        styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/products/products.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], ProductsComponent);



/***/ }),

/***/ "./src/app/products/products.service.ts":
/*!**********************************************!*\
  !*** ./src/app/products/products.service.ts ***!
  \**********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
let ProductService = class ProductService {
    constructor(http) {
        this.http = http;
        this.productsUrl = 'api/products';
    }
    getProducts() {
        return this.http.get(this.productsUrl);
    }
}; //class close
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ProductService);



/***/ }),

/***/ "./src/app/registration/registration.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registration/registration.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users */ "./src/app/users.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _registration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration.service */ "./src/app/registration/registration.service.ts");





let RegistrationComponent = class RegistrationComponent {
    constructor(_route, regService) {
        this._route = _route;
        this.regService = regService;
    }
    ngOnInit() {
        this.userlist = new _users__WEBPACK_IMPORTED_MODULE_2__["Users"]();
    }
    navigateToLogin(value) {
        alert("User " + value.fname + " Created Successfully!!!");
        this._route.navigate(["Login"]);
    }
    onSubmit(value) {
        console.log(value);
        this.regService.createeUser(value).subscribe((v) => this.navigateToLogin(value));
    }
}; //class close
RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registration',
        template: __webpack_require__(/*! raw-loader!./registration.component.html */ "./node_modules/raw-loader/index.js!./src/app/registration/registration.component.html"),
        providers: [_registration_service__WEBPACK_IMPORTED_MODULE_4__["RegistrationService"]],
        styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/registration/registration.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _registration_service__WEBPACK_IMPORTED_MODULE_4__["RegistrationService"]])
], RegistrationComponent);



/***/ }),

/***/ "./src/app/registration/registration.service.ts":
/*!******************************************************!*\
  !*** ./src/app/registration/registration.service.ts ***!
  \******************************************************/
/*! exports provided: RegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationService", function() { return RegistrationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
let RegistrationService = class RegistrationService {
    constructor(http) {
        this.http = http;
        this.heroesUrl = 'api/users';
    }
    createeUser(user) {
        return this.http.post(this.heroesUrl, user, httpOptions);
    }
}; //class close
RegistrationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], RegistrationService);



/***/ }),

/***/ "./src/app/shared.service.ts":
/*!***********************************!*\
  !*** ./src/app/shared.service.ts ***!
  \***********************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
let SharedService = class SharedService {
    constructor(http) {
        this.http = http;
        this.productUrl = 'api/products';
        this.cartUrl = 'api/cartItems';
        this.ordersUrl = 'api/orders';
        this.dataurl = 'api/datas';
    }
    getProducts() {
        return this.http.get(this.productUrl);
    }
    addToCart(item) {
        return this.http.post(this.cartUrl, item, httpOptions);
    }
    getOrders() {
        return this.http.get(this.ordersUrl);
    }
    createOrders(order) {
        return this.http.post(this.ordersUrl, order, httpOptions);
    }
    getCarts() {
        return this.http.get(this.cartUrl);
    }
}; //class close
SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], SharedService);



/***/ }),

/***/ "./src/app/user-list/user-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/user-list/user-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user-list/user-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-list/user-list.component.ts ***!
  \**************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserListComponent = class UserListComponent {
    constructor() { }
    ngOnInit() {
    }
};
UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-list',
        template: __webpack_require__(/*! raw-loader!./user-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/user-list/user-list.component.html"),
        styles: [__webpack_require__(/*! ./user-list.component.css */ "./src/app/user-list/user-list.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], UserListComponent);



/***/ }),

/***/ "./src/app/users.ts":
/*!**************************!*\
  !*** ./src/app/users.ts ***!
  \**************************/
/*! exports provided: Users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Users", function() { return Users; });
class Users {
}


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\Final Project\BuyCart\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map