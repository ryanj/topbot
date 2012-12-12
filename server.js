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

var sudobot = jerk( function( j ) {
  j.watch_for( 'soup', function( message ) {
    message.say( message.user + ': soup is good food!' )
  })

  j.watch_for( /^(.+) are silly$/, function( message ) {
    message.say( message.user + ': ' + message.match_data[1] + ' are NOT SILLY. Don\'t joke!' )
  })

  j.watch_for( /^<3$/, function( message ) {
    message.say( message.user + ': ' + ' <3' )
  })

  j.watch_for( /^say (.+)$/, function( message ) {
    console.log( message )
    console.log( "source is:" + message.source )
    if(message.source[1] !== "#"){
      message.msg( message.user + ': you got it!' )
      sudobot.say( '#sudoroom', message.match_data[1] )
    }
  })

  j.watch_for( /^yarr$/, function( message ) {
    message.say( message.user + ': ' + 'Arrr Matey!' )
  })

}).connect( irc_options )
