define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var BaseModel = function (options) {
        Backbone.Model.call(this, options);
    };

    _.extend(BaseModel.prototype, Backbone.Model.prototype, {
        // base functions will be implemented here
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

    BaseModel.extend = Backbone.Model.extend;

    return BaseModel;

});
