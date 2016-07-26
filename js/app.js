// angular.module is a global place for creating, registering and retrieving Angular modules
// 'fifApp' is the name of this angular module example (also set in a <body> attribute in index.html)
// 'fifApp.controllers' is found in controllers.js
angular.module('fifApp', ['ionic', 'fifApp.controllers', 'fifApp.data'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

//configuring routes
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })
	
	.state('app.splash', {
      url: "/splash",
      views: {
        'menuContent' :{
          templateUrl: "templates/splash.html",
          controller: 'SplashCtrl'
        }
      }
    })
	
    .state('app.program', {
      url: "/program",
      views: {
        'menuContent' :{
          templateUrl: "templates/program.html",
          controller: 'ProgramCtrl'
        }
      }
    })
	
    .state('app.speakers', {
      url: "/speakers",
      views: {
        'menuContent' :{
          templateUrl: "templates/speakers.html",
		  controller: 'SpeakersCtrl'
        }
      }
    })	

    .state('app.speaker', {
      url: "/speakers/:speakerId",
      views: {
        'menuContent' :{
          templateUrl: "templates/speaker.html",
          controller: 'SpeakerCtrl'
        }
      }
    })
	
    .state('app.songs', {
      url: "/songs",
      views: {
        'menuContent' :{
          templateUrl: "templates/songs.html",
          controller: 'SongsCtrl'
        }
      }
    })
	
	.state('app.song', {
      url: "/songs/:songId",
      views: {
        'menuContent' :{
          templateUrl: "templates/song.html",
          controller: 'SongCtrl'
        }
      }
    })
	
	.state('app.venue', {
      url: "/venue",
      views: {
        'menuContent' :{
          templateUrl: "templates/venue.html",
          controller: 'VenueCtrl'
        }
      }
    });
	
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/splash');
});

