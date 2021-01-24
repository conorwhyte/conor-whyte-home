import './ProjectEditor.scss';

export default function EditorForm({
    body, 
    setBody,
    setTitle,
    title, 
}) {

    return (
        <form
            className="note-editor-form"
            autoComplete="off"
            onSubmit={(e) => e.preventDefault()}
        >
            <label className="offscreen" htmlFor="note-title-input">
                Title
            </label>
            <input
                id="note-title-input"
                type="text"
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
            />
            
            <label className="offscreen" htmlFor="note-body-input">
                Body in markdown
            </label>
            <textarea
                id="note-body-input"
                value={body}
                onChange={(e) => {
                    setBody(e.target.value);
                }}
            />
        </form>
    );
}

