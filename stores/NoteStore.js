var Reflux = require('reflux');
var NoteActions = require('../actions/NoteActions');

var _notes = [];//This is private notes arrayvar

var NoteStore = Reflux.createStore({
	// Here we listen to actions and register callbacks
	init: function () {
		this.listenTo(NoteActions.createNote, this.onCreate);
		this.listenTo(NoteActions.editNote, this.onEdit);
	},

	onCreate: function (note) {
		_notes.push(note); 
		// Trigger an event once done so that our components can update. Also pass the modified list of notes.
		this.trigger(_notes);
	},

	onEdit: function (note) {
		// Update the particular note item with new text.
		for (var i = 0; i < _notes.length; i++ ) {
			if (_notes[i]._id === id) {
				_notes[i].text = note.text;
				this.trigger(_notes);
				break;
			}
		}
	},
	//getter for notes
	getNotes: function () {
		return _notes;
	},
	//getter for finding a single note by id
	getNote: function (id) {
		for (var i = 0; i < _notes.length; i++ ) {
			if (_notes[i]._id === id) {
				return _notes[i];
			}
		}
	}
});

module.exports = NoteStore;