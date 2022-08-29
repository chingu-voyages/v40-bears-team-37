export const monthMap = Object.create(null, {
    "01": { value: "January" },
    "02": { value: "Feburary" },
    "03": { value: "March" },
    "04": { value: "April" },
    "05": { value: "May" },
    "06": { value: "June" },
    "07": { value: "July" },
    "08": { value: "August" },
    "09": { value: "September" },
    "10": { value: "October" },
    "11": { value: "November" },
    "12": { value: "December" },
});

export const dayMap = Object.create(null, {
    "monday": { value: "Mon" },
    "tuesday": { value: "Tue" },
    "wednesday": { value: "Wed" },
    "thursday": { value: "Thu" },
    "friday": { value: "Fri" },
    "saturday": { value: "Sat" },
    "sunday": { value: "Sun" },
});

const extractDate = (date: number) => {
    const sliceDate = date.toString().slice(-2);
    switch(sliceDate) {
        case "01":
            return `${sliceDate}st`;
        case "02":
            return `${sliceDate}nd`;
        case "03":
            return `${sliceDate}rd`;
        default: 
            return `${sliceDate}th`;
    }
}

export const extractMonth = (date: number) => {
    return monthMap[date.toString().slice(4, 6)];
}

export const concatDateRange = (startDateNum: number, endDateNum: number) => {
    const startDate = extractDate(startDateNum);
    const endDate = extractDate(endDateNum);

    return `${startDate} - ${endDate}`;
}

export const concatMonthAndDate = (dateNum: number) => {
    const month = extractMonth(dateNum);
    const date = extractDate(dateNum);

    return `${month} ${date}`
}

export const formatTime = (timeString: string) => {
    const hour = timeString.slice(0, 2);
    const minute = timeString.slice(2);
    const hourPlusMinute = minute === "00" ? `${hour}` : `${hour}:${minute}`
    const meridiemUnit = parseInt(hour) >= 12 ? "PM" : "AM";

    return `${hourPlusMinute} ${meridiemUnit}`
}