courseRoster.controller('CoursesCtrl', function CoursesCtrl($scope, CoursesFactory) {
  $scope.courses = CoursesFactory.courses;
  $scope.CoursesFactory = CoursesFactory;

  $scope.ctrlCourseName = "science";

  $scope.alert = function(message) {
    alert(message)
  }

});
