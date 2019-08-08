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

let SVGbutton = document.querySelector(".SVGbutton");
let SVGname = document.querySelector(".SVGname");
let SVGprops = document.querySelector(".SVGprops");

SVGbutton.addEventListener("click", () => {
  let name = SVGname.value;
  let props = SVGprops.value;
  let SVGobject = { name, props };
  backendCall("/postSVG", "POST", JSON.stringify(SVGobject), res => {
    console.log("Post method was successful:", res);
    draw();
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
  let SHAPEobj = { name, props, type };
  backendCall("/postSHAPE", "POST", JSON.stringify(SHAPEobj), res => {
    console.log("Post method was successful:", res);
    draw();
  });
});

document.querySelector('.btn-combine').addEventListener('click',()=>{
  let svg_id=document.querySelector('.list-of-svgs').value;
  let shape_id=document.querySelector('.list-of-shapes').value;
  let svg_shapeObj = {svg_id, shape_id};

  backendCall("/insertSVG_SHAPE", "POST", JSON.stringify(svg_shapeObj), res=> {
  console.log("COMBINE",svg_id,shape_id);
  draw();
})
})

const generateSVG=(tag,props)=>{
  const el=document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.entries(props).forEach( ( [key,value] )=>{
    try {
      el.setAttribute(key,value);
    } catch(e){
      console.log(e);
    }
  });
  return el;
}

const clearElement = el => {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
};

const defaultValues={
  "circle":'"cx":50,"cy":30,"r":10',
  "rect":'"x":20,"y":50,"width":40,"height":20',
  "polygon":'"points":"10 10 45 15 20 35"'
}

// draw all the svgs
const drawSVGS = (parent) =>{

  backendCall('/getAllData','GET',null,(res)=>{
    
    //unique list of svg names
    let svgs=[];
    console.log(res)
    res.forEach(el=>{
      if (!svgs.includes(el.svg_name)){
        svgs.push(el.svg_name);
      }
    });
    
    // get just the svgs form the data [ ["picasso","{pros}"],["banksy","{vuewport:232}"]]
    svgs=svgs.map(svgName=>{
      return [svgName,res.find(r=>r.svg_name===svgName).svg_props];
    })
    console.log(svgs);  
    
    let svgObjects={};
    
    // generate all SVGs 
    svgs.forEach(([name,props])=>{
      let svg=generateSVG('svg',JSON.parse(props));  
      svgObjects[name]=svg;
      parent.appendChild(svg);
    })
    
    // generate all shapes and add to relevant SVG
    res.forEach(el=>{
      let shape=generateSVG(el.type,JSON.parse(el.shape_props));
      svgObjects[el.svg_name].appendChild(shape);
    })
  })
}

const populateDropdown=(endpoint,selectClass)=>{
  backendCall(endpoint,'GET',null,(res)=>{
    let list=document.querySelector(selectClass);
    clearElement(list);
    res.forEach(el=>{
      let option=document.createElement('option');
      option.value=el.id;
      option.textContent=el.name;
      list.appendChild(option);
    })
  })
  
}
const draw=()=>{
  populateDropdown('/getSVGs','.list-of-svgs');
  populateDropdown('/getSHAPEs','.list-of-shapes');
  drawSVGS(document.body);
}

draw();