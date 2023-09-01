import { useQuery } from "@tanstack/react-query";
import { getNotificationsService } from "@/services/getNotifications";

export const useNotifications = () => {
    return useQuery({
        queryKey: ["notifications"],
        queryFn: getNotificationsService,
        refetchInterval: (data) => {
            if (data?.results.some((notification) => !notification.seen)) {
                return Infinity
            }
            return 30000
        },
        refetchOnWindowFocus: (query) => {
            if (query.state?.data?.results.some((notification) => !notification.seen)) {
                return false
            }
            return true
        },
    });
};
