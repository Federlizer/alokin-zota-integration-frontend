
async function createOrder(description: string, amount: number) {
    console.log("Making new order");

    const res = await fetch("http://localhost:8080/order", {
        method: "POST",
    });

    console.log(res.status);
    console.log(res);
}

export default function CreateOrder() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-center text-xl underline mb-6">Make an order</h1>
            <form
                className="w-1/2 flex flex-col gap-y-4"
                action="http://localhost:8080/order/"
                method="POST"
            >
                <input
                    className="border rounded p-2"
                    placeholder="Description"
                    name="description"
                />
                <input
                    className="border rounded p-2"
                    placeholder="Amount"
                    name="amount"
                />

                <button
                    className="border rounded p-2 bg-green-400"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}
