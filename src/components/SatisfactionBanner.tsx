export default function SatisfactionBanner() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-3 divide-x divide-slate-200 text-center">
          <div>
            <strong className="block text-sm sm:text-base text-slate-900">Butwal</strong>
            <span className="text-xs text-slate-500">Local support</span>
          </div>
          <div>
            <strong className="block text-sm sm:text-base text-slate-900">Nepal-wide</strong>
            <span className="text-xs text-slate-500">Delivery</span>
          </div>
          <div>
            <strong className="block text-sm sm:text-base text-slate-900">Direct</strong>
            <span className="text-xs text-slate-500">Phone &amp; WhatsApp</span>
          </div>
        </div>
      </div>
    </section>
  );
}
