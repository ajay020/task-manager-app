import { Calendar, X, PlusIcon } from "lucide-react";
import { useState, useRef } from "react";

type Props = {
    onAdd: (title: string, date?: string) => void;
};

export default function TaskInput({ onAdd }: Props) {
    const [value, setValue] = useState("");
    const [date, setDate] = useState("");
    const dateRef = useRef<HTMLInputElement>(null);

    const handleAdd = () => {
        if (!value.trim()) return;

        onAdd(value, date);
        setValue("");
        setDate("");
    };

    return (
        <div className="space-y-2">

            <div className="flex items-center gap-2">

                {/* TEXT INPUT */}
                <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleAdd()}
                    placeholder="Add a task..."
                    className="flex-1 border border-gray-300 focus:border-blue-400
                     focus:ring-2 focus:ring-blue-300 rounded-lg px-3 py-2 outline-none"
                />

                {/* CALENDAR BUTTON */}
                <button
                    type="button"
                    onClick={() => dateRef.current?.showPicker?.() || dateRef.current?.click()}
                    className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
                >
                    <Calendar size={18} color="gray" />
                </button>

                {/* ADD BUTTON */}
                <button
                    disabled={!value.trim()}
                    onClick={handleAdd}
                    className={`px-4 py-2 rounded-lg text-white transition active:scale-95 ${value.trim()
                        ? "bg-blue-500 hover:bg-blue-600"
                        : "bg-gray-300 cursor-not-allowed"
                        }`}
                >
                    <PlusIcon size={18} />
                </button>

                {/* HIDDEN DATE INPUT */}
                <input
                    ref={dateRef}
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className=" absolute opacity-0 pointer-events-none"
                />
            </div>

            {/* SELECTED DATE DISPLAY */}
            {date && (
                <div className="text-xs text-gray-500 flex items-center gap-2">
                    <span>
                        {new Date(date).toLocaleDateString()}
                    </span>
                    <button
                        onClick={() => setDate("")}
                        className="text-gray-400 hover:text-red-500 text-xs"
                    >
                        <X size={18} />
                    </button>
                </div>
            )}
        </div>
    );
}