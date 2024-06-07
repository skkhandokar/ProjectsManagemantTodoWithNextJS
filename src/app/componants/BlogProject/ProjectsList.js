import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { Button, Modal, Typography } from 'antd';
import getAllProjects from '../../../../lib/getAllProjects';
import useProjectStore from '@/app/store/projectStore';
import ProjectForm from './ProjectForm';
import ProjectItem from './ProjectItem';
import ProjectViewModal from './ProjectViewModal';


const { Title } = Typography;

export default function ProjectsList() {
  const { data, isLoading, isError } = useQuery('projects', getAllProjects);
  const setProjects = useProjectStore((state) => state.setProjects);
  const projects = useProjectStore((state) => state.projects);
  const [hasFetched, setHasFetched] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [viewProject, setViewProject] = useState(null);

  useEffect(() => {
    if (data && !hasFetched) {
      setProjects(data);
      setHasFetched(true);
    }
  }, [data, hasFetched, setProjects]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <main className="mt-10 mb-10">
      <div>
        <h1 className="font-40 flex justify-center mb-4">Here are all the Projects:</h1>
      </div>
      <Button type="primary" onClick={showModal}>Add Project</Button>
      <ProjectForm isModalVisible={isModalVisible} handleCancel={handleCancel} />
      <div>
        <ul className="mt-2 mb-5">
          {projects.map((project) => (
            <ProjectItem key={project.id} project={project} setViewProject={setViewProject} />
          ))}
        </ul>
      </div>
      {viewProject && (
        <ProjectViewModal viewProject={viewProject} setViewProject={setViewProject} />
      )}
    </main>
  );
}
