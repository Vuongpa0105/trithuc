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
            tmpAnsC["CHU_NGU"].point = tmpAnsC["CHU_NGU"].point + rule.point
          }
        }
      })
      if (!valueHas.includes(elm2.value)) {
        elm2.point = elm2.point ? elm2.point : Point[elm2.type]
        valueHas.push(elm2.value)
        tmpF.push(elm2)
      }
    })

    // xử lý vị ngữ
    valueHas = []
    let tmpFV = []
    let tmpAnsV = {}
    f = false
    tmpF.forEach(elm => {
      ruleV.forEach((rule, index) => {
        if (elm.type === rule.type) {
          let tmp = {}
          tmp.index = index
          tmp.type = elm.type
          tmp.value = elm.value
          tmp.point = elm.point ? elm.point : Point[elm.type]
          if (!f) {
            f = true
            valueHas.push(tmp.value)
            tmpAnsV["VI_NGU"] = tmp
            tmpAnsV["VI_NGU"].point = tmpAnsV["VI_NGU"].point + rule.point
          }
        }
      })
      if (!valueHas.includes(elm.value)) {
        elm.point = elm.point ? elm.point : Point[elm.type]
        valueHas.push(elm.value)
        tmpFV.push(elm)
      }
    })
    if (tmpAnsV["VI_NGU"]) ans.push([tmpAnsC, tmpAnsV, ...tmpFV])
    else ans.push([tmpAnsC, ...tmpFV])
  })
  return ans
}

const VFirst = (couple) => {
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
            tmpAnsC["VI_NGU"] = tmp
            tmpAnsC["VI_NGU"].point = tmpAnsC["VI_NGU"].point + rule.point
          }
        }
      })
      if (!valueHas.includes(elm2.value)) {
        elm2.point = elm2.point ? elm2.point : Point[elm2.type]
        valueHas.push(elm2.value)
        tmpF.push(elm2)
      }
    })

    // xử lý chủ ngữ
    valueHas = []
    let tmpFV = []
    let tmpAnsV = {}
    f = false
    tmpF.forEach(elm => {
      ruleV.forEach((rule, index) => {
        if (elm.type === rule.type) {
          let tmp = {}
          tmp.index = index
          tmp.type = elm.type
          tmp.value = elm.value
          tmp.point = elm.point ? elm.point : Point[elm.type]
          if (!f) {
            f = true
            valueHas.push(tmp.value)
            tmpAnsV["CHU_NGU"] = tmp
            tmpAnsV["CHU_NGU"].point = tmpAnsV["CHU_NGU"].point + rule.point
          }
        }
      })
      if (!valueHas.includes(elm.value)) {
        elm.point = elm.point ? elm.point : Point[elm.type]
        valueHas.push(elm.value)
        tmpFV.push(elm)
      }
    })
    if (tmpAnsV["CHU_NGU"]) {
      let temp = {}
      tmpFV.forEach(elm => {
        if (elm.type === "DAI_TU") {
          temp = elm
        }
      })
      tmpFV = tmpFV.filter(elm => elm.type !== "DAI_TU")
      if (temp.value) ans.push([temp, tmpAnsC, tmpAnsV, ...tmpFV])
      else ans.push([tmpAnsC, tmpAnsV, ...tmpFV])
    }
    else {
      let temp = {}
      tmpFV.forEach(elm => {
        if (elm.type === "DAI_TU") {
          temp = elm
        }
      })
      tmpFV = tmpFV.filter(elm => elm.type !== "DAI_TU")
      if (temp.value) ans.push([temp, tmpAnsC, ...tmpFV])
      else ans.push([tmpAnsC, ...tmpFV])
      ans.push([tmpAnsC, ...tmpFV])
    }
  })
  return ans
}

export const arrangeIntoSubject = (phrase) => {
  let ans = []
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
    ans = [...ans, ...CFirst(b), ...VFirst(b)]
  })
  return ans
}
