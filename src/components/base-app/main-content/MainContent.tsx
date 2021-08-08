import {FC, useState} from "react";
import './MainContent.css';
import {Button} from "antd";
import InviteDialog from "../invite-dialog/InviteDialog";

const MainContent:FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <div className="content">
      <div>
        <div className="slogan">A better way to enjoy everyday</div>
        <div className="subTitle">Be the first to know when we launch</div>
        <Button type="primary" onClick={showModal}>Request an invite</Button>

        <InviteDialog show={isModalVisible} setShow={setIsModalVisible} />
      </div>

    </div>
  );
}

export default MainContent;
