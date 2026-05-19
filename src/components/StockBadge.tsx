type StockBadgeProps = {
    status: string;
};

export default function StockBadge({status}: StockBadgeProps) {
    const styles = 
    status === "Out of Stock"
    ? "bg-red-50 text-red-600"
    : status === "Low Stock"
    ? "bg-amber-50 text-amber-700"
    : "bg-green-50 text-green-700";

    return (
        <span className={`rounded-full px-3 py-1 text-xs font-medium ${styles}`}>{status}</span>
    )
}