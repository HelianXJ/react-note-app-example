
var React = require('react');
var Note = require('./Note.jsx');

var NoteList = React.createClass({

	getInitialState: function () {
		return {activeNoteId:null};
	},

	setActiveNote: function () {
		this.setState({activeNoteId: id});
	},

	render: function () {
		var self = this,
			note = this.props.notes.concat().reverse();

		var noteNodes = notes.map(function (note) {
			return {
				<Note key={note._id} active={self.state.activeNoteId === note._id} note={note} onEdit={self.props.onEdit} onSelect={self.setActiveNote}/>
			};
		});

		return (
			<div className="list-group">
                {noteNodes}
            </div>
		)
	}
});