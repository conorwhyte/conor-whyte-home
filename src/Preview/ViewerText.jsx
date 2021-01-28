import MarkdownViewer from './MarkdownViewer';

export default function ViewerText({body}) {
  return (
    <div>
      <MarkdownViewer text={body} />
    </div>
  );
}
