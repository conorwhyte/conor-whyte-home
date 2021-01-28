import { deleteProjectForId } from '../api/project.service';
import './ProjectEditor.scss';

export default function EditorMenu({projectId, saveAction}) {
  const isDraft = projectId === null;

  return (
    <div className="note-editor-menu" role="menubar">
        <button
            className="note-editor-done"
            onClick={saveAction}
            role="menuitem"
        >
            <img
                src="checkmark.svg"
                width="14px"
                height="10px"
                alt=""
                role="presentation"
            />
            Done
        </button>
        
        {!isDraft && (
            <button
                className="note-editor-delete"
                onClick={() => deleteProjectForId(projectId)}
                role="menuitem"
            >
                <img
                    src="cross.svg"
                    width="10px"
                    height="10px"
                    alt=""
                    role="presentation"
                />
                Delete
            </button>
        )}
    </div>
  );
}
