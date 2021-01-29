import { useState, useCallback } from 'react';
import { format } from 'date-fns';
import excerpts from 'excerpts';
import marked from 'marked';
import ItemToggle from './ItemToggle';
import { getProject } from '../../../api/project.service';
import './SidebarItem.scss';

export default function SidebarNote({project}) {
  const [body, setBody] = useState('');
  const { title, updatedAt } = project;
  const updatedDate = new Date(updatedAt);
  const summary = excerpts(marked(body), {words: 6});
  const [isExpanded, setIsExpanded] = useState(false);

  const expandItem = useCallback((expansionState) => {
    getProject(project.id).then(project => {
      // This should be added to store to avoid dup calls
      setBody(project.body);
    });

    setIsExpanded(expansionState);
  }, [project]);    

  return (
    <div className={`sidebar-note-list-item ${isExpanded ? 'note-expanded' : ''}`}>
      <header className="sidebar-note-header">
        <strong>{project.title}</strong>
        <small>{format(updatedDate, "MMM yyyy")}</small>
      </header>
    
      <ItemToggle 
        id={project.id} 
        title={title} 
        isExpanded={isExpanded} 
        setIsExpanded={expandItem} 
      />
      
      {isExpanded && <p className="sidebar-note-excerpt">{summary || <i>(No content)</i>}</p>}
    </div>
  );
}
