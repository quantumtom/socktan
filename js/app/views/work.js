define([
    'views/base',
    'hbar!parts/work',
    'models/work'
], function (BaseView, workPart, WorkModel) {
    "use strict";

    var WorkView = BaseView.extend({
        initialize: function () {
            var workModel = new WorkModel();
            this.model = workModel;
            this.content = this.model.attributes.content;
        },
        render: function () {
            this.$el.html(workPart(this.content));

            return this;
        }
    });

    return WorkView;
});
