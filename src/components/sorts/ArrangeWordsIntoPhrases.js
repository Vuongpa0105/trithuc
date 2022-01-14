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



const isBelongToNounPhrase = (couples) => {
  couples.forEach(couple => {
    
  })
}
const isBelongToVerbPhrase = (couples) => {

}
const isBelongToAdjPhrase = (couples) => {

} 

const permutation = (list, n = 0, result = [], current = []) => {
  if (n === list.length) result.push(current)
  else list[n].forEach(item => permutation(list, n + 1, result, [...current, item]))
  return result
}

export const ArrangeWordsIntoPhrases = (words) => {
  let list = [];
  for (let i = 0; i < words.length; ++i) {
    list.push(words[i]?.types.map((ele, index) => ele + ", " + words[i]?.value))
  }
  let permus = permutation(list)
  let ans = []
  permus.forEach(permu => {
    let couple = []
    permu.forEach(it => {
      let i = it.split(", ")
      couple.push({type: i[0], value: i[1]})
    })
    console.log(couple)
  })
  console.log("ans: ", ans)
}
