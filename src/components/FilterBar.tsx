export default function FilterBar() {
    return (
        <div className="flex justify-between text-sm">
            <button className="text-blue-500">All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    );
}