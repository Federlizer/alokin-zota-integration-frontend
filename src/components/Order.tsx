interface OrderProps {
    order: Order;
}

export default function Order(props: OrderProps) {
    const { order } = props;
    console.log("Going to render: ", order)

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
