import React, { useState } from 'react';
import { Modal, Form, Input, Select, Button } from 'antd';
import useProjectStore from '@/app/store/projectStore';

const { Option } = Select;

export default function ProjectForm({ isModalVisible, handleCancel }) {
  const addProject = useProjectStore((state) => state.addProject);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [task, setTask] = useState('');
  const [status, setStatus] = useState('');
  const [recentActivity, setRecentActivity] = useState('');
  const [teamMembers, setTeamMembers] = useState('');

  const handleSubmit = () => {
    const randomId = Math.floor(Math.random() * 1000); // Generate random ID
    if (title.trim() && description.trim() && task.trim() && status.trim() && recentActivity.trim() && teamMembers.trim()) {
      addProject({
        id: randomId,
        title,
        description,
        tasks: [task],
        status,
        recentActivity,
        team: teamMembers.split(',').map(member => member.trim()),
      });
      setTitle('');
      setDescription('');
      setTask('');
      setStatus('');
      setRecentActivity('');
      setTeamMembers('');
      handleCancel(); // Close the modal after adding the project
    }
  };

  return (
    <Modal
      title="Add New Project"
      visible={isModalVisible}
      onCancel={handleCancel}
      onOk={handleSubmit}
    >
      <Form layout="vertical">
        <Form.Item label="Title">
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </Form.Item>
        <Form.Item label="Description">
          <Input.TextArea value={description} onChange={(e) => setDescription(e.target.value)} />
        </Form.Item>
        <Form.Item label="Task">
          <Input value={task} onChange={(e) => setTask(e.target.value)} />
        </Form.Item>
        <Form.Item label="Status">
          <Select value={status} onChange={(value) => setStatus(value)}>
            <Option value="done">Done</Option>
            <Option value="complete">Complete</Option>
            <Option value="incomplete">Incomplete</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Recent Activity">
          <Input value={recentActivity} onChange={(e) => setRecentActivity(e.target.value)} />
        </Form.Item>
        <Form.Item label="Team Members (comma separated)">
          <Input value={teamMembers} onChange={(e) => setTeamMembers(e.target.value)} />
        </Form.Item>
      </Form>
    </Modal>
  );
}
