type Props = {
    filter: string;
    setFilter: (value: "all" | "active" | "completed") => void;
    totalCount: number;
    activeCount: number;
    completedCount: number;
};

export default function FilterBar({
    filter,
    setFilter,
    totalCount,
    activeCount,
    completedCount,
}: Props) {
    return (
        <div className="flex justify-center gap-4 text-sm mt-2">
            <button
                onClick={() => setFilter("all")}
                className={
                    `cursor-pointer ${filter === "all"
                        ? "text-blue-500 font-semibold active:scale-95 border-b-2 hover:text-blue-400 transition"
                        : ""}`
                }
            >
                All <span className="ml-1 text-xs text-gray-400">
                    {totalCount}
                </span>
            </button>

            <button
                onClick={() => setFilter("active")}
                className={
                    `cursor-pointer${filter === "active"
                        ? "text-blue-500 font-semibold active:scale-95 border-b-2 border-blue-500 hover:text-blue-400 transition"
                        : ""}`
                }
            >
                Active <span className="ml-1 text-xs text-gray-400">
                    {activeCount}
                </span>
            </button>

            <button
                onClick={() => setFilter("completed")}
                className={
                    ` cursor-pointer ${filter === "completed"
                        ? "text-blue-500 font-semibold active:scale-95 border-b-2 border-blue-500 hover:text-blue-400 transition"
                        : ""}`
                }
            >
                Completed <span className="ml-1 text-xs text-gray-400">
                    {completedCount}
                </span>
            </button>
        </div>
    );
}