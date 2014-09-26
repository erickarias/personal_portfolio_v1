import DS from 'ember-data';

var Related = DS.Model.extend({
  image: DS.attr('string'),
  caption: DS.attr('string'),
  project: DS.belongsTo('project')
});

Related.reopenClass({
  FIXTURES: [
    { id: 100,
      image: 'assets/images/screenshots/todo-wires.jpg',
      caption: "Initial mobile wireframes based on business requirement we gathered."
    },
    { id: 101,
      image: 'assets/images/screenshots/todo-v1-cards.jpg',
      caption: "Discovery and ideation process for potential card types."
    },
    { id: 102,
      image: 'assets/images/screenshots/todo-v1-home-desktop.jpg',
      caption: "Initial mockups for card pattern homepage on desktop."
    },
    { id: 103,
      image: 'assets/images/screenshots/todo-v1-home-mobile.jpg',
      caption: "Mobile flow of chicago.com concept. Responsive layout."
    },
    { id: 104,
      image: 'assets/images/screenshots/todo-v2-home-desktop.jpg',
      caption: "Rebranded as To Do Chicago. Focus on featured content and younger demographic."
    },
    { id: 105,
      image: 'assets/images/screenshots/todo-v2-home-mobile.jpg',
      caption: "Rebranded mobile homepage. Responsive layout."
    },
    { id: 200,
      image: 'assets/images/screenshots/chicago-wires.jpg',
      caption: "Mobile wireframes for user flow."
    },
    { id: 201,
      image: 'assets/images/screenshots/chicago-mobile.jpg',
      caption: "Mobile user flow. Homepage offers sections for user to drill down."
    },
    { id: 202,
      image: 'assets/images/screenshots/chicago-home-desktop.jpg',
      caption: "Homepage layout for desktop. Same as mobile, but also offers top story for each section."
    },
    { id: 300,
      image: 'assets/images/screenshots/email-v2-home-desktop.jpg',
      caption: "Landing page experience allows users to search there name for an @chicago email or domain name. When the user scrolls down they are shown testimonials and marketing copy"
    },
    { id: 301,
      image: 'assets/images/screenshots/email-v1-vanity.jpg',
      caption: "We marketed the email product as a way for Chicagoans to rep their city."
    },
    { id: 302,
      image: 'assets/images/screenshots/email-v2-results-mobile.jpg',
      caption: "Fully responsive site allowed users to an purchase email address with a few simple clicks."
    },
    { id: 303,
      image: 'assets/images/screenshots/email-cart.jpg',
      caption: "We mapped out and designed a simple purchase process that is fully responsive."
    },
    { id: 400,
      image:  'assets/images/screenshots/hermes-icons.jpg' ,
      caption: "Designed and implemented a complete set of custom icons for the Hermes platform."
    },
    { id: 401,
      image:  'assets/images/screenshots/hermes-v1-home.jpg' ,
      caption: "Fully responsive layouts used across 44 suburban publications."
    },
    { id: 402,
      image:  'assets/images/screenshots/hermes-v2-home.jpg' ,
      caption: "Redesigned homepage layout. Client requested a more folksy look for suburban publications."
    },
    { id: 403,
      image:  'assets/images/screenshots/hermes-v2-home-mobile.jpg',
      caption: "Responsive mobile layouts for redesign."
    },
    { id: 404,
      image:  'assets/images/screenshots/hermes-v2-nav.jpg' ,
      caption: "Responsive navigation for redesign. Offered color options"
    },
    { id: 500,
      image: 'assets/images/screenshots/vs-home.jpg',
      caption: "Completed redesign of Vivid Seats site and branding. Homepage layout features top performing events and top level navigation."
    },
    { id: 501,
      image: 'assets/images/screenshots/vs-event.jpg',
      caption: "Event page offers interactive seating chart and detailed ticket information."
    },
    { id: 502,
      image: 'assets/images/screenshots/vs-login.jpg',
      caption: "My accounts allows users to check purchase status, sales status, and newsletter settings."
    },
    { id: 600,
      image: 'assets/images/screenshots/hsc-splash.jpg',
      caption: "Count down page prior to site release."
    },
    { id: 601,
      image: 'assets/images/screenshots/hsc-home.jpg',
      caption: "Season Pass showcased high school sports offering stats, highlights and schedules."
    },
    { id: 602,
      image: 'assets/images/screenshots/hsc-guide.jpg',
      caption: "Style guides allowed us to inventory each widget we included on the site. This included markdown for interns to plug into the system for ease of use."
    },
  ]
});

export default Related;