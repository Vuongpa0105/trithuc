import { useEffect, useState } from "react";
import { Button, Col, Row, Select } from "antd";
import FetchData from "../data/FetchData";
import { Point } from "./Constants";

// Import txt file
import TINH_TU from "../data/tinhtu.txt";
import DANH_TU from "../data/danhtu.txt";
import DONG_TU from "../data/dongtu.txt";
import DAI_TU from "../data/daitu.txt";
import DAI_TU_CHI_DINH from "../data/daituchidinh.txt";
import DANH_TU_CHI_TONG_LUONG from "../data/danhtuchitongluong.txt";
import DANH_TU_LOAI_THE from "../data/danhtuloaithe.txt";
import DINH_TU_CHI_SO_LUONG from "../data/dinhtuchisoluong.txt";
import DON_VI_DO_LUONG from "../data/donvidoluong.txt";
import PHO_TU_DUNG_SAU from "../data/photudungsau.txt";
import PHO_TU_DUNG_TRUOC from "../data/photudungtruoc.txt";
import QUAN_HE_TU from "../data/quanhetu.txt";
import SO_TU_CHO_SO_LUONG from "../data/sotuchisoluong.txt";
import THAN_TU from "../data/thantu.txt";
import TINH_THAI_TU from "../data/tinhthaitu.txt";
import TINH_THAI_TU_CAU_KHIEN from "../data/tinhthaitucaukhien.txt";
import TINH_THAI_TU_NGHI_VAN from "../data/tinhthaitunghivan.txt";
import TINH_TU_CHI_CACH_THUC_MUC_DO from "../data/tinhtuchicachthucmucdo.txt";

const findWordInString = (word, stringType = "") => {
  const position = stringType.search(word);
  if (position === -1) return false;
  return true;
};

const findTypeOfWord = (word, dataWords) => {
  let typeOfWord = {
    value: word,
    types: [],
  };
  if (!dataWords) return;
  findWordInString(word, dataWords?.DANH_TU) &&
    typeOfWord.types.push("DANH_TU");
  findWordInString(word, dataWords?.DONG_TU) &&
    typeOfWord.types.push("DONG_TU");
  findWordInString(word, dataWords?.TINH_TU) &&
    typeOfWord.types.push("TINH_TU");
  findWordInString(word, dataWords?.DAI_TU) && typeOfWord.types.push("DAI_TU");
  findWordInString(word, dataWords?.DAI_TU_CHI_DINH) &&
    typeOfWord.types.push("DAI_TU_CHI_DINH");
  findWordInString(word, dataWords?.DANH_TU_CHI_TONG_LUONG) &&
    typeOfWord.types.push("DANH_TU_CHI_TONG_LUONG");
  findWordInString(word, dataWords?.DANH_TU_LOAI_THE) &&
    typeOfWord.types.push("DANH_TU_LOAI_THE");
  findWordInString(word, dataWords?.DINH_TU_CHI_SO_LUONG) &&
    typeOfWord.types.push("DINH_TU_CHI_SO_LUONG");
  findWordInString(word, dataWords?.DON_VI_DO_LUONG) &&
    typeOfWord.types.push("DON_VI_DO_LUONG");
  findWordInString(word, dataWords?.PHO_TU_DUNG_SAU) &&
    typeOfWord.types.push("PHO_TU_DUNG_SAU");
  findWordInString(word, dataWords?.PHO_TU_DUNG_TRUOC) &&
    typeOfWord.types.push("PHO_TU_DUNG_TRUOC");
  findWordInString(word, dataWords?.QUAN_HE_TU) &&
    typeOfWord.types.push("QUAN_HE_TU");
  findWordInString(word, dataWords?.SO_TU_CHO_SO_LUONG) &&
    typeOfWord.types.push("SO_TU_CHO_SO_LUONG");
  findWordInString(word, dataWords?.THAN_TU) &&
    typeOfWord.types.push("THAN_TU");
  findWordInString(word, dataWords?.TINH_THAI_TU) &&
    typeOfWord.types.push("TINH_THAI_TU");
  findWordInString(word, dataWords?.TINH_THAI_TU_CAU_KHIEN) &&
    typeOfWord.types.push("TINH_THAI_TU_CAU_KHIEN");
  findWordInString(word, dataWords?.TINH_THAI_TU_NGHI_VAN) &&
    typeOfWord.types.push("TINH_THAI_TU_NGHI_VAN");
  findWordInString(word, dataWords?.TINH_TU_CHI_CACH_THUC_MUC_DO) &&
    typeOfWord.types.push("TINH_TU_CHI_CACH_THUC_MUC_DO");
  return typeOfWord;
};

