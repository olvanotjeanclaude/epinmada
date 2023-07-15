export const arrayRange = (start, stop, step = 1) =>
    Array.from(
        { length: (stop - start) / step + 1 },
        (value, index) => start + index * step
    );
export const mapErrors = (errors, setError) => {

    if (Object.keys(errors).length) {
       const inputs= Object.entries(errors ?? {})
            .map(([inputName, error]) => (
                {
                    type: "manual",
                    name: inputName,
                    message: error[0] ?? "",
                }
            ))

        console.log(inputs);

        // inputs.forEach(({ name, type, message }) => {
        //     setError(name, { type, message })
        // })
    }
}