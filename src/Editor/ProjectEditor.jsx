import {useState} from 'react';
import NotePreview from '../Preview/ViewerText';
import EditorMenu from './EditorMenu';
import EditorForm from './EditorForm';
import './ProjectEditor.scss';

export default function ProjectEditor({noteId, initialTitle, initialBody}) {
  const [title, setTitle] = useState(initialTitle);
  const [body, setBody] = useState(initialBody);

  return (
    <div className="note-editor">
        <EditorForm 
            body={body} 
            title={title} 
            setTitle={setTitle} 
            setBody={setBody}
        />
      
      <div className="note-editor-preview">
        <EditorMenu noteId={noteId} />
        
        <div className="label label--preview" role="status">
          Preview
        </div>
        <h1 className="note-title">{title}</h1>
        
        <NotePreview title={title} body={body} />
      </div>
    </div>
  );
}
