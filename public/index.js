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