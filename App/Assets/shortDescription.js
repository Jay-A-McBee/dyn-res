
let descriptions = module.exports;

descriptions.fairshare = {
	title:'Fairshare',
	role:'Full-stack',
	desc: 'A bill-splitting app built with React, Redux, Node, Express and PostgreSQL.',
	tasks:['Co-architected a RESTful Node.js/Express server that handled GET/POST/PUT/DELETE client requests',
    'Incorporated multiple Passport OAuth 2.0 authentication strategies--Facebook, Google+ and Local', 
    'Used React/Redux extensively to create multiple modal views, payment and link/unlink social account features'],
	link: 'https://github.com/AngryPulpGophers/fairshare'
} ;

descriptions.jmen ={
	title:'Journeymen',
	role:'Back-end',
	desc:'A local musician directory built with Angular, Node, Express and PostgreSQL.',
	tasks:['Architected a RESTful Node.js/Express server that handled GET/POST/PUT/DELETE client requests',
		'Designed and implemented database schemas using PostgreSQL and knex.js',
		'Integrated Passport OAuth 2.0 Soundcloud authentication strategy'],
	link: 'https://github.com/getJourneymen/Journeymen'
};

descriptions.sentiment = {
	title:'Sentimentalist',
	role: 'Full-stack',
	desc: 'A search engine/sentiment analysis built with Angular, Node, Express and PostgreSQL.',
	tasks:['Created a  ‘My Favorites’ feature allowing users to add/remove articles to/from their profile', 
    'Established Node.js/Express endpoints and implemented database schemas using PostgreSQL and Knex.js',
    'Built AngularJS partial-views to display elements based on logged-in state and ‘favorite status’'],
  link: 'https://github.com/getJourneymen/all-american-regex'
} ;

descriptions.kitkat ={
	title:'About Cats',
	role:'Front/Back end',
	desc: 'An education app built with Angular, Node and Express.',
	tasks:['Architected a RESTful Node.js/Express server that handled GET/POST client requests',
		'Implemented draggable icon UI for the tactile view using AngularJS and jQuery UI',
		'Utilized an external API that provided topic facts and allowed client contributions to affect database']
} ;

descriptions.electric = {
	title: 'Digital Range',
	role: 'Front/Back-end',
	desc: 'A livestock sale form app built with Angular, Node and Express.',
	tasks:['Using formly-form directive to trim existing codebase by over 1000 lines',
	  'Incorporating node-mailer to send completed form data to both seller and listing service'],
	current: '*current project'
} ;

descriptions.sandBox = {
	title: 'Bleeding Edge',
	role: 'Full-stack',
	desc: 'A repo where I experiment--currently a contacts manager built with React, Redux, Node, Express and Cassandra',
	tasks:['Utilized Redux Saga middleware and ES6 generator functions to handle async side-effects',
	  'Used bluebird promise lib to convert express routes to promise yielding generator functions',
	  'Designed a simple Cassandra configuration using the Node Cassandra driver'],
	link: 'https://bitbucket.org/jay_mcbee/contact-react-redux-lib'
}
