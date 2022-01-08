import React from "react";
import { Col, Table } from "antd";

const BoardResult = () => {
    const data = [
        {
            sentence: "Câu tiếng việt nè!! <3",
            point: 100,
            key: 1,
        }
    ];

    const columns = [
        {
            title: "STT",
            dataIndex: "key",
            render: (_, record) => record.key,
        },
        {
            title: "Câu đã sắp xếp",
            dataIndex: "sentence",
            render: (_, record) => record.sentence,
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
