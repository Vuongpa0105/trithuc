import React, { useEffect, useState } from "react";
import { Button, Col, Input, Row } from "antd";
import FetchData from "../data/FetchData";
// Import txt file
import TINH_TU from "../data/tinhtu.txt";
import DANH_TU from "../data/danhtu.txt";
import DONG_TU from "../data/dongtu.txt";
import DAI_TU from "../data/daitu.txt";
import DAI_TU_CHI_DINH from "../data/daituchidinh.txt";
import DANH_TU_CHI_TONG_LUONG from "../data/danhtuchitongluong.txt";
import DANH_TU_LOAI_THE from "../data/danhtuloaithe.txt";
import DINH_TU_CHI_SO_LUONG from "../data/dinhtuchisoluong.txt";
import DANH_TU_CHI_DON_VI_DO_LUONG from "../data/danhtuchidonvidoluong.txt";
import PHO_TU_DUNG_SAU from "../data/photudungsau.txt";
import PHO_TU_DUNG_TRUOC from "../data/photudungtruoc.txt";
import QUAN_HE_TU from "../data/quanhetu.txt";
import SO_TU_CHO_SO_LUONG from "../data/sotuchisoluong.txt";
import THAN_TU from "../data/thantu.txt";
import TINH_THAI_TU from "../data/tinhthaitu.txt";
import TINH_THAI_TU_CAU_KHIEN from "../data/tinhthaitucaukhien.txt";
import TINH_THAI_TU_NGHI_VAN from "../data/tinhthaitunghivan.txt";
import TINH_TU_CHI_CACH_THUC_MUC_DO from "../data/tinhtuchicachthucmucdo.txt";
import Tag from "./Tag";
import { ArrangeWordsIntoPhrases } from "./sorts/ArrangeWordsIntoPhrases";

export const findWordInString = (word, stringType = "") => {
  const position = stringType.indexOf(word);
  if (position === -1) return false;
  return true;
};

export const findTypeOfWord = (word, dataAboutWordTypes) => {
  let typeOfWord = {
    value: word,
    types: [],
  };
  if (!dataAboutWordTypes) return;
  findWordInString(word, dataAboutWordTypes?.DANH_TU) &&
    typeOfWord.types.push("DANH_TU");
  findWordInString(word, dataAboutWordTypes?.DONG_TU) &&
    typeOfWord.types.push("DONG_TU");
  findWordInString(word, dataAboutWordTypes?.TINH_TU) &&
    typeOfWord.types.push("TINH_TU");
  findWordInString(word, dataAboutWordTypes?.DAI_TU) && typeOfWord.types.push("DAI_TU");
  findWordInString(word, dataAboutWordTypes?.DAI_TU_CHI_DINH) &&
    typeOfWord.types.push("DAI_TU_CHI_DINH");
  findWordInString(word, dataAboutWordTypes?.DANH_TU_CHI_TONG_LUONG) &&
    typeOfWord.types.push("DANH_TU_CHI_TONG_LUONG");
  findWordInString(word, dataAboutWordTypes?.DANH_TU_LOAI_THE) &&
    typeOfWord.types.push("DANH_TU_LOAI_THE");
  findWordInString(word, dataAboutWordTypes?.DINH_TU_CHI_SO_LUONG) &&
    typeOfWord.types.push("DINH_TU_CHI_SO_LUONG");
  findWordInString(word, dataAboutWordTypes?.DON_VI_DO_LUONG) &&
    typeOfWord.types.push("DANH_TU_CHI_DON_VI_DO_LUONG");
  findWordInString(word, dataAboutWordTypes?.PHO_TU_DUNG_SAU) &&
    typeOfWord.types.push("PHO_TU_DUNG_SAU");
  findWordInString(word, dataAboutWordTypes?.PHO_TU_DUNG_TRUOC) &&
    typeOfWord.types.push("PHO_TU_DUNG_TRUOC");
  findWordInString(word, dataAboutWordTypes?.QUAN_HE_TU) &&
    typeOfWord.types.push("QUAN_HE_TU");
  findWordInString(word, dataAboutWordTypes?.SO_TU_CHO_SO_LUONG) &&
    typeOfWord.types.push("SO_TU_CHO_SO_LUONG");
  findWordInString(word, dataAboutWordTypes?.THAN_TU) &&
    typeOfWord.types.push("THAN_TU");
  findWordInString(word, dataAboutWordTypes?.TINH_THAI_TU) &&
    typeOfWord.types.push("TINH_THAI_TU");
  findWordInString(word, dataAboutWordTypes?.TINH_THAI_TU_CAU_KHIEN) &&
    typeOfWord.types.push("TINH_THAI_TU_CAU_KHIEN");
  findWordInString(word, dataAboutWordTypes?.TINH_THAI_TU_NGHI_VAN) &&
    typeOfWord.types.push("TINH_THAI_TU_NGHI_VAN");
  findWordInString(word, dataAboutWordTypes?.TINH_TU_CHI_CACH_THUC_MUC_DO) &&
    typeOfWord.types.push("TINH_TU_CHI_CACH_THUC_MUC_DO");
  return typeOfWord;
};

