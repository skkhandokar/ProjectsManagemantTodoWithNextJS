import React, { useState } from 'react';
import { Button, Input } from 'antd';
import useProjectStore from '@/app/store/projectStore';

export default function ProjectItem({ project, setViewProject }) {
  const deleteProject = useProjectStore((state) => state.deleteProject);
  const editProject = useProjectStore((state) => state.editProject);
  const [editProjectId, setEditProjectId] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');

  const handleView = () => {
    setViewProject(project);
  };

  const handleDelete = () => {
    deleteProject(project.id);
  };

  const handleEdit = () => {
    setEditProjectId(project.id);
    setEditedTitle(project.title);
  };

  const handleSaveEdit = () => {
    editProject(project.id, editedTitle);
    setEditProjectId(null);
  };

  return (
    <li className="flex items-center justify-between">
      {editProjectId === project.id ? (
        <Input value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
      ) : (
        <h2 className="text-white font-bold hover:underline animate-fade-in">{project.title}</h2>
      )}
      <div className="mt-3 mb-5">
        <Button type="primary" className="mr-2" onClick={handleView}>View</Button>
        {editProjectId === project.id ? (
          <Button type="primary" className="mr-2" onClick={handleSaveEdit}>Save</Button>
        ) : (
          <Button type="primary" className="mr-2" onClick={handleEdit}>Edit</Button>
        )}
        <Button className="mr-2 text-red-400" type="danger" onClick={handleDelete}>Delete</Button>
      </div>
    </li>
  );
}
