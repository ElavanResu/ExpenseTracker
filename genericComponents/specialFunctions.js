const rupeeFormatter = (x) => {
  if (x === undefined) {
    return x
  }
  x = x.toString()
  const decIndex = x.indexOf('.')
  let afterDec = ''
  if (decIndex > -1) {
    afterDec = x.substring(x.indexOf('.'), x.length)
    x = x.substring(0, x.indexOf('.'))
  }
  let lastThree = x.substring(x.length - 3)
  let otherNumbers = x.substring(0, x.length - 3)
  if (otherNumbers !== '') {
    lastThree = ',' + lastThree
  }
  let res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree + afterDec
  return res
}

export { rupeeFormatter }