import React, { useEffect, useState } from "react";
import { Alert, Button, Col, Input, Row } from "antd";
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
import { arrangeIntoSubject } from "./sorts/ArrangeIntoSubject";
import { ArrangeThePhraeseIntoSentences } from "./sorts/ArrangeThePhrasesIntoSentences";

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
  findWordInString(word, dataAboutWordTypes?.DAI_TU) &&
    typeOfWord.types.push("DAI_TU");
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

const InputWords = React.memo(({ handleSetData }) => {
  const [visible, setVisible] = useState(false);
  const handleClose = () => {
    setVisible(false);
    setDescription("");
  };
  const [words, setWords] = useState([]);
  // useState words
  const [dataAboutWordTypes, setDataAboutWordTypes] = useState({});
  const [input, setInput] = useState("");
  const [description, setDescription] = useState("");
  let resultAfterSortingWordByType = [];

  const handleClick = () => {
    //Kich ban 2: chua nhap du lieu
    if (words.length === 0) {
      setDescription("Bạn chưa nhập dữ liệu!!");
      setVisible(true);
    }

    //kich ban 3: Không nhập 1 từ quá 3 lần!
    const kq = [];
    for (let i = 0; i < words.length; i++) {
      if (words.filter((x) => x === words[i]).length > 3) {
        setVisible(true);
        setDescription("Không nhập 1 từ quá 3 lần!");
      }
    }

    //Kich ban 5: nhap qua 10 tu
    if (words.length >= 10) {
      setDescription("Không được nhập quá 10 từ!");
      setVisible(true);
    }

    //Kich ban 6: co nhap dau
    for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < words[i].length; j++)
        if (
          (words[i].charCodeAt(j) > 90 && words[i].charCodeAt(j) < 97) ||
          (words[i].charCodeAt(j) > 32 && words[i].charCodeAt(j) < 48) ||
          (words[i].charCodeAt(j) > 57 && words[i].charCodeAt(j) < 65)
        ) {
          setDescription("Không tìm thấy dữ liệu. Không được nhập dấu!");
          setVisible(true);
        }
    }
    
    for (let i = 0; i < words.length; ++i) {
      const typesOfWord = findTypeOfWord(words[i].trim(), dataAboutWordTypes);
      resultAfterSortingWordByType.push(typesOfWord);
    }
    
    //Kich ban 4: tu nhap vao khong co trong data
    for (let i = 0; i < resultAfterSortingWordByType.length; i++) {
      if (resultAfterSortingWordByType[i].types.length === 0) {
        setDescription("Không tìm thấy dữ liệu trong từ điển!");
        setVisible(true);
      }
    }
    
    const a = ArrangeWordsIntoPhrases(resultAfterSortingWordByType);
    const b = arrangeIntoSubject(a);
    const c = ArrangeThePhraeseIntoSentences(b);
    const length = words.length
    c.filter(elm => {
      return elm.value.split(", ").length === length
    })
    handleSetData(c)
    resultAfterSortingWordByType = [];
  };

  const handleDeleteAll = () => {
    setWords([]);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setWords((prevState) => [...prevState, input]);
      setInput("");
    }
  };

  const handleClickAdd = (e) => {
    setWords((prevState) => [...prevState, input]);

    setInput("");
  };

  const handleDeleteWord = (id) => {
    setWords((prevState) => prevState.filter((elm, index) => index !== id));
  };

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
        return {
          ...prevState,
          DANH_TU_CHI_TONG_LUONG: value.trim().split(", "),
        };
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
        return {
          ...prevState,
          TINH_THAI_TU_CAU_KHIEN: value.trim().split(", "),
        };
      })
    );
    FetchData(TINH_THAI_TU_NGHI_VAN).then((value) =>
      setDataAboutWordTypes((prevState) => {
        return { ...prevState, TINH_THAI_TU: value.trim().split(", ") };
      })
    );
    FetchData(TINH_TU_CHI_CACH_THUC_MUC_DO).then((value) =>
      setDataAboutWordTypes((prevState) => {
        return {
          ...prevState,
          TINH_TU_CHI_CACH_THUC_MUC_DO: value.trim().split(", "),
        };
      })
    );
  }, []);

  return (
    <>
      <div style={{ position: "relative" }}>
        {visible ? (
          <Alert
            message="Cảnh báo"
            description={description}
            type="error"
            style={{ width: 450, position: "absolute", top: -205 }}
            showIcon
            closable
            afterClose={handleClose}
          />
        ) : null}
      </div>
      <Col span={24} style={{ display: "flex", marginBottom: "20px" }}>
        <div style={{ width: "100%" }}>
          <Input
            style={{ width: "100%" }}
            onKeyPress={handleKeyPress}
            onChange={(e) => setInput(e?.target?.value)}
            value={input}
          />
          <div className="wrapper-tag">
            <Row>
              {words.map(
                (word, index) =>
                  word && (
                    <Col
                      key={index}
                      span={4}
                      style={{ margin: "2px", marginTop: "10px" }}
                    >
                      <Tag
                        content={word}
                        index={index}
                        handleDeleteWord={handleDeleteWord}
                      />
                    </Col>
                  )
              )}
            </Row>
            <Row>
              <Col span={6}>
                <Button
                  style={{ marginTop: "20px", width: "100%" }}
                  danger
                  type="primary"
                  onClick={handleDeleteAll}
                >
                  Xóa tất cả
                </Button>
              </Col>
              <Col span={6} offset={1}>
                <Button
                  style={{ marginTop: "20px", width: "100%" }}
                  type="primary"
                  onClick={handleClick}
                >
                  Sắp xếp
                </Button>
              </Col>
            </Row>
          </div>
        </div>
        <Button type="primary" onClick={handleClickAdd}>
          Thêm
        </Button>
      </Col>
      ;
    </>
  );
});

export default InputWords;
