export declare type MkdivContent =
  | string
  | string[]
  | HTMLElement
  | (string | HTMLElement)[]
  | HTMLElement[];
export declare function mkdiv(
  type: string | keyof HTMLElementTagNameMap,
  attr?: Record<string, string | EventListenerObject>,
  children?: MkdivContent
): HTMLElement;
export declare function mkdiv(
  type: string | keyof HTMLElementTagNameMap,
  children?: MkdivContent
): HTMLElement;
export declare function mkdiv(
  type: string | keyof HTMLElementTagNameMap,
  attr?: Record<string, string | any>,
  children?:
    | string
    | string[]
    | HTMLElement
    | (string | HTMLElement)[]
    | HTMLElement[]
): HTMLElement;
export declare function mksvg(tag: any, attrs?: {}, children?: any[]): any;

export declare function wrapDiv(div: any, tag: any, attrs?: {}): HTMLElement;
export declare function wrapList(divs: any, tag?: string): HTMLElement;
