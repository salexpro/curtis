// eslint-disable-next-line no-unused-vars
// import polyfill from '@babel/polyfill';

import $ from 'jquery';
import svg4everybody from 'svg4everybody';
import './lib/foundation-explicit-pieces';
import fullpage from 'fullpage.js';

svg4everybody();

// const header = $('.header');

new fullpage('.wrap', {
    fixedElements: '.header',
    sectionSelector: 'section',
    scrollOverflow: true,
    verticalCentered: false,
    // onLeave: (origin, destination, direction) => {
    //     if(direction == 'up'){
    //         header.removeClass('is_hidden');
    //     } else {
    //         header.addClass('is_hidden');
    //     }
    // }
});