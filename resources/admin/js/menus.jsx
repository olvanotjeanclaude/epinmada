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
        name: "Ventes",
        icon: <i className="bx bx-store"></i>,
        children: [
            {
                name: "Produits",
                path: "/produits"
            },
            {
                name: "Commandes",
                path: "/commandes"
            },
            {
                name: "Nouveau Produit",
                path: "/produits/nouveau"
            },
        ]
    },
    // {
    //     name: "Email",
    //     icon: <i className="bx bx-envelope"></i>,
    //     path: "",
    // },
    {
        name: "Factures",
        icon: <i className="bx bx-receipt"></i>,
        path: "",
    },
    {
        name: "Clients",
        icon: <i className="bx bxs-user-detail"></i>,
        children: [
            {
                name: "Liste",
                path: "/clients"
            },
            {
                name: "Nouveau",
                path: ""
            },
        ]
    },
];