import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

import type { Order } from "@/types/Order";

import OrderList from "@/components/OrderList";
import CreateOrder from "@/components/CreateOrder";
 
export const getServerSideProps = (async () => {
    // Fetch data from external API
    const res = await fetch("http://localhost:8080/order")
    if (!res.ok) {
        throw new Error("Failed to fetch orders from server")
    }

    const { orders } = await res.json()
    // Pass data to the page via props
    return { props: { orders } }
}) satisfies GetServerSideProps<{ orders: Order[] }>


export default function Home({
    orders,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <div className="flex flex-row h-screen">
            <div className="w-1/3 border-r"><OrderList orders={orders} /></div>
            <div className="w-2/3"><CreateOrder /></div>
        </div>
    );
}
