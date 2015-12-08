//Application is client and can be debugged in the browser

if (Meteor.isClient) {

    //    Creating the Angular Module for binding with the View
    var app = angular.module('teslaApp', ['angular-meteor']);

    //    Controller for the Options to be displayed
    app.controller('OptionsController', ['$scope',
        function ($scope) {

            //            Meteor Async call handling with callbacks
            Meteor.call('getOptions', function (err, data) {
                if (err) {
                    console.log("Error : " + err);
                    return;
                }

                for (key in data.options) {
                    if ((data.options[key].price === 0 || data.options[key].is_default == true) && data.options[key].no_ui) {
                        delete data.options[key];
                    }
                }
                //Sorting the keys from Higher price to Lower price
                var _keys = Object.keys(data.options).sort(function (a, b) {
                    return data.options[b].price - data.options[a].price;
                });

                //Creating the data after the sorting of keys has been done. This code also calculates the total of all the prices
                var _data = {};
                var _total = 0;
                for (key in _keys) {
                    _data[_keys[key]] = data.options[_keys[key]];
                    _total = _total + _data[_keys[key]].price;
                }
                //Data binding
                $scope.data_options = _data;
                $scope.total = _total;

                $scope.currency = data.currency_code;


            });
            //binding toggle swtich
            $scope.showPrice = {
                checked: true,
                change: function () {
                    return this.checked;
                }
            };
        }
                ]);

}
