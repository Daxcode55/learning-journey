const username = document.querySelector("#username");
const password = document.querySelector("#password");
const inputToken = document.querySelector("#tokenInput");
const inputApikey = document.querySelector("#apikeyInput");
const wrapResult = document.querySelector(".result");
const wrapResultImg = document.querySelector(".result-img");
const tokenDisplay = document.querySelector(".token-display");
const apikeyDisplay = document.querySelector(".apikey-display");

let resultAll;

const picture = [
  {
    name1: "gambar 1",
    img1: "assets/img/produk-food.jpg",
  },

  {
    name2: "gambar 2",
    img2: "assets/img/produk-kopi2.jpg",
  },

  {
    name3: "gambar 3",
    img3: "assets/img/produk-kopi3.jpg",
  },
];

function login() {
  const token = Math.random();
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username.value == "rifki" && password.value == "rifki") {
        resolve({ token });
      } else {
        reject("Password atau username Anda salah!");
      }
    }, 900);
  });
}

function getApiKey() {
  return new Promise((resolve, reject) => {
  if (inputToken.value == resultAll) {
    setTimeout(() => {
      resolve({ apikey: "yzk1470f0" });
    }, 1500);
  } else {
    reject("Token yang Anda masukan Salah!")
  }
  })
}

function getPicture() {
  return new Promise((resolve,reject) => {
    if (inputApikey.value == resultAll) {
      setTimeout(() => {
        resolve(picture);
      }, 3000);
    } else {
      reject('apikey yang Anda masukan salah!');
    }
  })
}


// implementasi asynchronous menggunakan Async await
document.querySelector("#btn-login").addEventListener('click', async function() {
  let info = `<p>sedang memproses Token Anda!..Silahkan tunggu!</p>`;
  wrapResult.innerHTML = info;
  try {
    const {token} = await login();
    wrapResult.innerHTML = `<p> Token Anda adalah : <span>${token}</span></p>`;
    tokenDisplay.style.display = "block";
    resultAll = token;
  } catch (err) {
    wrapResult.innerHTML = err;
  }
})

document.querySelector("#submit").addEventListener('click', async function() {
  let info = `<p>sedang memproses Apikey Anda!..Silahkan tunggu!</p>`;
  wrapResult.innerHTML = info;
  try {
    const {apikey} = await getApiKey();
    wrapResult.innerHTML = `<p>API Key Anda adalah : <span>${apikey}</span></p>`;
    apikeyDisplay.style.display = "block";
    tokenDisplay.style.display = "none";
    resultAll = apikey;
  } catch (err) {
    wrapResult.innerHTML = err;
  }
})

document.querySelector("#submitApikey").addEventListener('click', async function() {
  let info = `<p>sedang memproses tampilan gambar Anda..Silahkan tunggu!</p>`;
  wrapResult.innerHTML = info;
  try {
    const [gambar1, gambar2, gambar3] = await getPicture();
    const {name1, img1} = gambar1;
    const {name2, img2} = gambar2;
    const {name3, img3} = gambar3;

    wrapResultImg.innerHTML = 
    `
    <div class="wrap-img">
    <div class="container-content">
        <p>${name1}</p>
        <img src="${img1}" alt="">
    </div>

    <div class="container-content">
        <p>${name2}</p>
        <img src="${img2}" alt="">
    </div>
    
    <div class="container-content">
        <p>${name3}</p>
        <img src="${img3}" alt="">
    </div>
  </div>
  `
  } catch(err) {
    wrapResult.innerHTML = err;
  }
})


// implementasi asynchronous menggunakan promise