const InputWords = React.memo(() => {
  const [words, setWords] = useState([]);
  // useState words
  const [dataAboutWordTypes, setDataAboutWordTypes] = useState({});
  const [input, setInput] = useState("");
  let resultAfterSortingWordByType = [];
  const handleClick = () => {
    for (let i = 0; i < words.length; ++i) {
      const typesOfWord = findTypeOfWord(words[i].trim(), dataAboutWordTypes);
      resultAfterSortingWordByType.push(typesOfWord);
    }
    const data = [
      {
          "value": "con",
          "types": [
              "DANH_TU",
              "TINH_TU",
              "DAI_TU",
              "DANH_TU_LOAI_THE"
          ]
      },
      {
          "value": "gà",
          "types": [
              "DANH_TU",
              "DONG_TU"
          ]
      },
      {
          "value": "xấu",
          "types": [
              "TINH_TU"
          ]
      }
    ]
    ArrangeWordsIntoPhrases(data)
    resultAfterSortingWordByType = [];
  };

  const handleDeleteAll = () => {
    setWords([]);
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setWords(prevState => [...prevState, input]);
      setInput("");
    }
  }

  const handleClickAdd = (e) => {
    setWords(prevState => [...prevState, input]);
    setInput("");
  }

  const handleDeleteWord = (id) => {
    setWords(prevState => prevState.filter((elm, index) => index !== id))
  }

  

  // Fecth data from txt
  useEffect(() => {
    FetchData(DANH_TU).then((value) =>
      setDataAboutWordTypes((prevState) => {
        return { ...prevState, DANH_TU: value.trim().split(", ") };
      })
    );
    FetchData(DONG_TU).then((value) =>
      setDataAboutWordTypes((prevState) => {
        return { ...prevState, DONG_TU: value.trim().split(", ") };
      })
    );
    FetchData(TINH_TU).then((value) =>
      setDataAboutWordTypes((prevState) => {
        return { ...prevState, TINH_TU: value.trim().split(", ") };
      })
    );
    FetchData(DAI_TU).then((value) =>
      setDataAboutWordTypes((prevState) => {
        return { ...prevState, DAI_TU: value.trim().split(", ") };
      })
    );
    FetchData(DAI_TU_CHI_DINH).then((value) =>
      setDataAboutWordTypes((prevState) => {
        return { ...prevState, DAI_TU_CHI_DINH: value.trim().split(", ") };
      })
    );
    FetchData(DANH_TU_CHI_TONG_LUONG).then((value) =>
      setDataAboutWordTypes((prevState) => {
        return { ...prevState, DANH_TU_CHI_TONG_LUONG: value.trim().split(", ") };
      })
    );
    FetchData(DANH_TU_LOAI_THE).then((value) =>
      setDataAboutWordTypes((prevState) => {
        return { ...prevState, DANH_TU_LOAI_THE: value.trim().split(", ") };
      })
    );
    FetchData(DINH_TU_CHI_SO_LUONG).then((value) =>
      setDataAboutWordTypes((prevState) => {
        return { ...prevState, DINH_TU_CHI_SO_LUONG: value.trim().split(", ") };
      })
    );
    FetchData(DANH_TU_CHI_DON_VI_DO_LUONG).then((value) =>
      setDataAboutWordTypes((prevState) => {
        return { ...prevState, DON_VI_DO_LUONG: value.trim().split(", ") };
      })
    );
    FetchData(PHO_TU_DUNG_SAU).then((value) =>
      setDataAboutWordTypes((prevState) => {
        return { ...prevState, PHO_TU_DUNG_SAU: value.trim().split(", ") };
      })
    );
    FetchData(PHO_TU_DUNG_TRUOC).then((value) =>
      setDataAboutWordTypes((prevState) => {
        return { ...prevState, PHO_TU_DUNG_TRUOC: value.trim().split(", ") };
      })
    );
    FetchData(QUAN_HE_TU).then((value) =>
      setDataAboutWordTypes((prevState) => {
        return { ...prevState, QUAN_HE_TU: value.trim().split(", ") };
      })
    );
    FetchData(SO_TU_CHO_SO_LUONG).then((value) =>
      setDataAboutWordTypes((prevState) => {
        return { ...prevState, SO_TU_CHO_SO_LUONG: value.trim().split(", ") };
      })
    );
    FetchData(THAN_TU).then((value) =>
      setDataAboutWordTypes((prevState) => {
        return { ...prevState, THAN_TU: value.trim().split(", ") };
      })
    );
    FetchData(TINH_THAI_TU).then((value) =>
      setDataAboutWordTypes((prevState) => {
        return { ...prevState, TINH_THAI_TU: value.trim().split(", ") };
      })
    );
    FetchData(TINH_THAI_TU_CAU_KHIEN).then((value) =>
      setDataAboutWordTypes((prevState) => {
        return { ...prevState, TINH_THAI_TU_CAU_KHIEN: value.trim().split(", ") };
      })
    );
    FetchData(TINH_THAI_TU_NGHI_VAN).then((value) =>
      setDataAboutWordTypes((prevState) => {
        return { ...prevState, TINH_THAI_TU: value.trim().split(", ") };
      })
    );
    FetchData(TINH_TU_CHI_CACH_THUC_MUC_DO).then((value) =>
      setDataAboutWordTypes((prevState) => {
        return { ...prevState, TINH_TU_CHI_CACH_THUC_MUC_DO: value.trim().split(", ") };
      })
    );
  }, []);

  return (
    <>
      <Col span={24} style={{ display: "flex", marginBottom: "20px" }}>
        <div style={{width: "100%"}} >
          <Input
            style={{width: "100%"}}
            onKeyPress={handleKeyPress}
            onChange={e => setInput(e?.target?.value)}
            value={input}
          />
          <div className="wrapper-tag">
            <Row>
              {words.map((word, index) => word && <Col key={index} span={4} style={{margin: "2px", marginTop: "10px"}}><Tag content={word} index={index} handleDeleteWord={handleDeleteWord} /></Col>)}
            </Row>
            <Button style={{marginTop: "20px"}} danger type="primary" onClick={handleDeleteAll}>Xóa tất cả</Button>
            <Button size="large" style={{marginTop: "20px", width: "100%"}} type="primary" onClick={handleClick} >Sắp xếp</Button>
          </div>
        </div>
        <Button type="default" onClick={handleClickAdd}>Thêm</Button>
      </Col>
    </>
  );
});

export default InputWords;
