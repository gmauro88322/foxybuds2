export default function ProductCard({ p }: { p: any }){
  return (
    <a href="#" className="card block">
      <div className="relative aspect-square bg-neutral-800">
        {p.tag && (
          <span className="absolute left-2 top-2 z-10 rounded-full bg-emerald-600/90 px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase">{p.tag}</span>
        )}
        <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h4 className="line-clamp-2 text-sm font-semibold">{p.title}</h4>
          <div className="text-right text-base font-bold shrink-0">{p.price}</div>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-xs text-white/60">★★★★☆ 4.8</div>
          <span className="button">Add</span>
        </div>
      </div>
    </a>
  );
}
