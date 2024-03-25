/*

=> Belajar penggunaan/implementasi callback, promise dan async await
=> Belajar desctructur object
=> implentasi arrow function
=> fundamental asynchronus

=> src belajar => Dea Afrizal, Sandhika Galih, w3school(web)
=> eksternal API => "https://reqres.in/api/users" src = Dea Afrizal

*/



/*  kasus sederhana dibawah ini sebagai implentasi langsung 
dari kode javascript yang berjalan secara asynchronus

catatan : baris kode di bawah ini dapat diubah sesuai penggunaan
*/

const token = Math.random();
const picture = ['1.png', '2.png', '3.png'];

function login (username) {
  console.log('sedang memproses token..');
  return new Promise((resolve, reject) => {
    setTimeout (() => {
      if (username === 'rifki') {
        resolve({token});
      } else {
        reject('username salah, cannot acces');
      }
    }, 200)
  })
}

function getApiKey(token) {
  console.log("sedang memproses apikey..");
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      if (token) {
        resolve({apikey : '2ykx78787'});
      } else {
        reject('not token..cannot acces!');
      }
    }, 500)
  })
  
}

function getPicture(apikey) {
  console.log("proses mengambil gambar..");
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      if(apikey) {
        resolve({picture});
      } else {
        reject('not a apikey.. cannot acces picture');
      }
    }, 2000)
  })
}


// implementasi async await
async function userDisplay() {
  try {
    const {token} = await login('rifki');
    const {apikey} = await getApiKey(token);
    const {picture} = await getPicture(apikey);

    console.log(`
    token Anda adalah => ${token}
    apikey Anda adalah => ${apikey}
    berikut gambar yang Anda minta => ${picture}
    `)

  } catch (err) {
    console.log (err);
  }
}

userDisplay();



// implementasi promise

/*

const user = login('rifki');
user.then(result => {
    const { token } = result;
    console.log(token);

    getApiKey(token).then(result => {
      const { apikey } = result;
      console.log(apikey);

      getPicture(apikey).then(result => {
        const { picture } = result;
        console.log(picture);

      }).catch(err => console.log(err))

    }).catch(err => console.log(err))
  }
).catch((err) => {console.log(err)})

*/




// implementasi callback

/*

login('rifki', result => {
  const {token} = result;
  console.log(token);

  getApiKey(token, result => {
    const {apikey} = result;
    console.log(apikey);

    getPicture(apikey, result => {
      const {picture} = result;
      console.log(picture);
    })
  })
})

*/



// contoh kode javascript yang berjalan secara synchronus(Default)

/*

const {username} = login('rifki');
const {apikey} = getApiKey(username);
const getUserPicture = getPicture(apikey);

console.log(username);
console.log(apikey);
console.log(getUserPicture);

*/

 
