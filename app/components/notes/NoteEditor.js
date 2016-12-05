import React, { Component } from 'react';


var NoteEditor = React.createClass({
    getInitialState: function() {
        return {
            text: '',
            isButtonActive: false
        };
    },

    handleTextChange: function(event) {
      const text = event.target.value;

      if (text.length === 0) {
        this.setState({ text: '' });
      } else {
        this.setState({ text: event.target.value });
        this.setState({ isButtonActive: true });
      }

    },

    handleNoteAdd: function() {

        var newNote = {
            text: this.state.text,
            color: 'yellow',
            id: Date.now()
        };
        if (this.state.isButtonActive) {
        this.props.onNoteAdd(newNote);
        this.setState({ text: '' });
        this.setState({ isButtonActive: false });
      }
    },

    render: function() {
        return (
            <div className="note-editor">
                <textarea
                    placeholder="Enter your note here..."
                    rows={4}
                    className="textarea"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                { (!this.state.isButtonActive) ? (
                <button className="not-button">Type</button>
              ) : (
                <button className="add-button" onClick={this.handleNoteAdd}>Add</button>
              )}
            </div>
        );
    }
});

export default NoteEditor;
