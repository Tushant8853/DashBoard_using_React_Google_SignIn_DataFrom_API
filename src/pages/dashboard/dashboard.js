import React from 'react';
import Footer from '../component/footer/footer';
import Header from '../component/header/header';
import Menu from '../component/menu/menu';
import App_body from '../component/app_body/app_body';
import '../../css/dashboard.css';

const Dashboard = () => {
  return (
    <div className='Main_container'>
        <div className='left-container'>
            <div className='Menu_container'>
                <Menu/>
            </div>
        </div>
        <div className='right-container'>
            <div className='Header_container'>
                <Header />
            </div>
            <div className='App_body_cotainer'>
                <App_body />
            </div>
            <div className='Footer_container'>
                <Footer />
            </div>
        </div>
    </div>
  );
}

export default Dashboard;