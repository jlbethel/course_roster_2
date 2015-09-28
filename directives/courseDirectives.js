courseRoster.directive("hometext", function(){
  return {
    template: "back to the beginning"
  }
});

courseRoster.directive("changeClass", function() {
  return function(scope, element, attrs) {
    element.bind("click", function() {
      element.toggleClass(attrs.changeClass);
    });
  }
});

courseRoster.directive("sampleCourse", function() {

  return {
    scope:{
      courseName: "="
    },
    template:'<div>{{ courseName }}</div>'

  }
});

courseRoster.directive("alertUser", function() {
  return {
    scope: {
      alert:"&"
    },
    template:'<input type="text" ng-model="value">' +
    '<button type="button" ng-click="alert({message:value})">Alert!</button>'
  }
});

// courseRoster.directive("debug", function($compile){
//   return {
//     terminal: true,
//     priority: 1000000,
//     link: function(scope, element){
//       var clone = element.clone();
//       clone.removeAttr("debug");
//       var clonedElement = $compile(clone)(scope);
//       element.after(clonedElement);
//     }
//   }
// });
