async function clearData() {
  const url = "http://127.0.0.1:5000/";
  return await postData(url + "clear");
}

async function getData() {
  const url = "http://127.0.0.1:5000/";
  let data = await postData(url + "all");
  return data;
}

async function addData(cityData) {
  const url = "http://127.0.0.1:5000/";
  let data = await postData(url + "add", cityData);
  return data;
}

async function deleteData(key) {
  const url = "http://127.0.0.1:5000/";
  let data = await postData(url + "delete", { key: Number(key) });
  return data;
}

async function updateData(cityObj) {
  const url = "http://127.0.0.1:5000/";
  let data = await postData(url + "update", cityObj);
  return data;
}

//const url = "http://127.0.0.1:5000/";

async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json"
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });

  const json = await response.json(); // parses JSON response into native JavaScript objects
  json.status = response.status;
  json.statusText = response.statusText;
  return json;
}

export { postData, getData, addData, clearData, deleteData, updateData };
