export function getTaskStatus(dueDate?: number) {
    if (!dueDate) return "none";

    const today = new Date();
    const taskDate = new Date(dueDate);

    const isSameDay =
        today.toDateString() === taskDate.toDateString();

    if (taskDate < today && !isSameDay) return "overdue";
    if (isSameDay) return "today";

    return "upcoming";
}

export function formatDueDate(dueDate?: number) {
    if (!dueDate) return "";

    const status = getTaskStatus(dueDate);
    const date = new Date(dueDate);

    if (status === "overdue") return "Overdue";
    if (status === "today") return "Today";

    return date.toLocaleDateString(undefined, {
        day: "numeric",
        month: "long",
    });
}