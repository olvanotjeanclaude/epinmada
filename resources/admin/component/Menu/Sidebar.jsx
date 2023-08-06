import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import menus from '../../js/menus';

import '../../assets/scss/menus.scss';

function Sidebar() {
    const [active, setActive] = useState('');
    const [subActive, setSubActive] = useState('');
    const verticalMenuRef = useRef();

    const handleActive = (menu) => {
        setActive(menu);
    };

    const handleClickOutside = (event) => {
        const classList = [...event.target.classList];

        if(classList.includes("toggle-sidebar") || classList.includes("toggle-sidebar-icon")){
            document.body.classList.toggle("sidebar-enable");
        }

        else if (verticalMenuRef.current && !verticalMenuRef.current.contains(event.target)) {
            document.body.classList.remove("sidebar-enable");
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="vertical-menu" ref={verticalMenuRef}>
            <div data-simplebar className="h-100">
                <div id="sidebar-menu">
                    <ul className="metismenu list-unstyled" id="side-menu">
                        <li className="menu-title" key="t-menu">
                            Menu
                        </li>
                        {menus.map((menu) => menu.children ? (
                            <li key={uuid()}  onClick={() => handleActive(menu.name)}  className={active === menu.name ? 'mm-active' : ''} >
                                <a className="has-arrow waves-effect" >
                                    {menu.icon}
                                    <span key={`t-${menu.name.toString()}`}>{menu.name}</span>
                                </a>
                                <ul className={`sub-menu mm-collapse ${active === menu.name ? 'mm-show' : ''}`}>
                                    {menu.children.map((subMenu) => (
                                        <li key={uuid()} onClick={() => setSubActive(subMenu.name)}>
                                            <Link to={subMenu.path} key={`t-${subMenu.name.toString()}`}
                                                className={subActive === subMenu.name ? 'mm-active' : ''}
                                            >
                                                {subMenu.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ) : (
                            <li
                                key={uuid()}
                                onClick={() => handleActive(menu.name)}
                                className={active === menu.name ? 'mm-active' : ''}
                            >
                                <Link to={menu.path} className="waves-effect">
                                    {menu.icon}
                                    <span key={`t-${menu.name.toString()}`}>{menu.name}</span>
                                </Link>
                            </li>
                        )
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
