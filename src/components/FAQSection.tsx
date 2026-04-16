export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  intro?: string;
  items: FAQItem[];
}

export default function FAQSection({ title, intro, items }: FAQSectionProps) {
  return (
    <section className="py-16 sm:py-24 bg-surface">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl font-bold text-primary-dark mb-4">{title}</h2>
          {intro && (
            <p className="text-foreground/70 leading-relaxed">{intro}</p>
          )}
        </div>
        <div className="grid gap-4">
          {items.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-surface-dark bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold text-primary-dark mb-2">
                {item.question}
              </h3>
              <p className="text-foreground/70 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
