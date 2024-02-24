export default function debounce (func, wait) {
  let timeout

  return function executedFunction () {
    const context = this
    const args = arguments

    function later () {
      timeout = null
      func.apply(context, args)
    }

    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}
