var courseRoster = angular.module('courseRoster', ['ui.router']);
////////////////////////////vvvvvsetup parameters herevvvvv/////////
courseRoster.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('courses', {
  url: "/courses",
  templateUrl: "partials/courses.html",
  controller: 'CoursesCtrl'
  });

  $stateProvider.state('courses.students', {
    url: "/:courseId",
    templateUrl: "partials/courses.students.html",
    controller: 'StudentsCtrl'
  });
});


//notes
//$stateProvider is what configures our application's states
//name of the state 'home', configuration of the state { url: "", templateUrl: "partials/home.html" }
