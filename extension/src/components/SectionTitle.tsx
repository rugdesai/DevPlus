interface SectionTitleProps {
  children: React.ReactNode;
}

export default function SectionTitle({
  children,
}: SectionTitleProps) {
  return (
    <h2 className="mb-3 text-lg font-semibold">
      {children}
    </h2>
  );
}