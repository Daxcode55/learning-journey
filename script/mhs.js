/*

implementasi penggunaan template literal untuk merender hasil dari fetch API

*/


let renderElement = document.querySelector("#demo");

async function getDataMahasiswa(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    const { data } = result;
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
}

async function renderData() {
  const url = "https://reqres.in/api/users";
  try {
    const data = await getDataMahasiswa(url);
    let resultHtml = `
        <h2>Data Mahasiswa</h2>
            ${data
              .map(
                (item) => `
            <div class="wraper-img">
            <img src="${item.avatar}" alt="">
            <div class="desc-mhs">
                <p>nama : ${item.first_name}</p>
                <p>email : ${item.email}</p>
            </div>
            </div>
            `
              )
              .join("")}
        `;

    renderElement.innerHTML = resultHtml;
  } catch (err) {
    console.log("gagal merender data mahasiswa");
  }
}

// renderData();
