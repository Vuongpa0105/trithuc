

export const ArrangeThePhraeseIntoSentences = (data) => {
  let ans = []
  // { value: "...", point: 0 }
  data.forEach(elm => {
    let tmp = {value: "", point: 0}
    elm.forEach(elm2 => {
      if (elm2["CHU_NGU"]) {
        tmp.value += (elm2["CHU_NGU"].value + " ")
        tmp.point += elm2["CHU_NGU"].point
      }
    })
    elm.forEach(elm2 => {
      if (elm2["VI_NGU"]) {
        tmp.value += (elm2["VI_NGU"].value + " ")
        tmp.point += elm2["VI_NGU"].point
      }
    })
    elm.forEach(elm2 => {
      if (!elm2["VI_NGU"] && !elm2["CHU_NGU"]) {
        tmp.value += (elm2.value + " ")
        tmp.point += elm2.point
      }
    })
    tmp.value = tmp.value.trim()
    ans.push(tmp)
  })
  function compare( a, b ) {
    if ( a.point > b.point ){
      return -1;
    }
    if ( a.point < b.point ){
      return 1;
    }
    return 0;
  }
  ans = ans.sort( compare );
  return ans
}
