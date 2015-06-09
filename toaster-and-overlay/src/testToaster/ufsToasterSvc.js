/**
 * Usage:
 *      1. import   "angular-toastr.tpls.js",
 *                  "ufsToasterSvc.js"
 *                  "angular-toastr.css"
 *      2. inject the ufs-common-toaster and toastr  into your app module
 *              angular.module('app',[ 'toastr', 'ufs-common-toaster'])
 *      3. inject ufsToasterSvc into the
 *              app.controller("MyCtrl", function($scope, ufsToasterSvc)
 *      4. to display the toast, use:
 *                  ufsToasterSvc.toaster.info()
 *                  ufsToasterSvc.toaster.warning()
 *                  ufsToasterSvc.toaster.success()
 *                  ufsToasterSvc.toaster.error()
 *
 *         ex.  app.controller("MyCtrl", function($scope, ufsToasterSvc) {
 *                 ufsToasterSvc.toaster.info("hello", "my tit)
 *             }
 */
angular.module('ufs-common-toaster', [])
    .factory('ufsToasterSvc', function(toastr, toastrConfig) {

        // config the toaster configuration.
        toastrConfig.autoDismiss = true;
        toastrConfig.allowHtml = true;
        toastrConfig.positionClass ='toast-bottom-right';
        toastrConfig.newestOnTop = false;

        var service = {
            toaster: toastr
        };
        return service;
    });