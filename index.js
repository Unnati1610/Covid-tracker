const cData = async () => {
  const rData = await fetch("https://covid-api.mmediagroup.fr/v1/cases").then(
    (d) => d.json()
  );
  const y = Object.values(rData);
  const c = Object.keys(rData);
  console.log(y[0].All.confirmed);
  gData(rData, y, c);
};

const gData = (data, a, b) => {
  const conData = document.getElementById("country");
  const numData = document.getElementById("Cnum");
  const length = Object.keys(data).length;
  for (let i = 0; i < length; i++) {
    let lic = document.createElement("li");
    let li = document.createElement("li");
    lic.setAttribute("id", `con${i}`);
    li.setAttribute("id", `Cnum${i}`);
    li.innerText = a[i].All.confirmed;
    lic.innerText = b[i];
    conData.appendChild(lic);
    numData.appendChild(li);
  }
};
cData();
