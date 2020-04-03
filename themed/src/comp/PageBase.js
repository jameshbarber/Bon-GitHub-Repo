import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar-Left';

class PageBase extends React.Component {
    render() {
        return (
            <div>
          <Header></Header>
          <Sidebar></Sidebar>
          <Footer></Footer>
          </div>
        );
    }
}

export default PageBase;
