// contoh penggunaan fetch api menggunakan ajax


function loadData() {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(this.responseText);
        } else {
          reject("Error" + this.status);
        }
      }
    };

    xhttp.open("GET", "https://reqres.in/api/users");
    xhttp.send();
  });
}

loadData().then(respon => {
    console.log(respon);
}).catch(err => console.log(err));
