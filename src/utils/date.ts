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
