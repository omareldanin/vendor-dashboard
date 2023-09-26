import { useQuery } from "@tanstack/react-query";
import { getOrderDetailsService } from "@/services";
import { useAuth } from "@/store";

export const useOrderDetails = ({
    orderId,
}: {
    orderId: number;
}) => {
    const { user } = useAuth();
    const vendorId = user?.id;
    return useQuery({
        queryKey: ["orders", orderId],
        queryFn: () => getOrderDetailsService(orderId,vendorId),
    });
};
