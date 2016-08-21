define([
    'backbone',
    'hbar!parts/contact',
    'lib/validator'
], function (ContactPart, Backbone) {

    var ContactView = Backbone.View.extend({
        render: function () {
            "use strict";

            var contactData = {
                title: 'contact',
                lead: 'let\'s chat',
                body: 'Whether you are a human or a robot, we would love to hear from you (robots are often more ' +
                'interesting). We can get started on your project right away.'
            };

            this.$el.html(ContactPart(contactData));

            $('#myForm').validator();
        }
    });

    return ContactView;
});
