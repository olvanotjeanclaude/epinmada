import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="vertical-menu">

            <div data-simplebar className="h-100">

                <div id="sidebar-menu">
                    <ul className="metismenu list-unstyled" id="side-menu">
                        <li className="menu-title" key="t-menu">Menu</li>

                        <li>
                            <Link to="/dashboard" className="waves-effect">
                                <i className="bx bx-home-circle"></i><span className="badge rounded-pill bg-info float-end">04</span>
                                <span key="t-dashboards">Dashboard</span>
                            </Link>
                        </li>


                        <li>
                            <Link to="/utilisateurs" className="waves-effect">
                                <i className="bx bx-user-circle"></i>
                                <span key="t-user">Utilisateurs</span>
                            </Link>
                        </li>

                        <li>
                            <a className="has-arrow waves-effect">
                                <i className="bx bx-store"></i>
                                <span key="t-ecommerce">Ventes</span>
                            </a>
                            <ul className="sub-menu" ariaexpanded="false">
                                <li><Link to="/produits" key="t-products">Produits</Link></li>
                                <li><Link to="/commandes" key="t-orders">Commandes</Link></li>
                                <li><Link to="/produits/nouveau" key="t-add-product">Nouveau Produit</Link></li>
                            </ul>
                        </li>

                        <li>
                            <a href="/#" className="waves-effect">
                                <i className="bx bx-envelope"></i>
                                <span key="t-envelope">Email</span>
                            </a>
                        </li>

                        <li>
                            <a href="/#" className="waves-effect">
                                <i className="bx bx-receipt"></i>
                                <span key="t-receipt">Factures</span>
                            </a>
                        </li>

                        <li>
                            <a href="/#" className="has-arrow waves-effect">
                                <i className="bx bxs-user-detail"></i>
                                <span key="t-contacts">Clients</span>
                            </a>
                            <ul className="sub-menu" ariaexpanded="false">
                                <li><a href="/#" key="t-user-grid">Liste</a></li>
                                <li><a href="/#" key="t-profile">Nouveau</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default Sidebar