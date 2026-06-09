interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: FaqItem[];
}

export default function FaqSection({ faqs }: FaqSectionProps) {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="section-label mb-3 mx-auto w-fit">FAQ</div>
          <h2 className="text-3xl font-bold text-slate-900">Common Questions About Automation in Nepal</h2>
          <p className="text-slate-500 mt-3 text-sm leading-relaxed">
            Answers for buyers looking for gate automation, boom barriers, sliding gate motors, and home automation in Nepal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900 text-base mb-3">{faq.question}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
