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
import { waitForElementToBeRemoved } from "@testing-library/react"
import { Point, RulesOfPhraese } from "../contants/Constants"

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

const checkValueInWords = (value, ans) => {
  let f = false
  ans.forEach(a => {
    for (let property in a.values) {
      if (a.values[property].value === value) return true
    }
  })
  return f
}

export const ArrangeWordsIntoPhrases = (words) => {
  let list = [];
  for (let i = 0; i < words.length; ++i) {
    list.push(words[i]?.types.map((ele, index) => ele + ", " + words[i]?.value))
  }
  let permus = permutation(list) // Sinh hoán vị array 2D
  let ans = []
  const rules = RulesOfPhraese
  const addV = [] // Xóa phần tử trùng sau khi tạo cụm từ
  permus.forEach(permu => {
    let arrHasValue = [] // Mảng chứa những value đã được push vào trong array ans để sau đó thêm lại những value không thẻ ghép thành cụm từ
    let couple = []
    let f = false
    let f5 = false // Cờ đánh dấu hoán vị này có được push dữ liệu vào mảng kết quả hay không
    permu.forEach(elm => {
      let i = elm.split(", ")
      couple.push({type: i[0], value: i[1]})
    })
    couple.forEach(elm => {
      if (elm.type === "DANH_TU") f = true
    })
    // f đánh dấu nếu có một từ thuộc loại danh từ thì mới xét xếp vào cụm danh từ, tương tự với động từ và tính từ
    if (f) {
      let result = {type: "", point: 0, values: {}}
      let arrF = [] // Mảng đánh dấu value đã được thêm vào result chưa
      rules.CUM_DANH_TU.forEach((elm, index) => {
        couple.forEach(haf => {
          if (elm.types.includes(haf.type) && !arrF.includes(haf.value) && !result.hasOwnProperty(haf.type)) {
            arrF.push(haf.value)
            result.type = "CUM_DANH_TU"
            result.values[haf.type] = {value: haf.value, index: index}
          }
        })
      })

      if (Object.keys(result.values).length > 1) {
        const addI = new Array(10).fill(0);
        let f2 = true
        for (let property in result.values) {
          addI[result.values[property].index]++
          // Loại bỏ những cụm từ chỉ được tạo bởi một từ
          if (addI[result.values[property].index] > 1) f2 = false
        }
        if (f2) {
          // Loại bỏ những cụm từ giống nhau về value + point
          let tmp = ""
          for (let property in result.values) {
            tmp = tmp + result.values[property].value + "-"
          }
          if (!addV.includes(tmp)) {
            f5 = true
            ans.push([result])
            // thêm những value được push vào result array into arrHasvalue
            for (let property in result.values) {
              arrHasValue.push(result.values[property].value)
            }
            let point = 0
            for (let property in result.values) {
              point += Point[property]
            }
            result.point = point
            addV.push(tmp)
          }
        }
      }
    }
    // gán lại các từ không thể xếp thành cụm từ vào mảng kết quả
    if (f5) {
      words.forEach(word => {
        if (!arrHasValue.includes(word.value)) {
          ans[ans.length - 1].push(word)
        }
      })
    }
  })
  console.log(ans)
}
