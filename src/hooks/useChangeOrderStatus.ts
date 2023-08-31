import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { changeOrderStatusService } from "@/services";

export const useChangeOrderStatus = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ orderId }: {
            orderId: number
        }) => changeOrderStatusService(orderId),
        onSuccess: () => {
            queryClient.invalidateQueries(["orders"]);
            toast.success("المنتج الان قيد التحضير");
        },
        onError: (error: { message?: string }) => {
            toast.error(error.message || "حدث خطأ أثناء تسجيل الدخول");
        },
    });
};
