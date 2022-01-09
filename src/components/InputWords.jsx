import { useEffect, useState } from "react";
import { Button, Col, Row, Select } from "antd";
import FetchData from "../data/FetchData";
import { Point } from "./Constants";

// Import txt file 
import TINH_TU from "../data/tinhtu.txt";
import DANH_TU from "../data/danhtu.txt";
import DONG_TU from "../data/dongtu.txt";

const findWordInString = (word, stringType = "") => {
    const position =  stringType.search(word);
    if (position === -1) 
        return false;
    return true;
}

const findTypeOfWord = (word, dataAboutWordTypes) => {
    let typeOfWord = {
        value: word,
        types: []
    };
    if (!dataAboutWordTypes) 
        return;
    findWordInString(word, dataAboutWordTypes?.DANH_TU) && typeOfWord.types.push("DANH_TU");
    findWordInString(word, dataAboutWordTypes?.DONG_TU) && typeOfWord.types.push("DONG_TU");
    findWordInString(word, dataAboutWordTypes?.TINH_TU) && typeOfWord.types.push("TINH_TU");
    return typeOfWord;
}

const InputWords = () => {
    const [words, setWords] = useState([""]);

    // useState words
    const [dataAboutWordTypes, setDataAboutWordTypes] = useState({});
    const resultAfterSortingFromCategory = [];
    const handleSelectChange = (value) => {
        setWords(value);
    };

    const handleClick = () => {
        for (let i = 0; i < words.length; ++i) {
            const typesOfWord = findTypeOfWord(words[i], dataAboutWordTypes);
            resultAfterSortingFromCategory.push(typesOfWord);
        }
        console.log("resultAfterSortingFromCategory: ", resultAfterSortingFromCategory);
    }

    useEffect(() => {
        FetchData(DANH_TU).then(value => setDataAboutWordTypes(prevState => {return {...prevState, DANH_TU: value}}));
        FetchData(DONG_TU).then(value => setDataAboutWordTypes(prevState => {return {...prevState, DONG_TU: value}}));
        FetchData(TINH_TU).then(value => setDataAboutWordTypes(prevState => {return {...prevState, TINH_TU: value}}));
    }, [])

    return (
        <Col span={24} style={{ display: "flex", marginBottom: "20px" }}>
            <Select style={{ width: "100%" }} mode="tags" placeholder="Nhập các từ" onChange={handleSelectChange} />
            <Button type="primary" onClick={handleClick}>Sắp xếp</Button>
        </Col>
    );
};

export default InputWords;
