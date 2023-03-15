export function debounce(func, delay) {
  let timer;
  return function () {
    const ctx = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(ctx, args);
    }, delay);
  };
}
