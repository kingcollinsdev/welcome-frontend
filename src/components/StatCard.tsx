type StatCardProps = {
    title: string;
    value: number;
    description: string;
};

export default function StatCard({
    title,
    value,
    description,
}: StatCardProps) {
    return (
        <div className="rounded-3xl border border-[#d9cfbf] bg-[#fffaf2] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-white/60 ">
            <p className="text-sm text-[#7c7164]">{title}</p>

            <h3 className="mt-2 font-serif text-4xl text-[#1f1b16]">{value}</h3>

            <p className="mt-1 text-xs text-[#8a8175]">{description}</p>
        </div>
    )
}