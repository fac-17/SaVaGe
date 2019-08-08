const backendCall = (url,method,data,cb) => {
    const xml = new XMLHttpRequest();
    xml.onreadystatechange = () => {
      if (xml.readyState === 4 && xml.status === 200) {
        const response = JSON.parse(xml.responseText);
        cb(response);
      }
    };
    xml.open(method, url);
    xml.send(data);
  };
  
console.log("yolo");
let SVGbutton = document.querySelector(".SVGbutton");
let SVGname = document.querySelector(".SVGname");
let SVGprops = document.querySelector(".SVGprops");

SVGbutton.addEventListener("click", () => {
  let name = SVGname.value;
  let props = SVGprops.value;
  let SVGobject = { name, props };
  console.log(SVGobject);
});

backendCall('/getAllData','GET',null,(res)=>{
  console.log(res);
})