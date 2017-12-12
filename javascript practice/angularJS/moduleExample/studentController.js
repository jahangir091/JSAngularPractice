// mainApp.controller("studentController", function($scope) {
//    $scope.student = {
//       firstName: "Mahesh",
//       lastName: "Parashar",
//       fees:500,
      
//       subjects:[
//          {name:'Physics',marks:70},
//          {name:'Chemistry',marks:80},
//          {name:'Math',marks:65},
//          {name:'English',marks:75},
//          {name:'Hindi',marks:67}
//       ],
      
//       fullName: function() {
//          var studentObject;
//          studentObject = $scope.student;
//          return studentObject.firstName + " " + studentObject.lastName;
//       }
//    };
// });

mainApp.controller("studentController", function($scope) {
	$scope.student = {
		firstName: "jahangir",
		lastName: "alam",
		fees: 2000,

		subjects:[
		{name: 'Physics', marks: 77},
		{name: 'Chemistry', marks: 88},
		{name: 'Math', marks:66},
		{name: 'English', marks: 77},

		],

		fullName: function(){
			var studentObject;
			studentObject = $scope.student;
			return studentObject.firstName + " " + studentObject.lastName;
		}
	};
}

	);