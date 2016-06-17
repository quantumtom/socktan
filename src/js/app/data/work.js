define('data/work', function () {

  var workData = {
    title: 'our work',
    bodyCopy: 'We have been building websites for quite some time now. One of the drawbacks of that is many ' +
    'of our early works are no longer online. Fortunately, that\'s not always the case!',
    job: [
      {
        slug: 'Noaa',
        first: true,
        title: 'Real-time satellite weather',
        link: 'http://noaa.socktan.com',
        caption: 'A fun little project animating a series of satellite weather images.',
        image: {
          url: 'https://s3.amazonaws.com/socktan/img/noaa-96x96.png'
        }
      },
      {
        slug: 'Anthem',
        title: 'Usability redesign for Anthem/BlueCross/BlueShield',
        link: 'http://connects.anthem.com',
        caption: 'Anthem wanted to improve the usability of their four public ' +
        'outreach sites. After a third-party conducted a statistical usability ' +
        'study, we took the redesigned site and implemented all of the new design ' +
        'specs in a standards-compliant, cross-browser compatible web stack.',
        image: {
          url: 'https://s3.amazonaws.com/socktan/img/blue-cross.png'
        }
      },
      {
        slug: 'Htc',
        title: 'HTC ReZound with Beats Audio (mobile site)',
        link: 'http://noaa.socktan.com',
        caption: 'HTC introduced its Verizon ReZound handset and wanted a mobile site to ' +
        'show off the phone, on the phone. We customized a jQuery Mobile Framework site ' +
        'and threw in some cool extras. Like a 360 view of the phone that\'s rotated ' +
        'with the touch screen.',
        image: {
          url: 'https://s3.amazonaws.com/socktan/img/htc-rezound-96x96.jpg'
        }
      },
      {
        slug: 'Gt',
        title: 'GameTrailers (mobile site)',
        link: 'http://www.gametrailers.com/netstorage/mobile',
        caption: 'MTV Networks Entertainment division wanted to spruce up their mobile presence ahead of the 2011 ' +
        'Electronics Entertainment Expo. Solution: rapid deployment of a jQuery Mobile Framework version of ' +
        'their site.',
        image: {
          url: 'https://s3.amazonaws.com/socktan/img/gt-mobile-reviews-96x96.png'
        }
      },
      {
        slug: 'Bare',
        title: 'Bare Escentuals Cosmetics',
        link: 'https://www.facebook.com/bareescentuals?sk=app_185852401487880',
        caption: 'Bare Escentuals Cosmetics needed a Facebook app that would tie in with their Be a Force of ' +
        'Beauty&trade; campaign. With seven video segments, it made sense to build a video channel. We seized ' +
        'the opportunity to use the built-in video capabilities of newer web browsers.',
        image: {
          url: 'https://s3.amazonaws.com/socktan/img/be-96x96.jpg'
        }
      },
      {
        slug: 'Morgan',
        title: 'Captain Morgan Rum',
        link: 'http://www.spike.com/collection/bracketmaster',
        caption: 'In previous years, the Captain Morgan Bracket Master Challenge had been built with Adobe Flash. ' +
        'We took that experience and recreated it in JavaScript, CSS, and HTML.',
        image: {
          url: 'https://s3.amazonaws.com/socktan/img/captain-morgan-96x96.jpg'
        }
      },
      {
        slug: 'Disney',
        title: 'Disney Family.com',
        link: 'http://www.kaboose.com',
        caption: 'Right around the time the iPad came out, people at Disney Family.com started to realize they were ' +
        'going to have to do something about their Flash-driven content. We were able to reverse-engineer the ' +
        '"feature carousel" that sits in the center well of the kaboose.com landing page. The seamless transition ' +
        'was accomplished using the YUI library.',
        image: {
          url: 'https://s3.amazonaws.com/socktan/img/disney-family-96x96.png'
        }
      },
      {
        slug: 'Zoobooks',
        title: 'Zoobooks',
        link: 'https://s3.amazonaws.com/socktan/images/portfolio/medium/zoobooks.jpg',
        caption: 'A monthly magazine for children, each issue of Zoobooks covers a different animal with pictures, educational diagrams and facts.',
        image: {
          url: 'https://s3.amazonaws.com/socktan/images/portfolio/small/zoobooks.jpg'
        }
      }
    ]
  };

  return workData;
});
