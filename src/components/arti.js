import React from 'react';
import Header from './header';
import './arti.scss';

export default ({children}) =>

<section className="container">
    
    <Header/>
    <div className="arti">
        {children}
    </div>

</section>
