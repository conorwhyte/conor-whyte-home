import {useState, useEffect} from 'react';
import NotePreview from '../Preview/ViewerText';
import EditorMenu from './EditorMenu';
import EditorForm from './EditorForm';
import { 
    addProject, 
    getProject, 
    updateProjectForId 
} from '../api/project.service';
import { useLocation } from '../utils/LocationContext';
import { getSelectedId } from '../store/selectors';
import './ProjectEditor.scss';

export default function ProjectEditor({initialTitle, initialBody}) {
  const [ state ] = useLocation();
  const [ title, setTitle ] = useState(initialTitle);
  const [ body, setBody ] = useState(initialBody);
  const projectId = getSelectedId(state); 

  const saveAction = () => {
    if (projectId) {
        updateProjectForId(title, body, projectId);
    } else {
        addProject(title, body);
    }
  };

  useEffect(() => {
    getProject(projectId).then(project => {
        const { body, title } = project;
        
        setBody(body);
        setTitle(title);
    });
  }, [projectId]);
  
  return (
    <div className="note-editor">
        <EditorForm 
            body={body} 
            title={title} 
            setTitle={setTitle} 
            setBody={setBody}
        />
      
      <div className="note-editor-preview">
        <EditorMenu projectId={projectId} saveAction={saveAction} />
        
        <div className="label label--preview" role="status">
          Preview
        </div>
        <h1 className="note-title">{title}</h1>
        
        <NotePreview title={title} body={body} />
      </div>
    </div>
  );
}
