/* 

- Đầu vào của hàm ArrangeWordsIntoPhrases:
  [ { types: [], value: "" }, ... ]

- Kết quả mong muốn sau khi chạy hàm ArrangeWordsIntoPhrases:
  [
    {
      POINT: 100,
      result: {
                CUM_DANH_TU: [
                  {
                        index: 1,
                        type: ["DAI_TU_CHI_TONG_LUONG"],
                        value: "",
                    },
                    ...
                ],
                CUM_DONG_TU: [

                ],
                CUM_TINH_TU: [

                ]
              }
    },
    ....
  ]
*/

import { RulesOfPhraese } from "../contants/Constants"

const permutation = (list, n = 0, result = [], current = []) => {
  if (n === list.length) result.push(current)
  else list[n].forEach(item => permutation(list, n + 1, result, [...current, item]))
  return result
}

export const ArrangeWordsIntoPhrases = (words) => {
  const list = [];
  for (let i = 0; i < words.length; ++i) {
    list.push(words[i]?.types.map((ele, index) => ele + ", " + words[i]?.value))
  }
  const b = permutation(list)
  b.forEach(pemu => {
    const rules = RulesOfPhraese
    const converts = []
    pemu.forEach(it => {
      const i = it.split(", ")
      converts.push(i)
    })
    for (const property in rules) {
      rules[property].forEach(elm => {
        converts.forEach(con => {
          if (elm?.type.includes(con[0])) {
            elm.value = con[1]
          }
        })
      })
    }
    console.log("rules: ", rules)
  })
  
  return;
}
