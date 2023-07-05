//to run use npm start in terminal

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import img from './Deepanshu.jpg';
import linkedin from './linkedin.svg';

function Top(){ 
  return (<div className='top-div'>
    <img src = {img} className='img-deep'></img>
    <h2>Deepanshu Aggarwal</h2>
    <h4>Frontend Developer</h4>
    <h5>webdeveloper.website</h5>
    <div>
      <button className='btn btn-1'><i class="fa fa-envelope"></i> Email</button>
      <button className='btn btn-2'><img className='image' src={linkedin}/>LinkedIn</button>
    </div>
  </div>)
}

function Mid(){
  return(
    <>
      <h3 className='about'>About</h3>
      <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet tortor ut turpis tincidunt hendrerit. Integer maximus accumsan viverra. Cras mauris ligula, dictum ac eros eu, suscipit viverra augue.</h5>
      <h3 className='interest'>Interests</h3>
      <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet tortor ut turpis tincidunt hendrerit. Integer maximus accumsan viverra. Cras mauris ligula, dictum ac eros eu, suscipit viverra augue.</h5>
    </>
  )
}

ReactDOM.render((
  <div className='container'>
    <Top/>
    <Mid/>
  </div>
), document.getElementById("root")
);