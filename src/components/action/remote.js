var remote = {
    getContent(user,pass){
        var url = "http://mediastream.ir/login.php";
        return fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: user,
                password: pass,
            })
        }
        ).then((res) => res.json());
    }
};

module.exports = remote;