import { CheckOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal, Select, Tag, Typography } from 'antd';
import { useState } from 'react';
import useProjectStore from '@/app/store/projectStore';

const { Title, Paragraph } = Typography;
const { Option } = Select;

export default function ProjectViewModal({ viewProject, setViewProject }) {
  const updateProject = useProjectStore((state) => state.updateProject);
  const [task, setTask] = useState('');
  const [teamMember, setTeamMember] = useState('');
  const [status, setStatus] = useState(viewProject.status);

  const handleViewModalCancel = () => {
    setViewProject(null);
  };




  const updateStatus = () => {
    updateProject({ ...viewProject, status });
    setViewProject(null);
  };

  return (
    <Modal
      title={`Project: ${viewProject.title}`}
      visible={true}
      onCancel={handleViewModalCancel}
      footer={null}
    >
      <Title level={3} className="text-green-500">Tasks:</Title>
      <ul className="flex flex-wrap list-none p-0 m-0">
        {viewProject.tasks.map((task, index) => (
          <li key={index} className="mr-2 mb-2">
            <Tag icon={<CheckOutlined />} color="success" className="whitespace-normal break-words">
              {task}
            </Tag>
          </li>
        ))}
      </ul>
      <Paragraph>Status: {viewProject.status}</Paragraph>
      <Paragraph>Recent Activity: {viewProject.recentActivity}</Paragraph>
      <Paragraph>Team Members: {viewProject.team.join(', ')}</Paragraph>
      <Form layout="vertical">

      <Form.Item label="Add Task">
      <Input value={task} onChange={(e) => setTask(e.target.value)} />
      <Button onClick={() => {
                viewProject.tasks.push(task);
                setTask('');
              }} icon={<PlusOutlined />} />
      </Form.Item>
      
      <Form.Item label="Add Team Member">
      <Input value={teamMember} onChange={(e) => setTeamMember(e.target.value)} />
              <Button onClick={() => {
                viewProject.team.push(teamMember);
                setTeamMember('');
              }} icon={<PlusOutlined />} />
      </Form.Item>

      <Form.Item label="Change Status">
          <Select value={status} onChange={(value) => setStatus(value)}>
            <Option value="done">Done</Option>
            <Option value="complete">Complete</Option>
            <Option value="incomplete">Incomplete</Option>
        </Select>
        <Button onClick={updateStatus}>Update Status</Button>
      </Form.Item>

      </Form>
    </Modal>
  );
}