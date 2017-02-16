app.controller('IssueCtrl', ['$scope', '$timeout', function($scope, $timeout) {
  $scope.rowCollectionBasic = [
      {Sno: 1, itemcode: 15230, itemname: 'CAKE BOARD 1/2 KG', balance: 102, uom: 'NOS',rate: 3,ret_qty: 4,city: 'chennai',value: 123},
      {Sno: 2, itemcode: 552340, itemname: 'CAKE BOARD 1/3 KG', balance: 323, uom: 'TEST',rate: 6,ret_qty: 1,city: 'puducherry',value: 342},
      {Sno: 3, itemcode: 45230, itemname: 'CAKE BOARD 1/2 KG', balance: 4233, uom: 'DATA',rate: 2,ret_qty: 2,city: 'chennai',value: 23}
  ];

  // $scope.addNewRow=function($event){
  //   console.log($event.keyCode,'$event.keyCode');
  //   if($event.keyCode=='9'){
  //      var parent = angular.element(document.querySelector('#parentRow'));
  //      console.log(parent,'parent');
  //      var curr_row = angular.element(document.querySelector('.cloneRow'));
  //      parent.append(curr_row.clone());
  //   }
  // }


  $scope.addUser = function() {
      //alert("in");
      if ($scope.users.length > 0) {
        var previousIndex=parseInt($scope.users.length)-1;
        if(!$scope.checkEmpty($scope.users[previousIndex])){
            return false;
        }
      }
      $scope.inserted = {
        id: $scope.users.length+1,
        Iss: '',
        Location: ''
      };
      $scope.users.push($scope.inserted);
    };
    $scope.checkEmpty = function(data) {
        if (data.Location!='' || data.Iss!='') {
            return true;
        }else{
            return false;
        }
    };

    $scope.removeUser = function(index) {
      $scope.users.splice(index, 1);
    };
    $scope.users=[];

}]);

app.directive('focusMe', function () {
    return {
        link: function (scope, element, attrs) {
          console.log(attrs.focusMe,"attrs")  ;
          if (scope.$last && attrs.focusMe=="first") {
            // console.log(element[0]);
             element[0].focus();
           }
        }
    };
  });


// app.directive('tabKeyPress', function($compile) {
//     return function(scope, element, attrs) {
//         element.bind("keydown keypress", function(event) {
//           alert('u');
//             var keyCode = event.which || event.keyCode;
//             console.log(keyCode,'keyCode-test');
//             // If tab key is pressed
//             if (keyCode == '9') {
//               var parent = angular.element(document.querySelector('#parentRow'));
//               console.log(parent,'parent');
//               var curr_row = angular.element(document.querySelector('.cloneRow'));
//               parent.append(curr_row.clone());
//               $compile(curr_row.clone().contents())(scope);
//               event.preventDefault();
//             }
//         });
//     };
// });