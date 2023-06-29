export class Cookie {
  static set(name, value, daysToExpire) {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + daysToExpire);
    const cookieValue = encodeURIComponent(value) + (daysToExpire ? `; expires=${expirationDate.toUTCString()}` : '');
    document.cookie = `${name}=${cookieValue}; path=/`;
  }

  static get(name) {
    const cookieString = decodeURIComponent(document.cookie);
    const cookies = cookieString.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }
}
