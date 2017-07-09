
class Remote {
  static async getContent(user,pass) {
    const url = "http://mediastream.ir/login.php";
    const headers = { 'Content-Type': 'application/json' };
    const body = JSON.stringify({ username: user, password: pass, });
    try {
      const result = await fetch(url, {method: 'POST', headers, body});
      return result.json();
    } catch (e) {
      console.warn(e);
    }
  }
}

export default Remote;