import React from 'react';
import '../../../css/app_body.css';
import Box1 from './Box/Box1';
import Box2 from './Box/Box2';
import Box3 from './Box/Box3';
import Box5 from './Box/Box5';
import Box6 from './Box/Box6';
import Box7 from './Box/Box7';


const App_body = () => {
  return (
    <div className="main_container">
      <div className="section section1">
        <div className="box_row1 box1">
          <Box1 />
        </div>
        <div className="box_row1 box2">
          <Box2 />
        </div>
        <div className="box_row1 box3">
          <Box3 />
        </div>
      </div>
      <div className="section section2">
        <div className="box_row2 box5">
          <Box5 />
        </div>
      </div>
      <div className="section section3">
        <div className="box_row3 box6">
          <Box6 />
        </div>
        <div className="box_row3 box7">
          <Box7 />
        </div>
      </div>
    </div>
  );
};

export default App_body;
