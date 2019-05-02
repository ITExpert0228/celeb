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
     .when('/admin/frontcms/process', {
         templateUrl: 'admin/modules/frontcms/process/process.html',
        resolve: {
            user: ['$cookieStore', '$q', function ($cookieStore, $q) {
                var user = $cookieStore.get("user")
                if (!user || user == null) {
                    window.location.href = '/admin';
                }
            }]
        },
         controller: 'processCtrl'
     })
     .when('/admin/frontcms/privacy', {
        templateUrl: 'admin/modules/frontcms/privacy/privacy.html',
       resolve: {
           user: ['$cookieStore', '$q', function ($cookieStore, $q) {
               var user = $cookieStore.get("user")
               if (!user || user == null) {
                   window.location.href = '/admin';
               }
           }]
       },
        controller: 'privacyCtrl'
    })
    .when('/admin/frontcms/cookie', {
        templateUrl: 'admin/modules/frontcms/cookie/cookie.html',
       resolve: {
           user: ['$cookieStore', '$q', function ($cookieStore, $q) {
               var user = $cookieStore.get("user")
               if (!user || user == null) {
                   window.location.href = '/admin';
               }
           }]
       },
        controller: 'cookieCtrl'
    })
        .when('/admin/performers', {
        templateUrl: 'admin/modules/performers/performers.html',

        resolve: {
            user: ['$cookieStore', '$q', function ($cookieStore, $q) {
                var user = $cookieStore.get("user");
                if (!user || user == null) {
                    window.location.href = '/admin';
                }
            }]
        },
         controller: 'performersCtrl'
    })
    .when('/admin/request', {
        templateUrl: 'admin/modules/request/request.html',

        resolve: {
            user: ['$cookieStore', '$q', function ($cookieStore, $q) {
                var user = $cookieStore.get("user")
                if (!user || user == null) {
                    window.location.href = '/admin';
                }
            }]
        },
         controller: 'requestCtrl'
    })
    .when('/admin', {
        templateUrl: 'admin/modules/auth/login.html',
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

