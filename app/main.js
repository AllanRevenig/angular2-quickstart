/*
** Bootstrap (load) the Angular application root component
** What about this main.ts file?  https://angular.io/docs/ts/latest/quickstart.html#!#main
*/
System.register(['angular2/platform/browser', './app.component'], function(exports_1) {
    var browser_1, app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent); //Angular's browser bootstrap function of application root component
        }
    }
});
// but where will angular put the root element?
//# sourceMappingURL=main.js.map