import moment from "moment";

export const checkTime = () => {
    const time = parseInt(moment().format("HH"));
    if (time >= 5 && time < 12) {
        return "Morning";
    } else if (time >= 12 && time < 18) {
        return "Afternoon";
    } else if (time >= 18 && time < 22) {
        return "Evening";
    } else {
        return "Night";
    }
};