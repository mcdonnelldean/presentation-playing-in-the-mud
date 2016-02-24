'use strict'

var bespoke = require('bespoke')
var classes = require('bespoke-classes')
var keys = require('bespoke-keys')
var touch = require('bespoke-touch')
var pdf = require('bespoke-pdf')
var bullets = require('bespoke-bullets')
var backdrop = require('bespoke-backdrop')
var scale = require('bespoke-scale')
var hash = require('bespoke-hash')
var progress = require('bespoke-progress')
var run = require('bespoke-run')

bespoke.from('article', [
  classes(),
  keys(),
  touch(),
  run(),
  pdf(),
  bullets('li, .bullet'),
  backdrop(),
  scale(),
  hash(),
  progress()
])

require('prism')
