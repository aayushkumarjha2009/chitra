function Replace (inps) {
  const inp = ["चित्र", "चित्रा", "चित्रि", "चित्री", "चित्रू", "चित्रु", "चित्रं", "चित्रे", "चित्रै", "चित्रो", "चित्रौ"]
  let is = ["वि", "//"]
  let i = ["//"]
  let str = inps
  var rep;
  inp.map((val) => {
    str = str.replaceAll(val, `<span>${val}</span>`)
    rep = str
  })
  inp.map((val) => {
    is.map((vals) => {
      str = str.replaceAll(`${vals}<span>${val}</span>`, `${vals}${val}`)
      rep = str
    })
    i.map((vals) => {
      str = str.replaceAll(`${vals}${val}`, `${val}`)
      rep = str
    })
  })
  i.map((vals) => {
    str = str.replaceAll(`${vals}`, ``)
    rep = str
  })
  return rep
}

export default Replace