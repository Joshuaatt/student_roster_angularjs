studentRoster.controller('StudentsCtrl', function StudentsCtrl($scope) {
  $scope.students = []
  $scope.addStudent = function() {
    $scope.students.push({ name: $scope.studentName }); // Adds a new student object.
    $scope.studentName = null; // Clears the field in the html.
  };

  $scope.deleteStudent = function(student) {
    var index = $scope.students.indexOf(student) // Finds the index.
    $scope.students.splice(index, 1); // Starts at the index of the student and deletes 1.
  };
});
