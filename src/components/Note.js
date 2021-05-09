import React from 'react';
import ReactDOM from 'react-dom';

class Note extends React.Component {
    render() {
        return(
            <div className="note">
                <div className="note-header">
                    <div className="note-title">
                        {this.props.note_title}
                    </div>
                </div>
                <div className="note-body">
                    {this.props.note_body}
                </div>
            </div>
        )
    }
}

export default Note;