import type { Order } from "@/types/Order";

import OrderComponent from "@/components/Order";

interface OrderListProps {
    orders: Order[];
}

export default function OrderList(props: OrderListProps) {
    const { orders } = props;

    return (
        <div className="flex flex-col gap-y-4 px-4">
            <h2 className="text-center mb-2 text-xl underline">Orders</h2>
            {orders.map((o) => {
                return (
                    <OrderComponent
                        key={o.id}
                        order={o}
                    />
                )
            })}
        </div>
    );
}
