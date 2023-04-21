// Pages
import { Home, User } from './pages';

// Icons
import ExploreIcon from '@material-ui/icons/Explore';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

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
    }
  ]
};
