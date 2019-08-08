const backendCall = (url, method, data, cb) => {
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
  backendCall("/postSVG", "POST", JSON.stringify(SVGobject), res => {
    console.log("Post method was successful:", res);
  });
});


let SHAPEbutton = document.querySelector(".SHAPEbutton");
let SHAPEname = document.querySelector(".SHAPEname");
let SHAPEprops = document.querySelector(".SHAPEprops");
let SHAPEtype = document.querySelector(".SHAPEtype");

SHAPEbutton.addEventListener("click", () => {
  let name = SHAPEname.value;
  let type = SHAPEtype.value;
  let props = SHAPEprops.value; 
  let SHAPEobj = { name, props, type};
  backendCall("/postSHAPE", "POST", JSON.stringify(SHAPEobj), res => {
    console.log("Post method was successful:", res)
  });
});

backendCall('/getAllData','GET',null,(res)=>{
  console.log(res);
})

backendCall('/getSVGs','GET',null,(res)=>{
  console.log(res);
})