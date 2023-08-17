import path from "./path";
import ListIcon from '@mui/icons-material/List';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyIcon from '@mui/icons-material/Key';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import AddHomeIcon from '@mui/icons-material/AddHome';
import { Dashboard } from "@mui/icons-material";

const menus = [
    // {
    //     name: "Dashboard",
    //     path: path.dashboard,
    //     type: "item",
    //     icon: <Dashboard />

    // },
    {
        name: "Achats",
        type: "group",
        icon: <ReceiptIcon />,
        children: [
            {
                name: "Commandes",
                path: path.orders,
                type: "item",
                icon: <ListIcon />

            },
            {
                name: "Mon Panier",
                path: path.basket,
                type: "item",
                icon: <ShoppingCartIcon />
            },
            {
                name: "Populaire",
                path: path.popular,
                type: "item",
                icon: <AddHomeIcon />
            },
        ]
    },
    {
        name: "Mes informations",
        icon: <PermIdentityIcon />,
        type: "group",
        children: [
            {
                name: "Mon Profile",
                path: path.profile,
                type: "item",
                icon: <AccountBoxIcon />
            },
            {
                name: "Mot De Passe",
                path: path.password,
                type: "item",
                icon: <KeyIcon />
            },
        ]
    }
]

export default menus;

export const mobileMenus = menus.reduce((prev, current) => {
    if (current.type == "group") {
        prev = [...prev, ...current.children];
    }
    else {
        prev.push(current);
    }
   
    return prev.filter(menu =>menu.path != path.password);
}, []);