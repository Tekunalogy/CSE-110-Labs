// script.js

import { router } from './router.js'; // Router imported so you can use it to manipulate your SPA app here
const setState = router.setState;

// Make sure you register your service worker here too
document.addEventListener('DOMContentLoaded', () => {
  fetch('https://cse110lab6.herokuapp.com/entries')
  .then(response => response.json())
  .then(entries => {
    let counter = 1;
      entries.forEach(entry => {
        const count = counter;
        let newPost = document.createElement('journal-entry');
        newPost.entry = entry;
        newPost.onclick = function () {
          setState({page: "Entry", num: count, entry: entry}, false);
        }
        counter += 1;
        document.querySelector('main').appendChild(newPost);
      });
    });
    setState({page: "Home"}, false);
});

let settings = document.getElementsByTagName('img')[0];
settings.onclick = function () {
  setState({page: "Settings"}, false);
};

let home = document.getElementsByTagName('h1')[0];
home.onclick = function () {
  setState({page: "Home"}, false);
};

window.addEventListener('popstate', (event) => {
  setState(event.state, true);
});

