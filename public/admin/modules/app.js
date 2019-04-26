var app = angular.module('mainApp', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider, $locationProvider) {
    
    $locationProvider.html5Mode(true);

    $routeProvider.when('/admin/contactus', {
        templateUrl: 'admin/modules/contactus/contactus.html',
        resolve: {
            user: ['$cookieStore', '$q', function ($cookieStore, $q) {
                var user = $cookieStore.get("user")
                if (!user || user == null) {
                    window.location.href = '/admin';
                }
            }]
        },
         controller: 'contactusCtrl'
    })
    .when('/admin/frontcms', {
        templateUrl: 'admin/modules/frontcms/frontcms.html',
        resolve: {
            user: ['$cookieStore', '$q', function ($cookieStore, $q) {
                var user = $cookieStore.get("user")
                if (!user || user == null) {
                    window.location.href = '/admin';
                }
            }]
        },
         controller: 'frontcmsCtrl'
    })
    .when('/admin/signup', {
        templateUrl: 'admin/modules/signup/signup.html',
        resolve: {
            user: ['$cookieStore', '$q', function ($cookieStore, $q) {
                var user = $cookieStore.get("user")
                if (!user || user == null) {
                    window.location.href = '/admin';
                }
            }]
        },
         controller: 'signupCtrl'
    })
    .when('/admin/signupcheck', {
        templateUrl: 'admin/modules/signup/check/signupcheck.html',
        resolve: {
            user: ['$cookieStore', '$q', function ($cookieStore, $q) {
                var user = $cookieStore.get("user")
                if (!user || user == null) {
                    window.location.href = '/admin';
                }
            }]
        },
        controller: 'signupcheckCtrl'
     })
    .when('/admin/entertainment', {
        templateUrl: 'admin/modules/entertainment/entertainment.html',

        resolve: {
            user: ['$cookieStore', '$q', function ($cookieStore, $q) {
                var user = $cookieStore.get("user")
                if (!user || user == null) {
                    window.location.href = '/admin';
                }
            }]
        },
         controller: 'entertainmentCtrl'
    })
    .when('/admin', {
        templateUrl: 'admin/modules/auth/login.html',
        
        // resolve: {
        //     user: ['$cookieStore', '$q', function ($cookieStore, $q) {
        //         var user = $cookieStore.get("user")
        //         if (user != null) {
        //             if (user.role == "admin") window.location.href = '/admin';
        //             else window.location.href = '/manager';
        //         }
        //     }]
        // },
        controller: 'AuthCtrl'
    }).when('/admin/user', {
        templateUrl: 'admin/modules/user/user.html',
        resolve: {
            user: ['$cookieStore', '$q', function ($cookieStore, $q) {
                var user = $cookieStore.get("user")
                if (!user || user == null) {
                    window.location.href = '/admin';
                }
            }]
        },
        // resolve: {
        //     user: ['$cookieStore', '$q', function ($cookieStore, $q) {
        //         var user = $cookieStore.get("user")
        //         if (user != null) {
        //             if (user.role == "admin") window.location.href = '/admin';
        //             else window.location.href = '/manager';
        //         }
        //     }]
        // },
        controller: 'userCtrl'
    }).otherwise({ redirectTo: '/admin' });

});

