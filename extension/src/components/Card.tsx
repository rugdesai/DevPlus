interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div
      className="rounded-xl border p-4 shadow-sm"
      style={{
        background: "var(--bgColor-default)",
        borderColor: "var(--borderColor-default)",
      }}
    >
      {children}
    </div>
  );
}