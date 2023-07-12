import React from 'react'
import Footer from './Footer'
import { Outlet } from 'react-router-dom';

function RightContent() {
    return (
        <div className="main-content">

            <div className="page-content">
                <div className="container-fluid">
                    <Outlet />
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default RightContent;