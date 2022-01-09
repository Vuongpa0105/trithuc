import { useEffect, useState } from "react";
import { Button, Col, Row, Select } from "antd";
import FetchData from "../data/FetchData";
import { Point } from "./Constants";

// Import txt file 
import TINH_TU from "../data/tinhtu.txt";
import DANH_TU from "../data/danhtu.txt";
import DONG_TU from "../data/dongtu.txt";

const findWordInString = (word, stringType) => {
    const position =  stringType.search(word);
    if (position === -1) 
        return false;
    return true;
}

const findTypeOfWord = (word, danhTu, dongTu, tinhTu) => {
    let typeOfWord = {
        value: word,
        types: []
    };
    findWordInString(word, danhTu) && typeOfWord.types.push("DANH_TU");
    findWordInString(word, dongTu) && typeOfWord.types.push("DONG_TU");
    findWordInString(word, tinhTu) && typeOfWord.types.push("TINH_TU");
    return typeOfWord;
}

const InputWords = () => {
    const [words, setWords] = useState([""]);

    // useState words
    const [dataWords, setDataWords] = useState([{}]);

    const handleSelectChange = (value) => {
        setWords(value);
    };

    const handleClick = () => {
        for (let i = 0; i < words.length; ++i) {
            const typesOfWord = findTypeOfWord(words[i], danhTu, dongTu, tinhTu);
            console.log(typesOfWord);
        }
    }

    useEffect(() => {
        FetchData(DANH_TU).then(value => setDataWords(prevState => );
        FetchData(DONG_TU).then(value => setDongTu(value.toLocaleLowerCase()));
        FetchData(TINH_TU).then(value => setTinhTu(value.toLocaleLowerCase()));
    }, [])

    return (
        <Col span={24} style={{ display: "flex", marginBottom: "20px" }}>
            <Select style={{ width: "100%" }} mode="tags" placeholder="Nhập các từ" onChange={handleSelectChange} />
            <Button type="primary" onClick={handleClick}>Sắp xếp</Button>
        </Col>
    );
};

export default InputWords;
