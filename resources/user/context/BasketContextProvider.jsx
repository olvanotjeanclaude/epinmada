import { HandleError } from "@/common/HandleError";
import http from "@/common/http";
import { createContext, useContext } from "react";
import { useQuery } from "react-query";

const BasketContext = createContext();

const BasketContextProvider = ({ children }) => {
    const query = useQuery({
        queryKey: "front.baskets",
        queryFn: async () => await http.get("/baskets")
            .then(res => res.data)
            .catch(HandleError.catch)
    });

    return <BasketContext.Provider value={query}>
        {children}
    </BasketContext.Provider>
}

export default BasketContextProvider;

export const useBasket = () => {
    const app = useContext(BasketContext);

    return {
        data: app.data,
        isLoading: app.isLoading,
        isError: app.isError,
        error: app.error
    }
}