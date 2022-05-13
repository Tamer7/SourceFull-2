import React from 'react';

import Header from '../partials/Header';
import CSDView from '../partials/CSDView';
import Footer from '../partials/Footer';

function CSD() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <CSDView />


      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default CSD;