const InputWords = () => {
  const [words, setWords] = useState([""]);

  // useState words
  const [dataWords, setDataWords] = useState({});
  const handleSelectChange = (value) => {
    setWords(value);
  };

  const handleClick = () => {
    for (let i = 0; i < words.length; ++i) {
      const typesOfWord = findTypeOfWord(words[i], dataWords);
      console.log(typesOfWord);
    }
  };

  useEffect(() => {
    FetchData(DANH_TU).then((value) =>
      setDataWords((prevState) => {
        return { ...prevState, DANH_TU: value };
      })
    );
    FetchData(DONG_TU).then((value) =>
      setDataWords((prevState) => {
        return { ...prevState, DONG_TU: value };
      })
    );
    FetchData(TINH_TU).then((value) =>
      setDataWords((prevState) => {
        return { ...prevState, TINH_TU: value };
      })
    );
    FetchData(DAI_TU).then((value) =>
      setDataWords((prevState) => {
        return { ...prevState, DAI_TU: value };
      })
    );
    FetchData(DAI_TU_CHI_DINH).then((value) =>
      setDataWords((prevState) => {
        return { ...prevState, DAI_TU_CHI_DINH: value };
      })
    );
    FetchData(DANH_TU_CHI_TONG_LUONG).then((value) =>
      setDataWords((prevState) => {
        return { ...prevState, DANH_TU_CHI_TONG_LUONG: value };
      })
    );
    FetchData(DANH_TU_LOAI_THE).then((value) =>
      setDataWords((prevState) => {
        return { ...prevState, DANH_TU_LOAI_THE: value };
      })
    );
    FetchData(DINH_TU_CHI_SO_LUONG).then((value) =>
      setDataWords((prevState) => {
        return { ...prevState, DINH_TU_CHI_SO_LUONG: value };
      })
    );
    FetchData(DON_VI_DO_LUONG).then((value) =>
      setDataWords((prevState) => {
        return { ...prevState, DON_VI_DO_LUONG: value };
      })
    );
    FetchData(PHO_TU_DUNG_SAU).then((value) =>
      setDataWords((prevState) => {
        return { ...prevState, PHO_TU_DUNG_SAU: value };
      })
    );
    FetchData(PHO_TU_DUNG_TRUOC).then((value) =>
      setDataWords((prevState) => {
        return { ...prevState, PHO_TU_DUNG_TRUOC: value };
      })
    );
    FetchData(QUAN_HE_TU).then((value) =>
      setDataWords((prevState) => {
        return { ...prevState, QUAN_HE_TU: value };
      })
    );
    FetchData(SO_TU_CHO_SO_LUONG).then((value) =>
      setDataWords((prevState) => {
        return { ...prevState, SO_TU_CHO_SO_LUONG: value };
      })
    );
    FetchData(THAN_TU).then((value) =>
      setDataWords((prevState) => {
        return { ...prevState, THAN_TU: value };
      })
    );
    FetchData(TINH_THAI_TU).then((value) =>
      setDataWords((prevState) => {
        return { ...prevState, TINH_THAI_TU: value };
      })
    );
    FetchData(TINH_THAI_TU_CAU_KHIEN).then((value) =>
      setDataWords((prevState) => {
        return { ...prevState, TINH_THAI_TU_CAU_KHIEN: value };
      })
    );
    FetchData(TINH_THAI_TU_NGHI_VAN).then((value) =>
      setDataWords((prevState) => {
        return { ...prevState, TINH_THAI_TU: value };
      })
    );
    FetchData(TINH_TU_CHI_CACH_THUC_MUC_DO).then((value) =>
      setDataWords((prevState) => {
        return { ...prevState, TINH_TU_CHI_CACH_THUC_MUC_DO: value };
      })
    );
  }, []);

  return (
    <Col span={24} style={{ display: "flex", marginBottom: "20px" }}>
      <Select
        style={{ width: "100%" }}
        mode="tags"
        placeholder="Nhập các từ"
        onChange={handleSelectChange}
      />
      <Button type="primary" onClick={handleClick}>
        Sắp xếp
      </Button>
    </Col>
  );
};

export default InputWords;
