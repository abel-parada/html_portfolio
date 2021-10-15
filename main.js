'use strict';

document.getElementById('button').addEventListener('click', (e) => {
    e.preventDefault();

    document.documentElement.scrollTop = 0;
  });