// Pages
import { Home } from './pages';

// Icons
import ExploreIcon from '@material-ui/icons/Explore';


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
      nam:"utilisateurs",
      type: 'link',
      icon: ExploreIcon,
      component: Home
    }
  ]
};
