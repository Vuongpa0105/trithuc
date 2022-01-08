import { Col, Row } from 'antd';
import React from 'react';
import InputWords from './components/InputWords';
import BoardResult from './components/BoardResults';


function App() {
  return (
    <>
      <h1 style={{textAlign: "center", marginTop: "150px"}}>Ghép chữ tiếng Việt thành câu</h1>
      <div className="app" style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%"}}>
        <Row style={{width: "50%"}}>
          <InputWords />
          <BoardResult />
        </Row>
      </div>
    </>
  );
}

export default App;
