import React,{Component} from 'react';
import './note.css';
class Note extends Component{
    constructor(props){
        super();
        this.noteId=props.noteId;
        this.noteContent=props.noteContent;
    }
    handleRemove(id){
       this.props.removeNote(id);
    }
    render(){
        return(
            <div className="Note">
                <span
                onClick={()=>this.handleRemove(this.noteId)}
                >&times;</span>
                <p>{this.noteContent}</p>
            </div>
        )
    }
}
export default Note;