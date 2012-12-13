#!/bin/env node
//  OpenShift sample Node application
//var express = require('express');

var irc = require('irc');
var bot = new irc.Client('chat.freenode.net', 'topbot', {
    channels: ['#botwar', '#botzoo'],
    port: 8001,
    password: process.env.IRC_PASSWD,
    debug: true
});

console.log("PROCESS>ENV>IRC_PASS ISSS   ====   " + process.env.IRC_PASSWD);

bot.addListener('message', function(from, to, message) {
   if(message.indexOf('yarr') > -1) {
        bot.say(to, 'Arrr indeed!');
   }
});

bot.addListener('pm', function (from, message) {
    if( message.slice(0,4) == 'say '){
        bot.say('#sudoroom', message.slice(4));
    }
    console.log(from + ' => ME: ' + message);
});

//var sudobot = jerk( function( j ) {
//  j.watch_for( 'soup', function( message ) {
//    message.say( message.user + ': soup is good food!' )
//  })
//  j.watch_for( /^(.+) are silly$/, function( message ) {
//    message.say( message.user + ': ' + message.match_data[1] + ' are NOT SILLY. Don\'t joke!' )
//  })
//  j.watch_for( /^say (.+)$/, function( message ) {
//    if(message.source[1] !== "#"){
//      message.msg( message.user + ': you got it!' )
//      sudobot.say( '#sudoroom', message.match_data[1] )
//    }
//  })
//}).connect( irc_options )
