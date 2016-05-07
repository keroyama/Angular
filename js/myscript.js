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

  /*var max = 140;
  $scope.onchange = function(){
    $scope.count = $scope.tweet.length;
  }

  //$scope.data = {name: 'YAMADA, Yoshihiro'};
  $scope.data = {author:{}};
  $scope.authors =
    [
      {
        name: 'YAMADA, Yoshihiro',
        gender: 'male',
        birth: new Date(1950, 11, 4)
      },
      {
        name: 'satou, ken',
        gender: 'male',
        birth: new Date(1955, 4, 10)
      },
      {
        name: 'tanaka, mao',
        gender: 'male',
        birth: new Date(1970, 12, 7)
      }
    ];

  $scope.books = [
    'あいう',
    'かきく',
    'さしす',
    'あいう',
    'かきく',
    'さしす'
  ]*/

  /*$scope.books = [
    {
      isbn: '978-4-7741-7078-7',
      title: 'サーブレット＆JSPポケットリファレンス',
      price: 2680,
      publish: '技術評論社',
      published: new Date(2015, 0, 8)
    },
    {
      isbn: '978-4-8222-9634-6',
      title: 'アプリを作ろう！Android入門',
      price: 2000,
      publish: '日経BP',
      published: new Date(2014, 11, 20)
    },
    {
      isbn: '978-4-7980-4179-7',
      title: 'ASP.NET MVC 5実践プログラミング',
      price: 3500,
      publish: '秀和システム',
      published: new Date(2014, 8, 20)
    },
    {
      isbn: '978-4-7981-3546-5',
      title: 'JavaScript逆引きレシピ',
      price: 3000,
      publish: '翔泳社',
      published: new Date(2014, 7, 28)
    },
    {
      isbn: '978-4-7741-6566-0',
      title: 'PHPライブラリ＆サンプル実践活用',
      price: 2480,
      publish: '技術評論社',
      published: new Date(2014, 5, 24)
    },
    {
      isbn: '978-4-8222-9836-4',
      title: '.NET開発テクノロジ入門',
      price: 3800,
      publish: '日経BP',
      published: new Date(2014, 5, 5)
    },
    {
      isbn: '978-4-7741-6410-6',
      title: 'Rails 4アプリケーションプログラミング',
      price: 3500,
      publish: '技術評論社',
      published: new Date(2014, 3, 11)
    },
    {
      isbn: '978-4-7741-6127-3',
      title: 'iPhone／iPad開発ポケットリファレンス',
      price: 2780,
      publish: '技術評論社',
      published: new Date(2013, 10, 23)
    }
  ];*/
  
}]);

angular.module('myApp', [])
.controller('MyController',['$scope', '$filter', function($scope,$filter){

  $scope.len = 3;
  $scope.start = 0;
  $scope.pager = function(page){
    $scope.start = $scope.len * page;
  };

  $scope.members = [
    { name: '鈴木太郎', role: '課長', old: 55 },
    { name: '田中一郎', role: '部長', old: 58 },
    { name: '山田理央', role: '担当', old: 25 },
    { name: '腰掛奈美', role: '主任', old: 35 },
    { name: '佐藤大輔', role: '課長', old: 45 }
  ];

  $scope.mySort = function(member){
    var roles = { '部長': 0, '課長': 1, '主任': 2, '担当': 3 };
    return roles[member.role];
  };

  $scope.sort = function(exp, reverse){
    $scope.members = $filter('orderBy')($scope.members, exp, reverse);
  };
}]);

/*angular.module('myApp', ['ngAnimate'])
.controller('MyController',['$scope', function($scope){

  $scope.data = ['い','ろ','は','に','ほ','へ','と'];
  var count = 0;

  $scope.oninsert = function(){
    $scope.data.push('Add' + count);
    count++;
  };

  $scope.onremove = function(){
    $scope.data.shift();
  };

}]);

angular.module('myApp', ['ngSanitize'])
.controller('MyController',['$scope', function($scope){

  $scope.urls = [
    'http://www.hulu.jp/',
    'http://www.hulu.jp/',
  ];

}]);*/