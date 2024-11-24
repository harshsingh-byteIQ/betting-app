import { Button, Col, Input, Row } from "antd";
import "./header.module.scss";

const HeaderComponent = () => {
  return (
    <Row align="middle" justify="space-between">
      <Col style={{paddingTop:"2vh"}}>
        <Input.Search placeholder="Search Event..." style={{ width: 400 }} />
      </Col>
      <Col>
        <Button
          style={{
            backgroundColor: "#d4af37",
            width: "5vw",
            color: "black",
            fontWeight: 600,
            height: "5vh",
            border: "1px solid white",
          }}
          type="primary"
        >
          Login
        </Button>
      </Col>
    </Row>
  );
};

export default HeaderComponent;
