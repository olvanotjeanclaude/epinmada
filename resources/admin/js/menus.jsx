export default  [
    {
        name: "Dashboard",
        icon: <i className="bx bx-home-circle"></i>,
        path: "/dashboard",
    },
    {
        name: "Utilisateurs",
        icon: <i className="bx bx-user-circle"></i>,
        path: "/utilisateurs"
    },
    {
        name: "Produits",
        icon: <i className="bx bx-store"></i>,
        children: [
            {
                name: "Produits",
                path: "/produits"
            },
            {
                name: "Nouveau",
                path: "/produits/nouveau"
            },
        ]
    },
    {
        name: "Ventes",
        icon: <i className="bx bx-receipt"></i>,
        path: "/ventes",
        // children: [
        //     {
        //         name: "Ventes",
        //         path: "/ventes"
        //     },
        //     {
        //         name: "Nouveau",
        //         path: "/ventes/nouveau"
        //     },
        // ]
    },
    // {
    //     name: "Email",
    //     icon: <i className="bx bx-envelope"></i>,
    //     path: "",
    // },
    {
        name: "Clients",
        icon: <i className="bx bxs-user-detail"></i>,
        path: "/clients"
    },
];