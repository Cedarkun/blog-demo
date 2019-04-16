import React from 'react';
import {render} from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import '../css/common.css';
import '../css/index.css';

render(
    <div>
        <Header />
        <Footer />
    </div>
    , document.getElementById('app')
);