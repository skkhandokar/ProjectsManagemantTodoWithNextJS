// store/projectStore.js

import { create } from 'zustand';

const useProjectStore = create((set) => {
  return {
    projects: [],
    setProjects: (projects) => set({ projects }),
    deleteProject: (projectId) =>
      set((state) => ({
        projects: state.projects.filter((project) => project.id !== projectId),
      })),
    updateProject: (updatedProject) =>
      set((state) => ({
        projects: state.projects.map((project) =>
          project.id === updatedProject.id ? updatedProject : project
        ),
      })),
    editProject: (id, editedTitle) =>
      set((state) => ({
        projects: state.projects.map((project) =>
          project.id === id ? { ...project, title: editedTitle } : project
        ),
      })),
    addProject: (newProject) =>
      set((state) => ({
        projects: [...state.projects, { id: state.projects.length + 1, ...newProject }],
      })),
  };
});

export default useProjectStore;
