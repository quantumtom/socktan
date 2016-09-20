define(['models/base'], function (BaseModel) {
    return BaseModel.extend({
        url: "http://localhost:5000/api/v5/product",
        defaults: {
            type: 'telephone|softphone|webphone',
            dialCode: {
                complete: '1-1-510-646-8289',
                country: '1',
                npa: '510',
                prefix: '646',
                suffix: '8289'
            },
            locality: 'California',
            nation: 'US',
            title: 'Starter 200 Monthly',
            price: 0,
            total: 0,
            currency: 'USD',
            addOns: ['record' | 'forward', 'voicemail', 'ivr', 'schedule'],
            Fax2MyEmail: false,
            action: ['forward' , 'voicemail' , 'huntgroup' , 'ivr']
        }
    });
});
