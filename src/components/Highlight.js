function Highlight(st, key, start_, end_) {
  function getIndicesOf(searchStr, str, caseSensitive) {
    var searchStrLen = searchStr.length;
    if (searchStrLen == 0) {
      return [];
    }
    var startIndex = 0, index, indices = [];
    if (!caseSensitive) {
      str = str.toLowerCase();
      searchStr = searchStr.toLowerCase();
    }
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
      indices.push(index);
      startIndex = index + searchStrLen;
    }
    return indices;
  }

  const rep = key ? key : "-"
  let re = start_ ? start_ : "span"
  let re_ = end_ ? end_ : "span"
  let re_len = re.length + re_.length
  
  let nu = Number((5 + (re_len)) - 2*(rep.length))
  let str = st
  var indices = getIndicesOf(rep, str);

  let nInd = []
  if (indices.length % 2 == 1) {
    indices.pop()
  }

  for (let index = 0; index < indices.length / 2; index++) {
    nInd.push([])
  }

  nInd.map((val, ind) => {
    nInd[ind] = [indices[2 * ind], indices[2 * ind + 1]]
  })

  String.prototype.replaceBetween = function (start, end, what) {
    return this.substring(0, start) + what + this.substring(end);
  };


  nInd.map((val, inde) => {
    str = (str.replaceBetween((inde * nu + val[0]), Number(inde * nu + val[1] + rep.length), `<${re}>${str.substring((inde * nu + val[0]) + rep.length, Number(inde * nu + val[1]))}</${re_}>`));
  })

  console.log(`${re}/ ${re_}`)

  return str
}

export { Highlight }