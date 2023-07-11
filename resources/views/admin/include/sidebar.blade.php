<!-- ========== Left Sidebar Start ========== -->
<div class="vertical-menu">

    <div data-simplebar class="h-100">

        <!--- Sidemenu -->
        <div id="sidebar-menu">
            <!-- Left Menu Start -->
            <ul class="metismenu list-unstyled" id="side-menu">
                <li class="menu-title" key="t-menu">Menu</li>

                <li>
                    <a href="javascript: void(0);" class="waves-effect">
                        <i class="bx bx-home-circle"></i><span class="badge rounded-pill bg-info float-end">04</span>
                        <span key="t-dashboards">Dashboards</span>
                    </a>
                </li>


                <li>
                    <a href="{{ route('admin.utilisateurs.index') }}" class="waves-effect">
                        <i class="bx bx-user-circle"></i>
                        <span key="t-user">Utilisateurs</span>
                    </a>
                </li>

                <li>
                    <a href="javascript: void(0);" class="has-arrow waves-effect">
                        <i class="bx bx-store"></i>
                        <span key="t-ecommerce">Ventes</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li><a href="#" key="t-products">Produits</a></li>
                        <li><a href="#" key="t-orders">Commandes</a></li>
                        <li><a href="#" key="t-add-product">Nouveau Produit</a></li>
                    </ul>
                </li>

                <li>
                    <a href="#" class="waves-effect">
                        <i class="bx bx-envelope"></i>
                        <span key="t-envelope">Email</span>
                    </a>
                </li>

                <li>
                    <a href="#" class="waves-effect">
                        <i class="bx bx-receipt"></i>
                        <span key="t-receipt">Factures</span>
                    </a>
                </li>

                <li>
                    <a href="javascript: void(0);" class="has-arrow waves-effect">
                        <i class="bx bxs-user-detail"></i>
                        <span key="t-contacts">Clients</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li><a href="#" key="t-user-grid">Liste</a></li>
                        <li><a href="#" key="t-profile">Nouveau</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <!-- Sidebar -->
    </div>
</div>
<!-- Left Sidebar End -->
