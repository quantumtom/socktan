define([
    'models/base'
], function (BaseModel) {
    var ContactModel = BaseModel.extend({
        defaults: {
            content: {
                title: 'contact',
                lead: 'let\'s chat',
                body: 'Whether you are a human or a robot, we would love to hear from you (robots are often more ' +
                'interesting). We can get started on your project right away.'
            }
        }
    });

    return ContactModel;
});

