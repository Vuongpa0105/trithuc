import { Point, RulesOfPhraese } from "../contants/Constants";

export const permutation = (list, n = 0, result = [], current = []) => {
  if (n === list.length) result.push(current);
  else
    list[n].forEach((item) =>
      permutation(list, n + 1, result, [...current, item])
    );
  return result;
};

const sortByPosition = obj => {
  const order = [], res = [];
  Object.keys(obj).forEach(key => {
     return order[obj[key].index - 1] = key;
  });
  order.forEach(key => {
     res[key] = obj[key];
  });
  console.log("SORT_FUNC:", res);
  return res;
}


const ArrangeWordsIntoPhrasesDetail = (TYPE_PHRASE, words, ans) => {
  if (ans.length) {
    words.length = 0;
    ans.forEach((elm) => {
      elm.forEach((elm2) => {
        if (elm2.types) {
          words.push(elm2);
        }
      });
    });
    ans.forEach((elm) => {
      elm.filter((e) => !e.types);
    });
  }
  let list = [];
  for (let i = 0; i < words.length; ++i) {
    list.push(words[i]?.types.map((ele) => ele + ", " + words[i]?.value));
  }
  let permus = permutation(list); // Sinh hoán vị array 2D
  const rules = RulesOfPhraese;
  const addV = []; // Xóa phần tử trùng sau khi tạo cụm từ
  permus.forEach((permu) => {
    let arrHasValue = []; // Mảng chứa những value đã được push vào trong array ans để sau đó thêm lại những value không thẻ ghép thành cụm từ
    let couple = [];
    let f = false;
    let f5 = false; // Cờ đánh dấu hoán vị này có được push dữ liệu vào mảng kết quả hay không
    permu.forEach((elm) => {
      let i = elm.split(", ");
      couple.push({ type: i[0], value: i[1] });
    });
    couple.forEach((elm) => {
      if (elm.type === TYPE_PHRASE.slice(4, TYPE_PHRASE.length)) f = true;
    });
    // f đánh dấu nếu có một từ thuộc loại danh từ thì mới xét xếp vào cụm danh từ, tương tự với động từ và tính từ
    if (f) {
      let result = { type: "", point: 0, values: {} };
      let arrF = []; // Mảng đánh dấu value đã được thêm vào result chưa
      rules[TYPE_PHRASE].forEach((elm, index) => {
        couple.forEach((haf) => {
          if (
            elm.types.includes(haf.type) &&
            !arrF.includes(haf.value) &&
            !result.hasOwnProperty(haf.type)
          ) {
            arrF.push(haf.value);
            result.type = TYPE_PHRASE;
            result.values[haf.type] = { value: haf.value, index: index };
          }
        });
      });

      // Loại bỏ những cụm từ chỉ được tạo bởi một từ
      if (Object.keys(result.values).length > 1) {
        const addI = new Array(10).fill(0);
        let f2 = true;
        for (let property in result.values) {
          addI[result.values[property].index]++;
          if (addI[result.values[property].index] > 1) f2 = false;
        }
        if (f2) {
          // Loại bỏ những cụm từ giống nhau về value + point
          let tmp = "";
          for (let property in result.values) {
            tmp = tmp + result.values[property].value + "-";
          }
          if (!addV.includes(tmp)) {
            f5 = true;
            ans.push([result]);
            // thêm những value được push vào result array into arrHasvalue
            for (let property in result.values) {
              arrHasValue.push(result.values[property].value);
            }
            let point = 0;
            for (let property in result.values) {
              point += Point[property];
            }
            result.point = point;
            addV.push(tmp);
          }
        }
      }
    }

    if (f5) {
      words.forEach((word) => {
        if (!arrHasValue.includes(word.value)) {
          ans[ans.length - 1].push(word);
        }
      });
    }
  });
  ans.forEach(elm => {
    elm.forEach(elm2 => {
      if ((elm2.type === "CUM_DANH_TU") || (elm2.type === "CUM_DONG_TU") || (elm2.type === "CUM_TINH_TU")) {
        const a = elm2.values
        const flatArr = Object.entries(a); 
        flatArr.sort((v1, v2) => v1[1].index - v2[1].index);
        const resObj = {};
        const arr = []
        const arrKey = []
        for(let i = 0; i < flatArr.length; i++) {
          const key = flatArr[i][0];
          const val = flatArr[i][1];
          resObj[key] = val;
          arr.push(val)
          arrKey.push(key)
        }
        const objAns = {}
        for (let i = arr.length - 1; i >= 0; --i) {
          objAns[arrKey[i]] = arr[i]
        }
        elm2.values = objAns
      }
    })
  })
  
  return ans;
};

export const ArrangeWordsIntoPhrases = (words) => {
  console.log("words: ", words)
  let ans = [];
  
  for (let property in RulesOfPhraese) {
    ans = ArrangeWordsIntoPhrasesDetail(property, words, ans);
  }
  return ans;
};


