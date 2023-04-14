export declare type MkdivContent =
  | string
  | string[]
  | HTMLElement
  | (string | HTMLElement)[]
  | HTMLElement[];
export declare type MkdivRetVal = HTMLElement & { attachTo: (div: HTMLElement) => void };
export declare function mkdiv(
  type: string | keyof HTMLElementTagNameMap,
  attr?: Record<string, string | EventListenerObject>,
  children?: MkdivContent
): MkdivRetVal;
export declare function mkdiv(
  type: string | keyof HTMLElementTagNameMap,
  children?: MkdivContent
): MkdivRetVal;
export declare function mkdiv(
  type: string | keyof HTMLElementTagNameMap,
  attr?: Record<string, string | any>,
  children?: MkdivContent
): MkdivRetVal
export declare function mksvg(tag: any, attrs?: {}, children?: any[]): any;

export declare function wrapDiv(div: any, tag: any, attrs?: {}): HTMLElement;
export declare function wrapList(divs: any, tag?: string): HTMLElement;
export declare function logdiv(div?: HTMLElement): {
  stdout: (string) => void;
  stderr: (string) => void;
  infoPanel: HTMLElement;
  errPanel: HTMLElement;
};
export declare type MkdivOption = {
  tag: string;
  attr?: Record<string, string | EventListenerObject>;
  children: MkdivContent;
};
export declare function mkdiv2(options: MkdivOption): MkdivContent;
