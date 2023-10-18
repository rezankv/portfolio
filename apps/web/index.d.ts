/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.svg' {
  const content: any;
  export const ReactComponent: any;
  export default content;
}

declare namespace JSX {
  interface IntrinsicElements {
    'ion-icon': HTMLElement<{ name: string }>;
  }
}
