import Footer from './Footer'
import { Outlet } from 'react-router-dom';
import ToastMessage from '../Message/ToastMessage';

function RightContent() {
    return (
        <div className="main-content">
            <div className="page-content">
                <div className="container-fluid">
                    <ToastMessage />
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default RightContent;