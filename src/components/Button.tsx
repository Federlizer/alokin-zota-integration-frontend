import Spinner from "./Spinner";

interface ButtonProps {
    children: any;
    type?: string;

    disableWithSpinner?: bool;
}

export default function Button(props: ButtonProps) {
    const {
        children,
        type,

        disableWithSpinner,
    } = props;

    // Figure out classes
    let classNames = "border rounded p-2 min-h-[3rem]";
    if (disableWithSpinner) {
        classNames += " bg-gray-400";
    } else {
        classNames += " bg-green-400";
    }

    // Figure out children/slot
    const slot = disableWithSpinner ? <Spinner /> : children;

    // Render
    return (
        <button
            className={classNames}
            type={type}
            disabled={disableWithSpinner}
        >
            { slot }
        </button>
    )

}
