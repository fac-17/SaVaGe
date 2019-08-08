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

const SVGbutton = document.querySelector(".SVGbutton");
const SVGname = document.querySelector(".SVGname");
const SVGprops = document.querySelector(".SVGprops");

SVGbutton.addEventListener("click", () => {
  const name = SVGname.value;
  const props = "{" + SVGprops.value + "}";
  const SVGobject = { name, props };
  backendCall("/postSVG", "POST", JSON.stringify(SVGobject), res => {
    draw();
    SVGname.value = "";
    SVGprops.value = "";
  });
});

const SHAPEbutton = document.querySelector(".SHAPEbutton");
const SHAPEname = document.querySelector(".SHAPEname");
const SHAPEprops = document.querySelector(".SHAPEprops");
const SHAPEtype = document.querySelector(".SHAPEtype");

SHAPEbutton.addEventListener("click", () => {
  const name = SHAPEname.value;
  const type = SHAPEtype.value;
  const props = "{" + SHAPEprops.value + "}";
  const SHAPEobj = { name, props, type };
  backendCall("/postSHAPE", "POST", JSON.stringify(SHAPEobj), res => {
    draw();
    SHAPEname.value = "";
  });
});

document.querySelector(".btn-combine").addEventListener("click", () => {
  const svg_id = document.querySelector(".list-of-svgs").value;
  const shape_id = document.querySelector(".list-of-shapes").value;
  const svg_shapeObj = { svg_id, shape_id };

  backendCall("/insertSVG_SHAPE", "POST", JSON.stringify(svg_shapeObj), res => {
    draw();
  });
});

const generateSVG = (tag, props) => {
  const el = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.entries(props).forEach(([key, value]) => {
    try {
      el.setAttribute(key, value);
    } catch (e) {}
  });
  return el;
};

const clearElement = el => {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
};

const defaultValues = {
  circle: '"cx":50,"cy":30,"r":10',
  rect: '"x":20,"y":50,"width":40,"height":20',
  polygon: '"points":"10 10 45 15 20 35"'
};

// draw all the svgs
const drawSVGS = () => {
  const parent = document.querySelector(".svgs-gallery");

  backendCall("/getAllData", "GET", null, res => {
    clearElement(parent);
    //unique list of svg names
    let svgs = [];
    res.forEach(el => {
      if (!svgs.includes(el.svg_name)) {
        svgs.push(el.svg_name);
      }
    });

    // get just the svgs form the data [ ["picasso","{pros}"],["banksy","{vuewport:232}"]]
    svgs = svgs.map(svgName => {
      return [svgName, res.find(r => r.svg_name === svgName).svg_props];
    });

    const svgObjects = {};
    // generate all SVGs
    svgs.forEach(([name, props]) => {
      const svg = generateSVG("svg", JSON.parse(props));
      svgObjects[name] = svg;
      const wrapper = document.createElement("div");
      wrapper.classList.add("svg-wrapper");
      const title = document.createElement("h3");
      title.textContent = name;
      const code = document.createElement("pre");
      code.classList.add("svg-code");
      wrapper.appendChild(title);
      wrapper.appendChild(svg);
      wrapper.appendChild(code);
      parent.appendChild(wrapper);
    });
    // generate all shapes and add to relevant SVG
    res.forEach(el => {
      const shape = generateSVG(el.type, JSON.parse(el.shape_props));
      svgObjects[el.svg_name].appendChild(shape);
    });
    // update code elements for all svgs
    svgs.forEach(([name, props]) => {
      const svg = svgObjects[name];
      const code = svg.parentNode.querySelector(".svg-code");
      code.textContent = svg.outerHTML;
    });
  });
};

const populateDropdown = (endpoint, selectClass) => {
  backendCall(endpoint, "GET", null, res => {
    const list = document.querySelector(selectClass);
    clearElement(list);
    res.forEach(el => {
      const option = document.createElement("option");
      option.value = el.id;
      option.textContent = el.name;
      list.appendChild(option);
    });
  });
};

const populateDefaultValue = () => {
  const type = document.querySelector(".SHAPEtype").value;
  document.querySelector(".SHAPEprops").value = defaultValues[type];
};

document
  .querySelector(".SHAPEtype")
  .addEventListener("change", populateDefaultValue);

const draw = () => {
  populateDropdown("/getSVGs", ".list-of-svgs");
  populateDropdown("/getSHAPEs", ".list-of-shapes");
  populateDefaultValue();
  drawSVGS();
};

draw();