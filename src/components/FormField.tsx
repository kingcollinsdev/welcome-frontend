type FormFieldProps = {
  label: string;
  children: React.ReactNode;
};

export default function FormField({
  label,
  children,
}: FormFieldProps) {
  return (
    <label className="flex flex-col gap-3">
      <span className="text-sm font-black uppercase tracking-wide text-black/55">
        {label}
      </span>

      {children}
    </label>
  );
}