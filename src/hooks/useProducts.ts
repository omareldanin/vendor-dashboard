import { useQuery } from "@tanstack/react-query";
import { getProductsService } from "@/services";

export const useProducts = () => {
    return useQuery({
        queryKey: ["products"],
        queryFn: getProductsService,
    })
}