/*

document.querySelector("#btn-login").addEventListener("click", () => {
  let info = `<p>sedang memproses Token Anda!..Silahkan tunggu!</p>`;
  wrapResult.innerHTML = info;
  const loginuser = login();
  loginuser.then((result) => {
    const { token } = result;
    wrapResult.innerHTML = `<p> Token Anda adalah : <span>${token}</span></p>`;
    tokenDisplay.style.display = "block";
    resultAll = token;
  }).catch(err => {wrapResult.innerHTML = err});
});


document.querySelector("#submit").addEventListener("click", () => {
  let info = `<p>sedang memproses Apikey Anda!..Silahkan tunggu!</p>`;
  wrapResult.innerHTML = info;
  const getApikeyUser = getApiKey();
  getApikeyUser.then(result => {
    const {apikey} = result;
    wrapResult.innerHTML = `<p>API Key Anda adalah : <span>${apikey}</span></p>`;
    apikeyDisplay.style.display = "block";
    tokenDisplay.style.display = "none";
    resultAll = apikey;
  }).catch(err => wrapResult.innerHTML = err);
});

document.querySelector("#submitApikey").addEventListener("click", () => {
  let info = `<p>sedang memproses tampilan gambar Anda..Silahkan tunggu!</p>`;
  wrapResult.innerHTML = info;
  const getPictureUser = getPicture();

  getPictureUser.then(result => {
    const [gambar1, gambar2, gambar3] = result;
    const {name1, img1} = gambar1;
    const {name2, img2} = gambar2;
    const {name3, img3} = gambar3;

    wrapResultImg.innerHTML = 
    `
    <div class="wrap-img">
    <div class="container-content">
        <p>${name1}</p>
        <img src="${img1}" alt="">
    </div>

    <div class="container-content">
        <p>${name2}</p>
        <img src="${img2}" alt="">
    </div>
    
    <div class="container-content">
        <p>${name3}</p>
        <img src="${img3}" alt="">
    </div>
  </div>
    `
  }).catch(err => {wrapResult.innerHTML = err});

});

*/



/* Implementasi Asynchronus menggunakan Callback dan DOM */

/* 

function login(callback) {
  const token = Math.random();
  setTimeout(() => {
    callback({ token });
  }, 900);
}

function getApiKey(token, callback) {
  if (token) {
    setTimeout(() => {
      return callback({ apikey: "yzk1470f0" });
    }, 1500);
  }
}

function getPicture(apikey, callback) {
  if (apikey) {
    setTimeout(() => {
      return callback(picture);
    }, 3000);
  }
}

function renderUser(result) {
  wrapResult.innerHTML += result;
}

function renderPicture(result) {
  wrapResultImg.innerHTML = result;
}


document.querySelector("#btn-login").addEventListener("click", () => {
  let text = "";
  if (username.value == "rifki" && password.value == "rifki") {
    let info = `<p>sedang memproses Token Anda!..Silahkan tunggu!</p>`;
    wrapResult.innerHTML = info;
    login((result) => {
      const { token } = result;
      info = "";
      wrapResult.innerHTML = info;
      text = `<p>Token Anda adalah : <span>${token}</span></p>`;
      renderUser(text);
      tokenDisplay.style.display = "block";
      resultAll = token;
    });
  } else {
    alert("maaf username/password salah!");
  }
});


document.querySelector("#submit").addEventListener("click", () => {
  let text = "";
  if (inputToken.value == resultAll) {
    let info = `<p>sedang memproses Apikey Anda!..Silahkan tunggu!</p>`;
    wrapResult.innerHTML = info;
    getApiKey(resultAll, (result) => {
      const { apikey } = result;
      info = "";
      wrapResult.innerHTML = info;
      text = `<p>API Key Anda adalah : <span>${apikey}</span></p>`;
      renderUser(text);
      apikeyDisplay.style.display = "block";
      tokenDisplay.style.display = "none";
      resultAll = apikey;
    });
  } else {
    alert("Maaf Token yang Anda masukan salah! Tidak bisa mengakses API Key");
  }
});


document.querySelector("#submitApikey").addEventListener("click", () => {
    let text = "";
  if (inputApikey.value == resultAll) {
    let info = `<p>sedang memproses tampilan gambar Anda..Silahkan tunggu!</p>`;
    wrapResult.innerHTML = info;
    getPicture(resultAll, (result) => {
      const [gambar1, gambar2, gambar3] = result;
      const {name1, img1} = gambar1;
      const {name2, img2} = gambar2;
      const {name3, img3} = gambar3;
      info = "";
      wrapResult.innerHTML = info;
      text = `
    <div class="wrap-img">
      <div class="container-content">
          <p>${name1}</p>
          <img src="${img1}" alt="">
      </div>

      <div class="container-content">
          <p>${name2}</p>
          <img src="${img2}" alt="">
      </div>
      
      <div class="container-content">
          <p>${name3}</p>
          <img src="${img3}" alt="">
      </div>
    </div>
      `;
      renderPicture(text);
    });
  } else {
    alert("Maaf Apikey yang Anda masukan salah! Tidak bisa mengakses gambar Anda");
  }
});


*/
