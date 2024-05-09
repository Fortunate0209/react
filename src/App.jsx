import logo from"./assets/images/google.png"
import search from"./assets/images/sicon.svg"
import mic from"./assets/images/mic.svg"
import cam from"./assets/images/cam.svg"
import leave from"./assets/images/ewe.png"

import React from 'react'

const App = () => {
  let logosvg ={
    display:'block',
    margin:'auto',
    marginTop:'150px',
    width:'400px'
  }
  


  return (
    <div>
      <img style={logosvg} src={logo} alt="" />

      <div className="inputtext">
        <input type="text" autoFocus placeholder=""/>

        <div className="icon">
          <span className="search"><img src={search} alt="" /></span>

          <div className="icon2">
          <span><img src={mic} alt="" /></span>
          <span><img style={{width:'24px'}} src={cam} alt="" /></span>
          </div>
        </div>

        <div className="butt">
          <button>Google Serach</button>
          <button>I'm Feeling Lucky</button>
        </div>
      </div>

      <div className="language">
        Google offered in:
      
        <a href=""> Hausa</a>
        <a href="">Igbo Èdè</a>
        <a href="">Yorùbá</a>
        <a href="">Nigerian Pidgin</a>
      </div>

      <footer>
        <div style={{backgroundColor:'#f2f2f2', padding:'15px', marginTop:'100px', borderBottom:"1px solid black",}}><p style={{marginLeft:'20px'}}>Nigeria</p></div>
        <div className="gfooter">
          <div className="footer1">
            <a href="">About</a>
            <a href="">Advertising</a>
            <a href="">Business</a>
            <a href="">How Search works</a>
          </div>


        <div className="footer2">
          <a href="" ><img src={leave} alt="" />Our third decade of climate action: join us</a>
        </div>

        <div className="footer3">
          <a href="">Privacy</a>
          <a href="">Terms</a>
          <a href="">Setting</a>
        </div>
        </div>
      </footer>
    </div>
  )
}

export default App
