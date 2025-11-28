export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface PageRouteProps {
  // Page component props
}