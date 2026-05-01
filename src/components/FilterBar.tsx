type Props = {
    filter: string;
    setFilter: (value: "all" | "active" | "completed") => void;
};

export default function FilterBar({ filter, setFilter }: Props) {
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
                All
            </button>

            <button
                onClick={() => setFilter("active")}
                className={
                    `cursor-pointer${filter === "active"
                        ? "text-blue-500 font-semibold active:scale-95 border-b-2 border-blue-500 hover:text-blue-400 transition"
                        : ""}`
                }
            >
                Active
            </button>

            <button
                onClick={() => setFilter("completed")}
                className={
                    ` cursor-pointer ${filter === "completed"
                        ? "text-blue-500 font-semibold active:scale-95 border-b-2 border-blue-500 hover:text-blue-400 transition"
                        : ""}`
                }
            >
                Completed
            </button>
        </div>
    );
}