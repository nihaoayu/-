export const imgError = {
  inserted (dom, opt) {
    dom.onerror = () => {
      dom.src = opt.value
    }
  }
}
