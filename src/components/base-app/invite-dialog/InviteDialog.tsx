import {FC, useState} from "react";
import './InviteDialog.css';
import {Button, Form, Input, Modal} from "antd";
import { UserOutlined, MailOutlined } from '@ant-design/icons';
import {Service} from "../../../services/service";

interface InviteDialogProp {
  show: boolean,
  setShow: (show: boolean) => void
}

const InviteDialog:FC<InviteDialogProp> = ({show, setShow}: InviteDialogProp) => {
  const [form] = Form.useForm();
  const [serverErrorMsg, setServerErrorMsg] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const sendInvite = () => {
    Service.sedInvite(form.getFieldValue('name'), form.getFieldValue('email')).then(() => {
      onShowSuccessfulModal();
    }).catch((error) => {
      setServerErrorMsg(error.response.data.errorMessage);
    }).finally(() => {
      setLoading(false);
    })
  }

  const handleOk = () => {
    setLoading(true);
    sendInvite();
  };

  const handleClose = () => {
    setShow(false);
  };

  const onShowSuccessfulModal = () => {
    setShow(false);
    Modal.success({
      title: 'All Done!',
      content: 'You will be one of the first to experience Broccoli & Co . when we launch',
      okText: 'OK',
      centered: true
    })
  }

  return (
    <Modal
      visible={show}
      onCancel={handleClose}
      closable={false}
      width={400}
      centered
      footer={null}
    >
      <div className="modalTitle">
        <div>Request an invite</div>
        <div>----</div>
      </div>
      <Form form={form} name="horizontal_login" onFinish={handleOk}>
        <Form.Item
          name="name"
          rules={[{ required: true, message: 'Missing Full Name!' }, { min: 3, message: 'At Least 3 Characters!'}]}
        >
          <Input
            disabled={loading}
            prefix={<UserOutlined />}
            placeholder="Full Name"
            allowClear
          />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Missing Email!' }, { type: 'email', message:'Not Email!' }]}
        >
          <Input
            disabled={loading}
            prefix={<MailOutlined />}
            placeholder="Email"
            allowClear
          />
        </Form.Item>

        <Form.Item
          name="emailToConfirm"
          rules={[
            { required: true, message: 'Missing Confirm Email!' },
            { type: 'email', message:'Not Email!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('email') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two emails that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input
            disabled={loading}
            prefix={<MailOutlined />}
            placeholder="Confirm email"
            allowClear
          />
        </Form.Item>

        <Form.Item shouldUpdate className='submitBtn'>
          <>
            <Button htmlType="submit" loading={loading} style={{width: '100%'}}>
              {loading ? 'Sending, please wait...' : "Send"}
            </Button>
            {serverErrorMsg && (<div className='errorMsg'><i>{serverErrorMsg}</i></div>)}
          </>
        </Form.Item>
      </Form>

    </Modal>
  );
}

export default InviteDialog;
