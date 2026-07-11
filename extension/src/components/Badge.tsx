interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <span
      className="
        rounded-full
        bg-green-100
        px-2
        py-1
        text-xs
        font-medium
        text-green-700
      "
    >
      {children}
    </span>
  );
}