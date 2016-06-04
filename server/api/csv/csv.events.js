/**
 * Csv model events
 */

'use strict';

import {EventEmitter} from 'events';
var Csv = require('../../sqldb').Csv;
var CsvEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
CsvEvents.setMaxListeners(0);

// Model events
var events = {
  'afterCreate': 'save',
  'afterUpdate': 'save',
  'afterDestroy': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Csv.hook(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc, options, done) {
    CsvEvents.emit(event + ':' + doc._MD5, doc);
    CsvEvents.emit(event, doc);
    done(null);
  }
}

export default CsvEvents;
