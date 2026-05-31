type StatCardProps = {
  title: string;
  value: number | string;
  description: string;
  color: string;
  icon: string;
};

export default function StatCard({
  title,
  value,
  description,
  color,
  icon,
}: StatCardProps) {
  return (
    <div className={`min-h-45 rounded-[28px] p-6 ${color}`}>
      <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-white/85 text-2xl text-black">
        {icon}
      </div>

      <p className="text-5xl font-black leading-none">{value}</p>

      <h3 className="mt-3 text-sm font-black uppercase tracking-tight">
        {title}
      </h3>

      <p className="mt-1 text-sm opacity-90">{description}</p>
    </div>
  );
}