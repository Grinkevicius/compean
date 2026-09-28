type SectionEyebrowProps = {
  children: React.ReactNode;
};

export function SectionEyebrow({ children }: SectionEyebrowProps) {
  return <p className="eyebrow">{children}</p>;
}
