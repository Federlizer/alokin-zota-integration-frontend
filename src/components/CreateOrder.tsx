import { useState } from "react";

import Button from "./Button";

export default function CreateOrder() {
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const handleFormSubmit = (e) => {
        // Submitting form - disable button and let the form do it's thing
        setButtonDisabled(true);
    }

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-center text-xl underline mb-6">Make an order</h1>
            <form
                onSubmit={handleFormSubmit}
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

                <Button
                    type="submit"
                    disableWithSpinner={buttonDisabled}
                >
                    Submit
                </Button>
            </form>
        </div>
    )
}
