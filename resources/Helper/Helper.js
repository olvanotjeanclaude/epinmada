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

export const capitalizeLetter = (letter) => {
    const splited = letter?.toLowerCase()
        .split(" ")
        .map(letter => letter.charAt(0)
            .toUpperCase() + letter.slice(1)
        ).join(" ");

    return splited;
}


export const blobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
            const base64String = reader.result.split(',')[1];
            resolve(base64String);
        };

        reader.onerror = () => {
            reject(new Error('Error reading the Blob as Base64'));
        };

        reader.readAsDataURL(blob);
    });
}
