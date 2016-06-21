'use strict';

/**
 * @ngdoc function
 * @name angularBsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularBsApp
 */
angular.module('angularBsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // ui.bootstrap Accordion components.
		$scope.oneAtATime = true;

	  $scope.groups = [
	    {
	      title: 'Dynamic Group Header - 1',
	      content: 'Dynamic Group Body - 1'
	    },
	    {
	      title: 'Dynamic Group Header - 2',
	      content: 'Dynamic Group Body - 2'
	    }
	  ];

	  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

	  $scope.addItem = function() {
	    var newItemNo = $scope.items.length + 1;
	    $scope.items.push('Item ' + newItemNo);
	  };

	  $scope.status = {
	    isFirstOpen: true,
	    isFirstDisabled: false
	  };

	  // select
	  $scope.citys = [
	  	{name: '北京'},
	  	{name: '天津'},
	  	{name: '上海'},
	  	{name: '重庆'},
	  	{name: '深圳'}
	  ];
	  $scope.myCitys = '北京';

	  // Web Storage
	  $scope.sessionTmp = "abc";
	  
	  $scope.setSession = function() {
	  	sessionStorage.setItem(1, (document.getElementById('sessionForm')).value);
	  };
	  $scope.clearSession = function() {
	  	sessionStorage.clear();
	  };

	  //The following example counts the number of times a user has clicked a button. In this code the value string is converted to a number to be able to increase the counter
	  function clickCounter() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
	    } else {
	        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
	    }
		}
  });
