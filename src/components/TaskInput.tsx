import { useState } from "react";

type Props = {
    onAdd: (title: string, date?: string) => void;
};

export default function TaskInput({ onAdd }: Props) {
    const [value, setValue] = useState("");
    const [date, setDate] = useState("");

    const handleAdd = () => {
        onAdd(value, date);
        setValue("");
        setDate("")
    };

    return (
        <div className="flex gap-2 mb-4">
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none rounded-lg px-2"
            />
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAdd()}
                placeholder="Add a task..."
                className="flex-1 border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-lg px-3 py-2 outline-none"
            />
            <button
                disabled={!value.trim()}
                onClick={handleAdd}
                className={`px-4 rounded-lg text-white transition ${value.trim()
                        ? "bg-blue-500 hover:bg-blue-600"
                        : "bg-gray-300 cursor-not-allowed"
                    }`}
            >
                Add
            </button>
        </div>
    );
}