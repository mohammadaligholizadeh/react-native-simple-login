
class Remote {
  static getContent(user,pass) {
    const url = "http://mediastream.ir/login.php";
    const headers = { 'Content-Type': 'application/json' };
    const body = JSON.stringify({ username: user, password: pass, });
    return fetch(url, {method: 'POST', headers, body})
      .then((res) => res.json())
      .catch((e) => console.warn(e));
  }
}

export default Remote;