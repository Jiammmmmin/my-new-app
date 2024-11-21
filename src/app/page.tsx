import Image from "next/image";

import React from 'react';
import SharingConfig from './components/SharingConfig';
import UserAccessList from './components/UserAccessList';
import './styles/globals.css';
import type { AppProps } from 'next/app';
const Home: React.FC = () => {
  return (
    <div className="container">
      <header>
        <h1>Emails & Calendar / julian@attio.com</h1>
        <p>Update your inbox permissions and settings.</p>
      </header>
      <main>
        <SharingConfig />
        <UserAccessList />
      </main>
    </div>
  );
};

export default Home;
