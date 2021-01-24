import { useState } from 'react';
import excerpts from 'excerpts';
import marked from 'marked';
import ItemToggle from './ItemToggle';
import './SidebarItem.scss';

export default function SidebarNote({note}) {
  const lastUpdatedAt = 'hh/mm';
  const summary = excerpts(marked(note.description), {words: 20});
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`sidebar-note-list-item ${isExpanded ? 'note-expanded' : ''}`}>
      <header className="sidebar-note-header">
        <strong>{note.name}</strong>
        <small>{lastUpdatedAt}</small>
      </header>
    
      <ItemToggle 
        id={note.id} 
        title={note.title} 
        isExpanded={isExpanded} 
        setIsExpanded={setIsExpanded} 
      />
      
      {isExpanded && <p className="sidebar-note-excerpt">{summary || <i>(No content)</i>}</p>}
    </div>
  );
}
