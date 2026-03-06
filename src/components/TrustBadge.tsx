interface TrustBadgeProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function TrustBadge({ icon, title, description }: TrustBadgeProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-primary-dark">{title}</h3>
        <p className="text-sm text-foreground/70">{description}</p>
      </div>
    </div>
  );
}
