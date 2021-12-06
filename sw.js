"use strict";

self.addEventListener('install', function(event) {
    console.log('from sw: install event', event);
});

self.addEventListener('activate', function(event) {
    console.log('from sw: activate event', event);
});