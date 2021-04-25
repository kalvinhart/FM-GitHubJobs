export const formatDate = (date) => {
    const now = new Date();
    const since = Date.parse(date);
    const ms = now - since;
    const s = ms / 1000
    const mins = s / 60;
    const hrs = mins / 60;
    const days = hrs / 24;

    if (hrs > 24) {
        return `${days.toFixed(0)} day${hrs < 48 ? "" : "s"} ago`;
    }
    if (days > 30) {
        return "30+ days ago";
    }
    return `${hrs.toFixed(0)}hrs ago`;
}

export const trimTitle = (title) => {
    if (title.length < 50) return title;

    let newTitle = title.split("");
    newTitle = newTitle.splice(0, 40);

    return `${newTitle.join("")}...`;
}

export const goToURL = (url) => {
    const newWindow = window.open(url, "_blank");
}