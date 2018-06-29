import React, { Component } from 'react';

class NotesList extends Component {
  render() {
    const {note} = this.props;
    return (
        <div className="container">
            <div className="row">
                <div className="col s12 card blue-grey darken-1">
                <ul>
                    <li><label>Title :</label>{note.title}</li>
                    <li><label>Content :</label>{note.body}</li>
                    <li><label>Date :</label>{note.date}</li>
                    <li><label>Created By :</label>{note.createdBy}</li>
                </ul> 
                </div>
            </div>
        </div>
    )
  }
}

export default NotesList;