define([
    'models/base'
], function (BaseModel) {
    'use strict';

    return BaseModel.extend({
        url: '/user/contact',
        defaults: {
            name: '',
            email: '',
            telephone: ''
        }
    });
});

