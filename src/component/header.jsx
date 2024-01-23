import React from 'react';
import { Link } from 'react-router-dom';

import './header.css'

const Header = () => {
  return (
    <nav>
      <div className='logo'>
        <a>ArcArts</a>
      </div>

        <div class="menu">
            <ul>
                <li>
                  <Link to={"./about"}>
                    <a>About</a>
                  </Link>  
                </li>

                <li>
                  <Link to={"./other"}>
                    <a>Others</a>
                  </Link>  
                </li>

                <li>
                  <Link to={"./me"}>
                    <a>Me</a>
                  </Link>  
                </li>

            </ul>
        </div>
    </nav>
  );
};

export default Header;