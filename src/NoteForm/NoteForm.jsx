import React,{Component} from 'react';
import './NoteForm.css';

class NoteForm extends Component{
    constructor(){
        super();
        this.addNote=this.addNote.bind(this);
    }
    addNote(){
        this.props.addNote(this.TextInput.value);
        this.TextInput.value='';
        this.TextInput.focus();
    }
    render(){
        return(
            <div className="NoteForm">
                <input 
                ref={input => {this.TextInput=input;}}
                placeholder="Escribe una nota"
                type="text" />
                <button
                onClick={this.addNote}
                >
                    Add Note
                </button>
            </div>
        )
    }
}
export default NoteForm;