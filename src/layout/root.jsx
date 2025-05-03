import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../Components/Navber/Navber';

const root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default root;