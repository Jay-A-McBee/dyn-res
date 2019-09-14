import React from 'react';
import { render } from 'react-dom';
import AboutMe from './Containers/about-page';
import * as serviceWorker from './serviceWorker';

render(<AboutMe />, document.getElementById('app'));
serviceWorker.register();
