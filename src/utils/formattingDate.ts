import moment from "moment"

const formattingDate = (date: string): string => {
    const startDate = moment(date);
    const currentDate = moment();
    const diff = moment.duration(currentDate.diff(startDate));

    if (diff.asHours() < 1) {
        return `${diff.minutes()} минут назад`;
    } else if (diff.asHours() < 24) {
        return `${Math.floor(diff.asHours())} часов назад`;
    } else {
        return `${Math.floor(diff.asDays())} дней назад`;
    }
}

export default formattingDate