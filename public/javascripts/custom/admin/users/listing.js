var app = angular.module('StarterApp', ['ngMaterial', 'smart-table']);


app.controller('mainCtrl', ['$scope', '$http', '$filter', '$mdDialog', '$mdToast', '$rootScope', function ($scope, $http, $filter, $mdDialog, $mdToast, $rootScope) {

    $scope.user = "";
    $scope.numberOfItemsPerPage = 5;


    $scope.assemblePicture = function (pictureLink) {

        if (pictureLink == undefined || pictureLink == "") {
            return false;
        } else {
            return 'background-image:url(\'' + pictureLink + '\')';
        }

    };

    $scope.viewUser = function (row) {


        $scope.user = row;

        $mdDialog.show({
            controller: DialogController,
            templateUrl: '/admin/users/view',
            locals: {user: $scope.user},
            parent: angular.element(document.body),
            clickOutsideToClose: true
        })
            .then(function (answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function () {
                $scope.status = 'You cancelled the dialog.';
            });


    };

    $scope.deleteUser = function (user_id) {
        var confirm = $mdDialog.confirm()
            .title('Delete warning')
            .content('Are you sure you want to delete this user?')
            .clickOutsideToClose(true)
            .ok('Yes')
            .cancel('No');
        $mdDialog.show(confirm).then(function () {
            // You accepted
            $http.get( '/admin/users/delete/' + user_id).then(function (response) {
                console.log(response);
                $rootScope.getTableData();
                $mdToast.show(
                    $mdToast.simple()
                        .content(response.data.message)
                        .position('bottom left')
                        .hideDelay(3000)
                );
            }, function (response) {
                console.log("There was a server error:" + response);
            });
        }, function () {
            console.log("You declined the deletion action");
        });


    };


    /**
     * Retrieve data from the server for the grid
     */



    $rootScope.getTableData = function () {



        $http.get('/admin/users/data').
            then(function (response) {
                /**
                 * response is what return the server on ajax call (this is the success case)
                 * */
                $rootScope.rowCollection = response.data;
                $rootScope.displayedCollection = [].concat($scope.rowCollection);

            }, function (response) {
                /**
                 * response is what return the server on ajax call (this is the failure-error case)
                 * */
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.

                console.log("There was a server error:" + response);
            });


        $scope.predicates = ['_id', 'user_email', 'user_name', 'user_username', 'user_modified_time'];

    };



}]);


function DialogController($scope, $mdDialog, user) {

    $scope.assemblePicture = function (pictureLink) {

        if (pictureLink == undefined || pictureLink == "") {
            return false;
        } else {
            return 'background-image:url(\'' + pictureLink + '\')';
        }

    };

    $scope.user = user;
    $scope.hide = function () {
        $mdDialog.hide();
    };
    $scope.cancel = function () {
        $mdDialog.cancel();
    };
    $scope.answer = function (answer) {
        $mdDialog.hide(answer);
    };
}


app.directive('pageSelect', function () {
    return {
        restrict: 'E',
        template: '<input type="text" class="select-page" ng-model="inputPage" ng-change="selectPage(inputPage)">',
        link: function (scope, element, attrs) {
            scope.$watch('currentPage', function (c) {
                scope.inputPage = c;
            });
        }
    }
});


app.directive('stRatio', function () {
    return {
        link: function (scope, element, attr) {
            var ratio = +(attr.stRatio);

            element.css('width', ratio + '%');

        }
    };
});

app.directive('stSummary', function () {
    return {
        restrict: 'E',
        require: '^stTable',
        template: '<div>Number of records: <b>{{size}}</b></div>',
        scope: {},
        link: function (scope, element, attr, ctrl) {
            scope.$watch(ctrl.getFilteredCollection, function (val) {
                scope.size = (val || []).length;
            })
        }
    }
});
