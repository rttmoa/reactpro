import React from "react";
import "./index.less";
import { Card, Row } from "antd";

const editorMarkdown = () => {
  return (
    <div className="markdown_wrapper">
      <Row>
        <Col>
          <Card>
            <Markdown></Markdown>
          </Card>
        </Col>
        <Col>
          <Card>
            <pre></pre>
          </Card>
        </Col>
        <Col>
          <Card>
            <pre></pre>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default editorMarkdown;
