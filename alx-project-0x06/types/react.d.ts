declare module 'react' {
  // Proper ReactNode type definition without 'any'
  export type ReactNode = 
    | string 
    | number 
    | boolean 
    | null 
    | undefined 
    | ReactElement 
    | ReactFragment 
    | ReactPortal;
  
  interface ReactElement<
    P = unknown,
    T extends string | JSXElementConstructor<unknown> = string | JSXElementConstructor<unknown>
  > {
    type: T;
    props: P;
    key: string | number | null;
  }
  
  interface ReactFragment {
    children?: ReactNode;
  }
  
  interface ReactPortal {
    key: string | number | null;
    children: ReactNode;
  }
  
  interface JSXElementConstructor<P> {
    (props: P): ReactElement | null;
  }
  
  // Proper FC type
  export type FC<P = Record<string, unknown>> = FunctionComponent<P>;
  
  export interface FunctionComponent<P = Record<string, unknown>> {
    (props: P, context?: unknown): ReactElement | null;
    propTypes?: unknown;
    contextTypes?: unknown;
    defaultProps?: Partial<P>;
    displayName?: string;
  }
  
  // HTML element props
  export interface HTMLAttributes<T> {
    children?: ReactNode;
    className?: string;
    onClick?: () => void;
    type?: string;
  }
  
  export interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
  }
  
  export interface AnchorHTMLAttributes<T> extends HTMLAttributes<T> {
    href?: string;
  }
  
  export interface DetailedHTMLProps<E extends HTMLAttributes<T>, T> extends E {}
}

declare global {
  namespace JSX {
    interface Element extends React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>> {}
    
    interface ElementClass {
      render(): React.ReactNode;
    }
    
    interface ElementAttributesProperty {
      props: unknown;
    }
    
    interface ElementChildrenAttribute {
      children: unknown;
    }
    
    // Define specific HTML elements with proper types
    interface IntrinsicElements {
      div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
      span: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
      button: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
      a: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
      p: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
      h1: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      h2: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      h3: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      header: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      footer: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      main: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      nav: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}