var courseRoster = angular.module('courseRoster', ['ui.router']);
////////////////////////////vvvvvsetup parameters herevvvvv/////////
courseRoster.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    views: {
      'header': {
        templateUrl: "partials/header.html",
      },
      'body': {
        templateUrl: "partials/home.html",
      },
    }

  });

  $stateProvider.state('courses', {
  url: "/courses",
  views: {
    'header': {
      templateUrl: "partials/header.html",
    },
    'body': {
      templateUrl: "partials/courses.html",
      controller: 'CoursesCtrl'
    },
   }
  });

  $stateProvider.state('courses.students', {
    url: "/:courseId",
    views: {
      'header': {
        templateUrl: "partials/header.html",
      },
      'body': {
        templateUrl: "partials/courses.students.html",
        controller: 'StudentsCtrl'
      },
    }
  });
});


//notes
//$stateProvider is what configures our application's states
//name of the state 'home', configuration of the state { url: "", templateUrl: "partials/home.html" }
