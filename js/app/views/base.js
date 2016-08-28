define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var BaseView = function(options) {
        Backbone.View.call(this, options);
    };

    _.extend(BaseView.prototype, Backbone.View.prototype, {
        // base functions will be implemented here
        el: '#page-body',
        close: function () {
            this.remove();
            this.unbind();
            if (this.onClose){
                this.onClose();
            }
        }
    });

    BaseView.extend = Backbone.View.extend;

    return BaseView;

});
