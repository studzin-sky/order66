import React from 'react';
import './MainBody.css';

import Header from './Header/Header';
import Content from './Content/Content';

const DUMMY_DATA = [
    {
        id: 'people/1',
        name: 'Luke Skywalker',
        type: 'people',
    }, 
    {
        id: 'planet/1',
        name: 'Naboo',
        type: 'planet',
    },
    {
        id: 'starship/1',
        name: 'Millenium Falcon',
        type: 'starship',
    }
]

const MainBody = () => {
    return (
    <div className='outer-body'>
        <Header />
        <Content items={DUMMY_DATA}/>
    </div>
    );
}

export default MainBody;