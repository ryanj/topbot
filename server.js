#!/bin/env node
//  OpenShift sample Node application
var express = require('express');

var irc = require('irc');
var irc_client = new irc.Client('chat.freenode.net', 'bad_sudobot', {
    channels: ['#sudoroom'],
});

irc_client.addListener('message', function(from, to, message) {

        if(message.indexOf('yarr') > -1) {
                irc_client.say(to, 'Arrr Matey!');
        }
});

irc_client.addListener('message', function(from, to, message) {

    if(message.indexOf('<3') > -1) {
        irc_client.say(to, '<3');
    }
});

irc_client.addListener('message', function(from, to, message) {
    if(message == 'randomize') {
        irc_client.say(to, Math.round(Math.random() * 10));
    }
});

irc_client.addListener('pm', function (from, message) {
    if( message.slice(0,4) == 'say '){
        irc_client.say('#sudoroom', message.slice(4));
    }
    console.log(from + ' => ME: ' + message);
});
