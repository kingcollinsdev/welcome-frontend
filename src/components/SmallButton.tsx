type SmallButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export default function SmallButton({ children, onClick }: SmallButtonProps) {
  return (
    <button
      onClick={onClick}
      className="rounded-xl border border-[#eadfce] bg-white px-3 py-2 text-xs hover:bg-[#fbf8f2]"
    >
      {children}
    </button>
  );
}