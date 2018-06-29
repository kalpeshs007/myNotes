import React, { Component } from 'react';
import NotesForm from '../NotesForm/NotesForm';
import NotesList from '../NotesList/NotesList';
import cuid from 'cuid';

const notesDashBoard = [
  {
    id: '1',
    title: 'test',
    body: 'hello',
    date: '01/01/2001',
    createdBy: 'testuser'
  }
]


class NotesDashboard extends Component {

  state = {
    notes: notesDashBoard,
    isOpen: false
  }

  handleFormOpen = () => {
    this.setState({
        isOpen: true
    })
  }

  handleCreateNote = newNote => {
    newNote.id = cuid();
    const updatedNotes = [...this.state.notes, newNote];
    this.setState({
        notes: updatedNotes,
        isOpen : false
    })
    }

  render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <button onClick={this.handleFormOpen} className="waves-effect waves-light btn">Create Notes</button>
                </div><br /><br /><br /><br />
                {this.state.isOpen && <NotesForm createNote={this.handleCreateNote} />}
            </div>
            {this.state.notes.map((note) => (
              <NotesList key={note.id} note={note} />
            ))}
        </div>
    )
  }
}

export default NotesDashboard;