var storage = {
  set(item, val) {
    window.localStorage.setItem(item, JSON.stringify(val));
  },
  get(item) {
    return JSON.parse(window.localStorage.getItem(item));
  },
  remove(item) {
    if (!item) {
      localStorage.clear();
    } else {
      window.localStorage.removeItem(item);
    }
  }
}
export default storage;
