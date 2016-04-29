angular.module('myApp', [])
.controller('MyController',['$scope', function($scope){
  /*$scope.greeting = 'こんにちわ名無しさん';

  $scope.onclick = function(){
    $scope.greeting = 'こんんちわ' + $scope.myName + 'さん';
  };*/

  /*$scope.show = true;

  $scope.onclick = function(){
    angular.element(document.getElementById('panel')).css({
      backgroundColor: '#000',
      color: '#fff'
    });
  };

  $scope.seasons = [
    {name:'春', value:'spring'},
    {name:'夏', value:'summer'},
    {name:'秋', value:'fall'},
    {name:'冬', value:'winter'}
  ];
  $scope.season = $scope.seasons[0].value;

  var prevDay = 1001;
  var nextDay = 1000;
  //console.log(number);
  if(prevDay < nextDay){
    $scope.obj = '小さい';
  } else if(prevDay > nextDay) {
    $scope.obj = '大きい';
  } else {
    $scope.obj = '同じ';
  }*/

  var max = 140;
  $scope.onchange = function(){

    $scope.count = $scope.tweet.length;
  }
}]);