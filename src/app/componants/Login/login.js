'use client'

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "../../../../UI/Toast/Login.module.css";
import Toast from "../../../../UI/Toast/Toast";
import useBearStore from "../../store/LoginStore";

const Login = () => {
  const [toast, setToast] = useState({
    showToast: false,
    message: "",
    type: "",
  });
  const router = useRouter();
  const setIsUserValid = useBearStore((state) => state.setIsUserValid);

  const onSubmitHandler = async (values) => {
    try {
      const { username, password } = values;

      const dbUsername = "test";
      const dbPassword = "test1@23";

      if (username === dbUsername && password === dbPassword) {
        setIsUserValid(true);
        router.push("/projects");
      } else {
        setToast({
          showToast: true,
          message: "Invalid username or password.",
          type: "danger",
        });
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="flex justify-center h-700 items-center">
      <Form className={styles["form"]} onFinish={onSubmitHandler}>
        <div className="ml-[80px] flex items-center justify-center bg-gray-200 h-40 w-40 rounded-full overflow-hidden">
          <div className="h-36 w-36 flex flex-col items-center justify-center">
            <div className="head bg-gray-300 rounded-full h-10 w-10"></div>
            <div className="body bg-gray-300 rounded-3xl h-14 w-14"></div>
          </div>
        </div>

        <p className="mt-6 text-2xl mb-5 text-white">Login</p>
        <div className={styles["inputs-div"]}>
          <Form.Item
            name="username"
            rules={[
              { required: true, message: "Please input your username! ex: test" },
              { min: 3, message: "Username should be at least 3 characters long." },
            ]}
          >
            <Input
              prefix={<UserOutlined />}
              type="text"
              placeholder="Username or email"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Please input your password! ex: test1@23" },
              { min: 8, message: "Password should be at least 8 characters long." },
            ]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button  type="primary" htmlType="submit" style={{ width: "100%" }}>
              Log In
            </Button>
          </Form.Item>
        </div>

       
      </Form>
      {toast.showToast ? (
        <Toast setToast={setToast} message={toast.message} type={toast.type} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Login;
