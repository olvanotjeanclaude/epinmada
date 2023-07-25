import { useQueryClient } from "react-query";

const useReactQuery = (serviceInstance) => {
    const queryClient = useQueryClient();

    const fetchAll = async (page = 1, params) => {
       return await serviceInstance.fetchAll(page, params);
    };

    const create = async (data) => {
        await serviceInstance.store(data);
        queryClient.invalidateQueries(serviceInstance.name);
    }

    const show = async (id) => {
        await serviceInstance.show(id);
        queryClient.invalidateQueries(serviceInstance.name);
    }

    const update = async (data) => {
        await serviceInstance.store(data);
        queryClient.invalidateQueries(serviceInstance.name);
    }
    const destroy = async (id) => {
        await serviceInstance.destroy(id);
        queryClient.invalidateQueries(serviceInstance.name);
    }

    return {
        fetchAll,
        create,
        show,
        update,
        destroy,
        queryKey: serviceInstance.name
    }
}

export default useReactQuery;