import { useQuery } from "@tanstack/react-query";
import { getProductsService } from "@/services";
import { useAuth } from "@/store";

export const useProducts = () => {
    const { user } = useAuth();
    const vendorId = user?.id;
    return useQuery({
        queryKey: ["products", vendorId],
        queryFn: () => getProductsService({ vendorId }),
    })
}