import React from 'react';
import { Link } from 'react-router-dom';

import './header.css'

const Header = () => {
  return (
    <nav> 
      <div className='logo'>
        <a>Profile</a>
      </div>

        <div class="menu">
            <ul>
                <li>
                  <Link to={"./art-lists"}>
                    <a>Arts</a>
                  </Link>  
                </li>

                <li>
                  <Link to={"./other"}>
                    <a>---</a>
                  </Link>  
                </li>

                <li>
                  <Link to={"./me"}>
                    <a>Others</a>
                  </Link>  
                </li>

            </ul>
        </div>
    </nav>
  );
};

export default Header;