define([
    'views/base',
    'hbar!parts/work',
    'models/work'
], function (BaseView, workPart, WorkModel) {
    "use strict";

    return BaseView.extend({
        initialize: function () {
            this.model = new WorkModel();
            this.content = this.model.attributes.content;
            this.model.bind("change", this.render, this);
        },
        render: function () {
            this.$el.html(workPart(this.content));

            return this;
        },
        onClose: function(){
            this.model.unbind("change", this.render);
        }
    });
});
