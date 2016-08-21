define([
    'backbone',
    'hbar!parts/about'
], function (Backbone, aboutPart) {
    var AboutView = Backbone.View.extend({
        render: function () {
            "use strict";

            var aboutData = {
                title: 'about',
                lead: '(technically) creative',
                body: [
                    {
                        prose: 'Socktan designs and builds original web sites for small businesses, non-profits, and other ' +
                        'organizations. We also count artists and business professionals among our clients.'
                    },
                    {
                        prose: 'We operate in the sizable gap left between the amateur design shop and the larger corporate agencies. ' +
                        'Our projects might be a single-page brochure web site or a complex database-driven commerce or social media ' +
                        'site. We take pride in being knowledgeable and friendly professionals. Our clients love us and they never ' +
                        'hesitate to recommend our work.'
                    },
                    {
                        prose: 'Socktan is a group of skilled digital creatives working together to provide web-centric professional ' +
                        'services. Based in Venice, California, we aid our clients in their effort to communicate a message ' +
                        'to their audience. Whether that audience is a customer, a client, or the public at large, businesses without ' +
                        'web-presence are becoming an endangered species. Customers are using the web to find you. Trends like social ' +
                        'media and web mobility are becoming essential to surviving in the marketplace.'
                    }
                ]
            };

            this.$el.html(aboutPart(aboutData));
        }

    });

    return AboutView;

});
