import React from 'react';
import { render } from 'react-dom';
import "./assets/index.scss";
import Pages from './Pages';

const Application: React.FC<{}>  = () => (
    <Pages/>
)

render(<Application />, document.getElementById('root'));