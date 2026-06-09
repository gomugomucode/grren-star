export default function MapSection() {
  return (
    <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-white">
      <div className="bg-slate-950 px-5 py-3 text-sm font-semibold text-white">Find us on Google Maps</div>
      <div className="aspect-[16/9]">
        <iframe
          title="Greenstar Suppliers location in Butwal, Nepal"
          src="https://maps.google.com/maps?q=Butwal,Nepal&z=14&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full border-0"
        />
      </div>
    </div>
  );
}
