import React from "react";
import { Col, Table } from "antd";

const BoardResult = ({ data }) => {
    console.log("data: ", data)
    data.length = 10
    const columns = [
        {
            title: "Câu đã sắp xếp",
            dataIndex: "value",
            render: (_, record) => record.value,
        },
        {
            title: "Điểm",
            dataIndex: "point",
            render: (_, record) => record.point,
        },
    ];

    return (
        <>
            <h2>Bảng kết quả:</h2>
            <Col span={24}>
                <Table dataSource={data} columns={columns} />
            </Col>
        </>

    );
};

export default BoardResult;
