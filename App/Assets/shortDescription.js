export const projectDescriptions = {};

projectDescriptions.admin = {
	title:'SPLT Dashboard',
	role:'A bill-splitting app',
	tasks:[
		'React, Redux',
		'Redux-Saga',
		'd3'
   	]
};

projectDescriptions.splt = {
	title:'SPLT Carpooling',
	role:'A bill-splitting app',
	tasks:[
		'React Native', 
		'Redux',
		'Redux-Saga'
   	]
};

// projectDescriptions.slide = {
// 	title:'Slide Calculator',
// 	role:'A bill-splitting app',
// 	tasks:[
// 		'React Native',
// 		'Styled Components'
//    	],
// 	link: 'https://github.com/Jay-A-McBee/rn_slide_calc'
// };

projectDescriptions.fairshare = {
	title:'Fairshare',
	role:'A bill-splitting app',
	tasks:[
		'React/Redux',
		'Node.js/Express',
	  	'Passport OAuth 2.0'
   	],
	link: 'https://github.com/AngryPulpGophers/fairshare'
};

projectDescriptions.journeymen ={
	title:'Journeymen',
	role:'A local musician directory',
	tasks:[
		'Node.js/Express',
		'PostgreSQL',
		'Passport OAuth 2.0'
	],
	link: 'https://github.com/getJourneymen/Journeymen'
};

projectDescriptions.sentimentalist = {
	title:'Sentimentalist',
	role: 'A search engine/sentiment analyser',
	tasks:[
		'Angular', 
    	'Node.js/Express',
    	'PostgreSQL'
  ]
};

projectDescriptions.vue ={
	title:'Apt Finder',
	role: 'I was curious about Vue and moving to Seattle so I built this for apartment hunting.',
	tasks:[
		'Vue',
		'Vuex',
		'Node.js/Express'
	],
	link: 'https://github.com/Jay-A-McBee/vue-apt-finder',
	icon: ['fab', 'vuejs']
};

projectDescriptions.slide = {
	title: 'Slide Calc',
	role: "In the parlance of a Texan--\'trading tools'\. If you're brokering a cattle deal, this app will make it a breeze.",
	tasks:[
		'React-Native',
	  	'Styled-Components'
	],
	link: 'https://github.com/Jay-A-McBee/rn_slide_calc',
	icon: ['fab', 'react']
};

projectDescriptions.portfolio = {
	title: 'Portfolio v2',
	role: 'This very screen you are scrolling was in need of some serious React refactors.',
	tasks:[
		'React (hooks API)',
		'Styled-Components' 
	],
	link: 'https://github.com/Jay-A-McBee/dyn-res',
	icon:['fab', 'react']
};

projectDescriptions.sandbox = {
	title: 'Sandbox',
	role: 'I went ham with generators on this one - a contacts manager that\'s never .done',
	tasks:[
		'React', 
		'Redux Saga',
	  	'bluebird coroutine'
	],
	link: 'https://github.com/Jay-A-McBee/yield-contacts',
	icon: ['fab', 'node']
};

export const work = {
    ClickTripz: {
      title: 'Software Engineer @',
      href: 'https://www.clicktripz.com',
      dates: 'March 2017 - Present',
      description: {
        a: 'Write efficient and unobtrusive JS that extends CT propietary ad-tech framework (CTI)',
        b: 'Work with S3 data storage and Riot.js to build out admin dashboard analytics tooling',
        c: 'Provide direct support to client tech teams integrating CT software on high-traffic sites (~50k-100k uniques/week)'
      }
    },
    SPLT: {
      title: 'Software Engineer @',
      href: 'https://www.splt.io',
      dates: 'Sept 2016 - April 2017',
      description: {
        a:'Contributed to a few different products including an enterprise-first carpooling mobile app, an accompanying analytics dashboard, and a non-emergency medical transport dispatch portal',
        b:'Worked extensively with React and React-Native to create a reusable component library',
        c:'Integrated multiple third-party APIs including PayPal, Stripe, Google Geolocate and Edmund\'s',
      }
    },
    HackReactor: {
      title: 'Software Engineering Student',
      dates: 'March 2016 - June 2016',
      description: {
        a:'Completed a rigourous class schedule combining computer science fundamentals with modern software development best practices',
        b:'Worked with a modern JS stack including frontend and backend frameworks',
        c:'Produced three full-stack JS applications as part of a four person team that included a bill-splitting app, a local musician directory and a sentiment analysis app',
      }
    }
  }
