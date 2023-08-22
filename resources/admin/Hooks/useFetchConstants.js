import { useQuery } from 'react-query';
import http from '../Helper/makeRequest';

const useFetchConstants = () => {
    const fetchConstants = async () => {
        return (await http.get('/constants')).data;
    };

    const { data, isLoading, isError } = useQuery({
        queryKey: "fetchConstants",
        queryFn: fetchConstants
    });

    return {
        user_types: {
            ...data?.user_types ?? {}
        },
        paymentMethods: data?.payementMethods ?? {},
        isLoading,
        isError
    };
};

export default useFetchConstants;
