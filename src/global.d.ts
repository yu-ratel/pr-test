declare module '*.svg' {
  import React from 'react';
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;

  export default src;
}

declare module '*.svg?react' {
  import React from 'react';
  const Component: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

  export default Component;
}

declare module '*.webp' {
  const value: any;
  export = value;
}
