import { mkdiv, mksvg, logdiv, wrapList, wrapDiv } from "../mkdiv.js";

describe("mkdiv", () => {
  it("one argument", () => {
    const div = mkdiv("div");
    expect(div).exist;
    expect(div).instanceOf(HTMLDivElement);
    expect(div.attachTo).instanceOf(Function);
  });
  it("create a div with innerHTML", () => {
    const div = mkdiv("div", "t");
    expect(div.innerHTML).eq("t");
  });
  it("create a div with properties", () => {
    const div = mkdiv("div", { class: "t" }, "");
    expect(div.className).eq("t");
  });
  it("create nexted divs", () => {
    const div = mkdiv("div", {}, [mkdiv("span")]);
    expect(div.innerHTML).eq("<span></span>");
  });
  it("create onclicks", () => {
    const div = mkdiv(
      "div",
      { onclick: () => (document.body.innerHTML += "test2") },
      [mkdiv("span")]
    );
    div.click();
    expect(document.body.innerHTML.includes("test2"));
  });
  it("allows div to attach to another", () => {
    const div = mkdiv("div", "d1111");
    const section = mkdiv("section", "stest");

    div.attachTo(section);
    expect(section.innerHTML).to.include("d111");
  });
});

describe("logdiv", () => {
  it("returns functions to log things", () => {
    const { stdout, stderr, infoPanel, errPanel } = logdiv();
    stdout("hello");
    console.log(infoPanel.innerHTML);
    expect(infoPanel.innerHTML).includes("hello");
    for (let i = 34; i < 422; i++) {
      stderr("log [" + i + "]");
    }
    expect(errPanel.innerHTML).to.not.include("log [34]");
  });
});
describe("wrapDiv", () => {
  it("wraps div in another div", () => {
    const inner = mkdiv("span", "1234");
    const outter = wrapDiv(inner, "div");
    expect(outter.querySelector("span").innerHTML).to.eq("1234");
  });
});
describe("wrapList", () => {
  it("wraps divs together", () => {
    const container = wrapList(
      [mkdiv("li", "item1"), mkdiv("li", "item2")],
      "ul"
    );
    console.log(container.innerHTML);
    expect(container.innerHTML).to.eq("<li>item1</li><li>item2</li>");
  });
});
describe("mksvg", () => {
  it("makes svg element", () => {
    const svg = mksvg(
      "svg",
      {
        style: "width:80px;height:59px; display:inline;",
        viewBox: "0 0 80 60",
        "xlink:href": "localhost",
      },
      [
        mksvg("polyline", {
          fill: "red",
          stroke: "black",
        }),
      ]
    );
    expect(svg.querySelectorAll("polyline").length).to.eq(1);
  });
});
