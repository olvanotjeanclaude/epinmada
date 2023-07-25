import  { useEffect, useState } from 'react'
import HeaderDropDown from './HeaderDropDown';
import SettingSpinner from './SettingSpinner';
import SearchForm from './SearchForm';

function Topbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  

  useEffect(() => {
    document.body.classList.toggle('sidebar-enable', isSidebarOpen);
  }, [isSidebarOpen])

  return (
    <>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box">
              {/* <a href="/" className="logo logo-dark">
                <span className="logo-sm">
                  <img src="/assets/images/logo.svg" alt="" height="22" />
                </span>
                <span className="logo-lg">
                  <img src="/assets/images/logo-dark.png" alt="" height="17" />
                </span>
              </a>

              <a href="/" className="logo logo-light">
                <span className="logo-sm">
                  <img src="/assets/images/logo-light.svg" alt="" height="22" />
                </span>
                <span className="logo-lg">
                  <img src="/assets/images/logo-light.png" alt="" height="19" />
                </span>
              </a> */}
            </div>

            <button type="button" onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="btn btn-sm px-3 font-size-16 header-item waves-effect"
              id="vertical-menu-btn">
              <i className="fa fa-fw fa-bars"></i>
            </button>

          </div>

          <div className="d-flex">

            <div className="dropdown d-inline-block d-lg-none ms-2">
              <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-search-dropdown"
                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                <i className="mdi mdi-magnify"></i>
              </button>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                aria-labelledby="page-header-search-dropdown">

                <SearchForm />
              </div>
            </div>

    
            <div className="dropdown d-none d-lg-inline-block ms-1">
              <button type="button" className="btn header-item noti-icon waves-effect" data-bs-toggle="fullscreen">
                <i className="bx bx-fullscreen"></i>
              </button>
            </div>

            {/* <Notification /> */}

           <HeaderDropDown />

           <SettingSpinner />

          </div>
        </div>
      </header>
    </>
  )
}

export default Topbar