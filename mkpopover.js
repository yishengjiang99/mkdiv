import { mkdiv } from "./mkdiv";

export function mkpopover({ title, children }) {
  return mkdiv("div", {
    innerHTML: `<div class="popover__wrapper">
  <a href="#">
    <h2 class="popover__title">Hover:me</h2>
  </a>
  <div class="popover__content">
	${children}
  </div>
</div>`,
  });
}
