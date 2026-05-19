type FormFieldProps = {
  label: string;
  children: React.ReactNode;
};

export default function FormField({ label, children }: FormFieldProps) {
  return (
    <label className="space-y-2">
      <span className="text-sm text-[#6f6559]">{label}</span>
      {children}
    </label>
  );
}