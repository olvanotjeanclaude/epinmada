// Pages
import { Home, ProductList, User } from './pages';

// Icons
import ExploreIcon from '@material-ui/icons/Explore';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Inventory2Icon from '@mui/icons-material/Inventory2';

export default {
  items: [
    {
      path: '/',
      name: 'Dashboard',
      type: 'link',
      icon: ExploreIcon,
      component: Home
    },
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
    }
  ]
};
