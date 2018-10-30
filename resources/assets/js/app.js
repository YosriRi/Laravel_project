
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Website
require('./components/website/activity/detail/Activity');
require('./components/website/header/Header');
require('./components/website/footer/Footer');
require('./components/website/slide/Slide');
require('./components/website/login/Login');
require('./components/website/other/Other');
require('./components/website/payment/Payment');
require('./components/website/register/Register');
require('./components/website/profile/Profile');
require('./components/website/reservation/Reservation');
require('./components/website/visualize-photo/VisualizePhoto');
require('./components/website/searchResult/SearchResult');
require('./components/website/about/About');
require('./components/website/home/Home');

// Backoffice
require('./components/backoffice/App');
require('./components/backoffice/Login');