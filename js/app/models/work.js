define([
    'backbone'
], function (Backbone) {
    var WorkModel = Backbone.Model.extend({
        defaults: {
            content: 'empty ...'
        },
        initialize: function () {
            if (!this.get('content')) {
                this.set({'content': this.defaults.content});
            }
        },

        // Remove this from *localStorage* and delete its view.
        clear: function () {
            this.destroy();
            this.view.remove();
        }
    });

    return WorkModel;

});
