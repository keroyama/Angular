angular.module('myApp', [])
.controller('MyController',['$scope', function($scope){
  /*$scope.greeting = 'こんにちわ名無しさん';

  $scope.onclick = function(){
    $scope.greeting = 'こんんちわ' + $scope.myName + 'さん';
  };*/

  $scope.show = true;

  $scope.onclick = function(){
    angular.element(document.getElementById('panel')).css({
      backgroundColor: '#000',
      color: '#fff'
    });
  };
}]);