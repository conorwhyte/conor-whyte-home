import './ProjectEditor.scss';

export default function EditorMenu({noteId}) {
  const isDraft = noteId === null;

  return (
    <div className="note-editor-menu" role="menubar">
        <button
            className="note-editor-done"
            onClick={() => null
                // handle save
            }
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
                onClick={() =>  null
                    // handle delete
                }
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
