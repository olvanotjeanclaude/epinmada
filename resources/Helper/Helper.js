export const arrayRange = (start, stop, step = 1) =>
    Array.from(
        { length: (stop - start) / step + 1 },
        (value, index) => start + index * step
    );

export const mapFormErrors = (errors) => {
    if (Object.keys(errors).length) {
        return Object.entries(errors ?? {})
            .map(([inputName, error]) => (
                {
                    type: "manual",
                    name: inputName,
                    message: Array.isArray(error) ? error.join(".") : error ?? "",
                }
            ));
    }
}