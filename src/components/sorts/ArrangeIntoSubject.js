import { RulesOfC, RulesOfT, RulesOfV, Point } from "../contants/Constants"
import { permutation } from "./ArrangeWordsIntoPhrases"

const ruleC = RulesOfC
const ruleV = RulesOfV
const ruleT = RulesOfT

const CFirst = (couple) => {
  let ans = []
  couple.forEach((elm, index) => {
    let tmpAnsC = {}
    let f = false
    let tmpF = []
    let valueHas = []
    elm.forEach((elm2, index) => {
      ruleC.forEach((rule, index) => {
        if (elm2.type === rule.type) {
          let tmp = {}
          tmp.index = index
          tmp.type = elm2.type
          tmp.value = elm2.value
          tmp.point = elm2.point ? elm2.point : Point[elm2.type]
          if (!f) {
            f = true
            valueHas.push(tmp.value)
            tmpAnsC["CHU_NGU"] = tmp
          }
        }
      })
      if (!valueHas.includes(elm2.value)) {
        elm2.point = elm2.point ? elm2.point : Point[elm2.type]
        valueHas.push(elm2.value)
        tmpF.push(elm2)
      }
    })
    // ans.push([tmpAnsC, ...tmpF])

    // xử lý vị ngữ
    
    
  })
  console.log("ans: ", ans)
}

const VFirst = (couple) => {

}

export const arrangeIntoSubject = (phrase) => {
  phrase.forEach(elm => { 
    let couple = []
    elm.forEach(e => {
      let valueOfPhrase = ""
      let valueOfword = ""
      if (!e.types) {
        for (let property in e.values) {
          valueOfPhrase += (e.values[property].value + " ")
        }
      }
      if (e.types) {
        valueOfword = e.value
      }
      if (e.types) {
        let tmp = []
        e.types.forEach(lm => {
          tmp.push(`${lm}, ${valueOfword}`)
        })
        couple.push(tmp)
      }
      else couple.push([`${e.type}, ${valueOfPhrase}, ${e.point}`])
    })
    couple = permutation(couple)
    const b = couple.map(elm => {
      return elm.map(elm2 => {
        const i = {}
        const a = elm2.split(", ")
        i.type = a[0]
        i.value = a[1].trim()
        i.point = +a[2]
        return i
      })
    })
    CFirst(b)
  })
}
