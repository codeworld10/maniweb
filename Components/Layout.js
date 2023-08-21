// components/Layout.js
import React from 'react';
import { Analytics } from '@vercel/analytics/react';

const Layout = ({ children }) => (
  <div>
    <Analytics />
    {children}
  </div>
);

export default Layout;
