import { useEffect, useState } from "react";
import { Button, Col, Row, Select } from "antd";
import rawAdj from "../data/tinhtu.txt";
import rawNoun from "../data/danhtu.txt";
import rawVerb from "../data/dongtu.txt";
import FetchData from "../data/FetchData";
import { Point } from "./Constants";

const findTypeOfWord = (word, danhTu, dongTu) => {
    let typeOfWord = {
        value: word,
        types: []
    };
    let position = -1;
    // Find in string danh tu
    position = danhTu.search(word);
    if (position !== -1) {
        typeOfWord.types.push("DANH_TU");
    }
    // Find in string tinh tu
    position = dongTu.search(word);
    if (position !== -1) {
        typeOfWord.types.push("DONG_TU");
    }

    // Find in string dong tu
    return typeOfWord;
}

const InputWords = () => {
    const [noun, setNoun] = useState("");
    const [verb, setVerb] = useState("");
    const [words, setWords] = useState([""]);
    const handleSelectChange = (value) => {
        setWords(value);
    };
    const handleClick = () => {
        for (let i = 0; i < words.length; ++i) {
            const typesOfWord = findTypeOfWord(words[i], noun, verb);
            console.log(typesOfWord);
        }
    }

    useEffect(() => {
        FetchData(rawNoun).then(value => setNoun(value));
        FetchData(rawVerb).then(value => setVerb(value));
    }, [])

    return (
        <Col span={24} style={{ display: "flex", marginBottom: "20px" }}>
            <Select style={{ width: "100%" }} mode="tags" placeholder="Nhập các từ" onChange={handleSelectChange} />
            <Button type="primary" onClick={handleClick}>Sắp xếp</Button>
        </Col>
    );
};

export default InputWords;
