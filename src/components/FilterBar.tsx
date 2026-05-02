type Props = {
    filter: string;
    setFilter: (value: "all" | "active" | "completed") => void;
    totalCount: number;
    activeCount: number;
    completedCount: number;
    onClearCompleted: () => void;
};

export default function FilterBar({
    filter,
    setFilter,
    totalCount,
    activeCount,
    completedCount,
    onClearCompleted
}: Props) {
    return (
        <div className="flex  items-center justify-between mt-2">
            <div className="flex justify-center gap-4 text-sm mt-2">
                <button
                    onClick={() => setFilter("all")}
                    className={
                        `cursor-pointer border rounded-md px-2 py-1 ${filter === "all"
                            ? "text-gray-700 font-semibold active:scale-95 transition"
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
                        `cursor-pointer border rounded-md px-2 py-1 text-gray-500${filter === "active"
                            ? "text-gray-700 font-semibold active:scale-95 transition"
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
                        ` cursor-pointer border rounded-md px-2 py-1 text-gray-400 ${filter === "completed"
                            ? "text-gray-700 font-semibold active:scale-95 transition"
                            : ""
                        }`
                    }
                >
                    Completed <span className="ml-1 text-xs text-gray-400">
                        {completedCount}
                    </span>
                </button>
            </div>

            {/* Clear button */}
            {completedCount > 0 && (
                <button
                    onClick={onClearCompleted}
                    className="text-xs text-gray-400 hover:text-red-500 transition cursor-pointer"
                >
                    Clear completed
                </button>
            )}
        </div>
    );
}