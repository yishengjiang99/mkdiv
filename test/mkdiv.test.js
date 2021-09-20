import { mkdiv, mksvg } from "../mkdiv.js";

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
});
