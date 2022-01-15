import { Col, Row } from 'antd';
import React, { useState } from 'react';
import InputWords from './components/InputWords';
import BoardResult from './components/BoardResults';


function App() {
  const [data, setData] = useState([])
  const handleSetData = (data) => {
    setData([...data])
  }
  console.log("data app: ", data)

  return (
    <>
      <h1 style={{textAlign: "center", marginTop: "150px"}}>Ghép chữ tiếng Việt thành câu</h1>
      <div className="app" style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%"}}>
        <Row style={{width: "50%"}}>
          <InputWords handleSetData={handleSetData} />
          <BoardResult data={data} />
        </Row>
      </div>
    </>
  );
}

export default App;
