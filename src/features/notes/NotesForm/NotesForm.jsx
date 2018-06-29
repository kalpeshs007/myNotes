import React, { Component } from 'react';

class NotesForm extends Component {

state = {
    note: {
        title: '',
        body: '',
        date: '',
        createdBy: ''
    }
}

onFormSubmit = (note) => {
    note.preventDefault();
    this.props.createNote(this.state.note);
  }

onInputChange = (note) => {
    const newNote = this.state.note;
    newNote[note.target.name] = note.target.value;
    this.setState({
      note : newNote
    })
  }

  render() {
    const {note} = this.state;

    return (
        <form onSubmit={this.onFormSubmit}>
        <div className="container">
            <div className="row">
                <div className="col s12 card blue-grey darken-1">
                <div className="row">

                    <div className="input-field col s12">
                        <input onChange={this.onInputChange} value={note.title} name="title" placeholder="Enter Note Title Here" id="note_title" type="text" className="validate" />
                    </div>

                    <div className="input-field col s12">
                        <input onChange={this.onInputChange} value={note.body} name="body" placeholder="Enter Content Here" id="note_body" type="text" className="validate" />
                    </div>

                    <div className="row">
                        <div className="col s4">
                            <input onChange={this.onInputChange} value={note.date} name="date" type="date" className="date" />
                        </div>
                        <div className="col s4">
                            <input onChange={this.onInputChange} value={note.createdBy} name="createdBy" placeholder="Created By" id="createdby" type="text" className="validate" />
                        </div>
                        <div className="col s4">
                            <button type="submit" className="waves-effect waves-light btn">Submit</button>
                        </div>
                    </div>

                </div>
                </div>
            </div>
        </div>
        </form>
    )
  }
}

export default NotesForm;