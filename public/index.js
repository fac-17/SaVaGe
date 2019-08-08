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


const generateSVG=(tag,props)=>{
  const el=document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.entries(props).forEach( ([key,value])=>{
    try {
      el.setAttribute(key,value);
    } catch(e){
      console.log(e);
    }
  });
  return el;
}

backendCall('/getAllData','GET',null,(res)=>{
  let svgs=Array.from(new Set(res.map(el=>[el.svg_name,el.svg_props])));
  let svgObjects={};
  svgs.forEach(([name,props])=>{
    let svg=generateSVG('svg',JSON.parse(props));  
    svgObjects[name]=svg;
    document.body.appendChild(svg);
  })
  
  // console.log("SVGS",svgObjects);
  // console.log(res);
  res.forEach(el=>{
    let shape=generateSVG(el.type,JSON.parse(el.shape_props));
    // console.log(shape)
    svgObjects[el.svg_name].appendChild(shape);
  })
    

})

backendCall('/getSVGs','GET',null,(res)=>{
  console.log(res);
})
