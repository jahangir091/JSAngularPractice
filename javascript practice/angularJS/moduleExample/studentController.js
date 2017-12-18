

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