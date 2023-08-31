import {
    Button,
} from "@/components";
import { useChangeOrderStatus } from "@/hooks";
import { Order } from "@/services/getOrders";
import { BadgeCheck } from "lucide-react";

export const ChangeOrderStatus = ({
    order,
}: {
    order: Order;
}) => {
    const {
        mutate: cahngeStatus,
        isLoading,
    } = useChangeOrderStatus();

    const handleChangeStatus = () => {
        cahngeStatus({
            orderId: order.id,
        })
    }
    const isOrderPrepared = order.status === 'preparing'

    return (
        <>
            <Button
                variant={isOrderPrepared ? 'secondary' : 'default'}
                isLoading={isLoading}
                onClick={handleChangeStatus}
                disabled={isOrderPrepared}
            >
                <BadgeCheck className="h-4 w-4" />
            </Button>
        </>
    );
};
