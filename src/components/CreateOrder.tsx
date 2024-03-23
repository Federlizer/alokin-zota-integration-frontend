
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
                    required
                />

                <input
                    className="border rounded p-2"
                    placeholder="Amount"
                    name="amount"
                    type="number"
                    step="0.01"
                    min="0.01"
                    required
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
