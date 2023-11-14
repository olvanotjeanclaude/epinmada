import dateFormat from "dateformat";
export const formatDateTime = (utcDateString) => {
    try {
        return dateFormat(utcDateString,"d/mm/yyyy");
    } catch (error) {
        return utcDateString;
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

export const camelToCapitalized = input => {
    return input
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

export const fullName = (person) => capitalizeLetter(`${person?.name} ${person?.surname}`);

export const computeAmount = (data, format = true) => {
    const amount = data.reduce((prev, current) => {
        return (current.price * current.quantity) + prev;
    }, 0);

    return format ? formatAmount(amount) : amount;
}

export const formatAmount = (amount, currency = "Ariary") => {
    return parseFloat(amount).toLocaleString("fr-FR") + " " + currency;
}
