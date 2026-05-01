export default function TaskInput() {
    return (
        <div className="flex gap-2 mb-4 ">
            <input
                type="text"
                placeholder="Add a task..."
                className="flex-1 border rounded-lg px-3 py-2 outline-none"
            />
            <button className="bg-red-800 hover:bg-blue-700 transition
                cursor-pointer
            text-white px-4 rounded-lg">
                Add
            </button>
        </div>
    );
}