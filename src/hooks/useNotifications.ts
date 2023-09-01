import { useQuery } from "@tanstack/react-query";
import { getNotificationsService } from "@/services/getNotifications";

export const useNotifications = () => {
    return useQuery({
        queryKey: ["notifications"],
        queryFn: getNotificationsService,
    });
};
