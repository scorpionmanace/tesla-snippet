//This is a Server File


if (Meteor.isServer) {
    console.log("Server Started");
    //Methods that perform computation and extration of data at server end
    Meteor.methods({
        //        utilizes other methods and gets the complete set of option for the Client part
        getOptions: function () {
            var options, mergeDataSync, _options;
            return Meteor.call('mergeDataForOptions');
        },
        //Perform merge operation on Option A and Option B
        mergeDataForOptions: function () {
            var optionA = Meteor.call('getOptionA');
            var optionB = Meteor.call('getOptionB');

            var options;
            for (var key in optionA.options) {
                if (optionB.options[key]) {
                    optionA.options[key].price = optionB.options[key].price;
                    optionA.options[key].is_default = optionB.options[key].is_default;
                }
            }
            return optionA;
        },

        //        JS File getter for options_20140310.js
        getOptionA: function () {
            return JSON.parse(Assets.getText('data/options_20140310.js'));
        },

        //        JS File getter for option_prices_20140310.js
        getOptionB: function (cb) {
            return JSON.parse(Assets.getText('data/option_prices_20140310.js'));
        },

    });
}
