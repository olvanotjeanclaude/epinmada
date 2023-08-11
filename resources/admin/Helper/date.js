export const today = () => {
    const currentDate = new Date();

    const formattedDate = new Intl.DateTimeFormat('tr-TR').format(currentDate);

    return formattedDate;
}