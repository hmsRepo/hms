app.controller('itemController', ['$scope','$controller','$http','$localStorage', function($scope,controller,$http,$localStorage, editableOptions, editableThemes){
//  app.controller('itemController', ['$scope', '$filter', '$http', 'editableOptions', 'editableThemes', 
 // function($scope, $filter, $http, editableOptions, editableThemes){
    // editableThemes.bs3.inputClass = 'input-sm';
    // editableThemes.bs3.buttonsClass = 'btn-sm';
    // editableOptions.theme = 'bs3';
    $scope.statuses = [
      {value: 1, text: 'status1'},
      {value: 2, text: 'status2'},
      {value: 3, text: 'status3'}
    ];
    // $scope.groups = [];
    // $scope.loadGroups = function() {
    //   return $scope.groups.length ? null : $http.get('api/groups').success(function(data) {
    //     $scope.groups = data;
    //   });
    // };
    $scope.groups = [
      {value: 1, text: 'groups1'},
      {value: 2, text: 'groups2'},
      {value: 3, text: 'groups3'}
    ];
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
    // $scope.addUser = function() {
    //   //alert("in");
    //   $scope.inserted = {
    //     id: $scope.users.length+1,
    //     name: '',
    //     status: null,
    //     group: null 
    //   };
    //   $scope.users.push($scope.inserted);
    // };
    $scope.removeUser = function(index) {
      $scope.users.splice(index, 1);
    };

	$scope.group = {};
        $scope.group = [
        { name: 'Group-1',      email: 'adam@email.com',      age: 12, country: 'United States' },
        { name: 'Group-2',    email: 'amalie@email.com',    age: 12, country: 'Argentina' },
        { name: 'Group-3', email: 'estefania@email.com', age: 21, country: 'Argentina' }
        ];

        $scope.subGroup = {};
        $scope.subGroup = [
        { name: 'Sub Group-1',      email: 'adam@email.com',      age: 12, country: 'United States' },
        { name: 'Sub Group-2',    email: 'amalie@email.com',    age: 12, country: 'Argentina' },
        { name: 'Sub Group-3', email: 'estefania@email.com', age: 21, country: 'Argentina' }
        ];

        $scope.UOM = {};
        $scope.UOM = [
        { name: 'UOM-1',      email: 'adam@email.com',      age: 12, country: 'United States' },
        { name: 'UOM-2',    email: 'amalie@email.com',    age: 12, country: 'Argentina' },
        { name: 'UOM-3', email: 'estefania@email.com', age: 21, country: 'Argentina' }
        ];

        $scope.ConvUOM = {};
        $scope.ConvUOM = [
        { name: 'Conv UOM-1',      email: 'adam@email.com',      age: 12, country: 'United States' },
        { name: 'Conv UOM-2',    email: 'amalie@email.com',    age: 12, country: 'Argentina' },
        { name: 'Conv UOM-3', email: 'estefania@email.com', age: 21, country: 'Argentina' }
        ]; 

        $scope.RECPUOM = {};
        $scope.RECPUOM = [
        { name: 'RECP UOM-1',      email: 'adam@email.com',      age: 12, country: 'United States' },
        { name: 'RECP UOM-2',    email: 'amalie@email.com',    age: 12, country: 'Argentina' },
        { name: 'RECP UOM-3', email: 'estefania@email.com', age: 21, country: 'Argentina' }
        ]; 

        $scope.Stores = {};
        $scope.Stores = [ 
        {name: 'Banquets'},
        {name: 'Engineering store'},
        {name: 'Food Stores'},
        {name: 'General Stores'},
        {name: 'HouseKeeping Store'}
        ];

        $scope.users = [
          //{id: 1, Store: 'Banquets', status: 2, group: 4, groupName: 'admin'}
        ];
        $scope.rowCollectionBasic = [
            {costcenter: 'ACCOUNTS', select: 'Y',  Default: ''},
            {costcenter: 'ANDHRA FOOD FESTIVAL', select: 'Y',  Default: ''},
            {costcenter: 'AYUDHA POOJA FESTIVAL', select: 'Y',  Default: ''},
            {costcenter: 'LOUNGE BAR', select: 'Y',  Default: ''},
            {costcenter: 'BANQUET KITCHEN', select: 'Y',  Default: ''}
        ];
	 

        // Save Item data
        $scope.userObj=[];
        $scope.saveData=function(){
            var full_data={
                'item_code':$scope.item_code,
                'item_name':$scope.item_name,
                'item_stock':$scope.item_stock,
                'group':$scope.group.selected,
                'subGroup':$scope.subGroup.selected,
                'uom':$scope.UOM.selected,
                'factor':$scope.con_factor,
                'con_uom':$scope.ConvUOM.selected,
                'rec_uom':$scope.RECPUOM.selected,
                'last_indent':$scope.last_indent,
                'last_rec_date':$scope.last_rec_date,
                'issue_date':$scope.issue_date,
                'supp_name':$scope.supp_name,
                'rate':$scope.rate,
                'supp_status':$scope.supp_status,
                'multiple':$scope.userObj
            };

             $http({
                method : "POST",
                url : "",
                data: full_data
              }).then(function mySucces(response) {
                  console.log(response);
              }, function myError(response) {
                console.log(response);
              });  
        }

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
// app.directive('checkRow',function(){
//    return function(scope, element, attrs) {
//     console.log(element);
//     //scope.addUser();
//     var clickingCallback = function() {
//       scope.addUser();
//         alert();
//     };
//     element.children.bind('click', clickingCallback);
//     //clickingCallback();
//   }
// })
// app.directive('checkRow', [function(){
//   // Runs during compile
//   return {
//     // name: '',
//     // priority: 1,
//     // terminal: true,
//     // scope: {}, // {} = isolate, true = child, false/undefined = no change
//     // controller: function($scope, $element, $attrs, $transclude) {},
//     // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
//     restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
//     // template: '',
//     // templateUrl: '',
//     // replace: true,
//     // transclude: true,
//     // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
//     link: function($scope, iElm, iAttrs, controller) {
//       iElm.bind("click", function(){
//          $(this).siblings('element').slideToggle();
//       })
//     }
//   };
// }]);