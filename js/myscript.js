angular.module('myApp', [])
.controller('mainCtrl',['$scope', 'UserList', function($scope, UserList){
  $scope.users = UserList();  
}])
.value('UserList', function(){
  return [
    {"name":"taguchi","score":58.22},
    {"name":"yamada","score":18.45},
    {"name":"kanai","score":24.77}
  ]
});