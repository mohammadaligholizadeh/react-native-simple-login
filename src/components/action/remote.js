var remote = {
    getContent(){
        var url = "http://mediastream.ir/login.php";
        return fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: 'mohammad',
                password: '123456',
            })
        }
        ).then((res) => res.json());
    }
};

module.exports = remote;