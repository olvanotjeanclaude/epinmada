// Pages
import { Home, MyAccount, MyBasket, MyOrders, MyQuestion, Offer, ProductList, User } from './pages';

// Icons
import ExploreIcon from '@material-ui/icons/Explore';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LiveHelp from "@mui/icons-material/LiveHelp";
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ListAltIcon from '@mui/icons-material/ListAlt';

export default {
  items: [
    // CUSTOMER
    {
      path: '/',
      name: 'Dashboard',
      type: 'link',
      icon: ExploreIcon,
      component: Home
    },
    {
      path: '/my-orders',
      name: 'Mes Commandes',
      type: 'link',
      icon: ListAltIcon,
      component: MyOrders
    },
    {
      path: '/my-basket',
      name: 'Mon Panier',
      type: 'link',
      icon: ShoppingBasketIcon,
      component: MyBasket
    },
    {
      path: '/offers',
      name: 'offres Spéciales Pour Vous',
      type: 'link',
      icon: LocalOfferIcon,
      component: Offer
    },
    { 
      path: '/my-account',
      name: 'Mon Compte',
      type: 'link',
      icon: ContactPageIcon,
      component: MyAccount
    },
    // { 
    //   path: '/my-questions',
    //   name: 'Mes Questions',
    //   type: 'link',
    //   icon: LiveHelp,
    //   component: MyQuestion
    // },
    // ADMİN
    {
      path: "/utilisateurs",
      name:"utilisateurs",
      type: 'link',
      icon: PeopleAltIcon,
      component: User
    },
    {
      path: "/produits",
      name:"produits",
      type: 'link',
      icon: Inventory2Icon,
      component: ProductList
    },
  ]
};
