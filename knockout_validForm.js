$(document).ready(function () {
    ko.applyBindings(new CreateAccountViewModel(), document.getElementById("knockout-app"))
})


function CreateAccountViewModel() {
    var self = this;

    self.firstName = ko.observable("").extend({
        required: true,
        minLength: 2
        //validation: {
        //    message: "Please enter at least 2 characters",
        //    validator: function (value) {
        //        return value.length > 1
        //    }
        //}
    });

    self.emailAddress = ko.observable("").extend({
        required: true,
        email: true
    });

    self.firstName.subscribe(function (newValue) {
        console.log('new value', newValue);
    });

    self.hasBeenSubmitted = ko.observable(false);

    self.handleSubmit = function () {
        var errors = ko.validation.group(self);
        console.log(errors.length)
        if (errors().length > 0) {

            errors.showAllMessages();
            return;
        }

        console.log('SUBMIT THE FORM')
        var payload = {
            firstName: self.firstName(),
            emailAddress: self.emailAddress(),
            subscriptionType: self.subscriptionType()
        }

        console.log(payload)

        self.hasBeenSubmitted(true);
    }

    self.subscriptionType = ko.observable("SuperPro");
}
