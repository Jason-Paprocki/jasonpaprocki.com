function getIP(json) {
  document.querySelectorAll('main > div > h1')[0].innerHTML = `Hello, ${json.ip}`;
}
document.write('<script type="application/javascript"src="https://api.ipify.org?format=jsonp&callback=getIP"></script>')
