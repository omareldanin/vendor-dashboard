import { useQuery } from "@tanstack/react-query";
import { getNotificationsService } from "@/services/getNotifications";
import { useAuth } from "@/store";
import { Howl } from 'howler';
import { NotificationSound } from '@/assets'
import { useLocation } from "react-router-dom";

export const useNotifications = () => {
    const { user } = useAuth();
    const url = useLocation();
    const isNavigation = url.pathname.startsWith("/notifications");
    return useQuery({
        queryKey: ["notifications"],
        queryFn: getNotificationsService,
        enabled: !!user.token,
        refetchInterval: (data) => {
            if (data?.results.some((notification) => !notification.seen)) {
                return Infinity
            }
            return 10000
        },
        refetchOnWindowFocus: (query) => {
            if (query.state?.data?.results.some((notification) => !notification.seen)) {
                return false
            }
            return true
        },
        onSuccess: (data) => {
            const unseenNotifications = data.results.filter(
                (notification) => !notification.seen
            );
            if (unseenNotifications.length > 0) {
                playNotificationSound();
            }
        },
        refetchOnMount: isNavigation ? true : false,
    });
};

const playNotificationSound = () => {
    const sound = new Howl({
        src: [NotificationSound], // Replace with your sound file path
    });
    sound.play();
};