// TypeScript never Type

function crash(): never {
    throw new Error("Something went wrong!");
}

crash();

// TypeScript never With Unreachable Code

type Status = "success" | "error";

function handleStatus(status: Status) {
    switch (status) {
        case "success":
            console.log("Success");
            break;
        case "error":
            console.log("Error");
            break;
        default:
            // This is unreachable — all cases are handled above
            const unreachable: never = status;
    }
}

handleStatus("success");