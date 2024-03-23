interface OrderProps {
    order: Order;
}

export default function Order(props: OrderProps) {
    const { order } = props;

    return (
        <div className="flex flex-col border rounded p-4">
            <div>
                { order.description }
            </div>

            <div className="flex flex-row justify-between">
                <div>{ order.amount }</div>
                <div>{ order.paymentStatus }</div>
            </div>
        </div>
    )
}
