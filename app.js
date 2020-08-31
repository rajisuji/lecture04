(function(){
'use strict';
angular.module('myFirstApp',[])
.controller('myFirstController', function ($scope){
$scope.name = "raji";
$scope.sayHello = function(){
    return "hello rajeswari";
}
});
})();
 
