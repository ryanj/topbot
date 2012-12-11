#!/bin/env node
//  OpenShift sample Node application
//var express = require('express');
var jerk = require( 'jerk' )
//var irc = require('irc');

var bot_name = 'bad_sudobot';
var irc_options =
  { server: 'irc.freenode.net'
  , nick: bot_name
  , channels: [ '#sudoroom' ]
  }

jerk( function( j ) {
  j.watch_for( 'soup', function( message ) {
    message.say( message.user + ': soup is good food!' )
  })

  j.watch_for( /^(.+) are silly$/, function( message ) {
    message.say( message.user + ': ' + message.match_data[1] + ' are NOT SILLY. Don\'t joke!' )
  })

  j.watch_for( /^<3$/, function( message ) {
    message.say( message.user + ': ' + ' <3' )
  })

  j.watch_for( /^yarr$/, function( message ) {
    message.say( message.user + ': ' + 'Arrr Matey!' )
  })

}).connect( irc_options )

//irc_client.addListener('pm', function (from, message) {
//    if( message.slice(0,4) == 'say '){
//        irc_client.say('#sudoroom', message.slice(4));
//    }
//    console.log(from + ' => ME: ' + message);
//});
//
//irc_client.addListener('connect', function() {
//    console.log(bot_name + 'connecting...');
//});
//irc_client.addListener('error', function(message) {
//    console.log('error: ', message);
//});
