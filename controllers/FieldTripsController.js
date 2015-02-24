studentRoster.controller('FieldTripsCtrl', function FieldTripsCtrl($scope) {
  $scope.addStudentWithPermission = function(student) {
    student.permissionSlip = true;
  };
});
