// components/Layout.js
import React from 'react';
import { Analytics } from '@vercel/analytics/react';

const Layout = ({ children }) => (
  <div>
    {children}
    <Analytics />
  </div>
);

export default Layout;
