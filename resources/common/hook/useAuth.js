import { useQuery } from 'react-query';
import http from '@/common/http';

const fetchUser = async () => await http.get('/user').then(res => res.data);

const useAuth = () => {
    const { data: user, isLoading: userLoading, isError: userError } = useQuery('user', fetchUser, {
        retry: 1,
        staleTime: 1000 * 60 * 5,
    });

    const logout = async () => {
        const response = await http.post('/logout').then((response) => response.data);

        if (response.type === 'success') {
            return (location.href = '/sign-in');
        }

        location.replace("/");
    };

    const isAdministrationPage = user && (user.type == 1 || user.type == 2);

    const isCustomerPage = user && user.type == 3;

    return {
        logout,
        user,
        userLoading,
        userError,
        isAdministrationPage,
        isCustomerPage
    };
};

export default useAuth;
