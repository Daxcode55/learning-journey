console.log("tes");

// const hitAPI = fetch('http://127.0.0.1:5500/script/mhs.json');

async function getData(api) {
  const obj = await fetch(api);
  const result = await obj.json();
  const {data} = result;
  const [mhs1,mhs2,mhs3,mhs4,mhs5,mhs6] = data;
  console.log(mhs1);
}

getData("https://reqres.in/api/users");
