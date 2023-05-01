export function mkdiv(type, attr, children) {
  switch (arguments.length) {
    case 1:
      return mkdiv(type, {}, "");
    case 2:
      return Array.isArray(attr) || typeof attr === "string" ? mkdiv(type, {}, attr) : mkdiv(type, attr, []);
    default:
      break;
  }
  const div = document.createElement(type);
  for (const key in attr) {
    if (key.match(/$on(.*)/)) {
      div.addEventListener(key.match(/on(.*)/)[1], attr[key]);
    } else {
      div.setAttribute(key, attr[key]);
    }
  }
  const charray = !Array.isArray(children) ? [children] : children;
  charray.forEach((c) => {
    typeof c == "string" ? (div.innerHTML += c) : div.append(c);
  });
  div.attachTo = function (parent) {
    if (!parent) document.body.append(this);
    else parent.append(this);
    return this;
  };
  return div;
}
export function mksvg(tag, attrs = {}, children = []) {
  var el = document.createElementNS("http://www.w3.org/2000/svg", tag);
  for (var k in attrs) {
    if (k == "xlink:href") {
      el.setAttributeNS("http://www.w3.org/1999/xlink", "href", attrs[k]);
    } else {
      el.setAttribute(k, attrs[k]);
    }
  }
  const charray = !Array.isArray(children) ? [children] : children;
  charray.forEach((c) => el.append(c));
  return el;
}

export function wrapDiv(div, tag, attrs = {}) {
  return mkdiv(tag, attrs, [div]);
}
export function wrapList(divs, tag = "div") {
  return mkdiv(tag, {}, divs);
}

const logDivStyle = "width:40vw;height:280px;overflow-y:scroll";
export function logdiv() {
  const logs = [],
    errLogs = [],
    infoPanel = mkdiv("textarea", {
      rows: 50,
      style: logDivStyle,
    }),
    errPanel = mkdiv("textarea", {
      style: logDivStyle,
    });

  const stdout = (log) => pushLog(log, logs, infoPanel);
  const stderr = (log) => pushLog(log, errLogs, errPanel);

  function pushLog(str, logArr, destination) {
    logArr.push((performance.now() / 1e3).toFixed(3) + ": " + str);
    if (logArr.length > 100) logArr.shift();
    destination.innerHTML = logs.join("\n");
    // requestAnimationFrame(() => (destination.scrollTop = destination.scrollHeight));
  }
  return {
    stderr,
    stdout,
    infoPanel,
    errPanel,
  };
}
export function mkdiv2({tag, children, ...attr}) {
  return mkdiv(tag, attr, children);
}
