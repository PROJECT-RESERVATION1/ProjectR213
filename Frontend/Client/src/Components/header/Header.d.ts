// Header.d.ts
import React from 'react';

export interface HeaderProps {
  type?: string; // Define your prop types here
}

declare module './Header' {
  const Header: React.FC<HeaderProps>;
  export default Header;
}
