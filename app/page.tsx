import products from "../data/products.json";
import ProductCard from "../components/ProductCard";

export default function Home(){
  return (
    <div className="min-h-screen">
      <div className="w-full bg-green-700 text-center text-xs md:text-sm font-semibold py-2">
        Foxy Buds — Free delivery over $75
      </div>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🦊</span>
              <span className="text-xl font-black tracking-tight">Foxy Buds</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#" className="hover:underline">New Arrivals</a>
              <a href="#" className="hover:underline">Best Sellers</a>
              <a href="#" className="hover:underline">Flower</a>
              <a href="#" className="hover:underline">Edibles</a>
              <a href="#" className="hover:underline">Pre-Rolls</a>
              <a href="#" className="hover:underline">Vapes</a>
              <a href="#" className="hover:underline">Concentrates</a>
              <a href="#reviews" className="hover:underline">Reviews</a>
              <a href="#wholesale" className="hover:underline">Wholesale</a>
              <a href="#lab" className="hover:underline">Lab Results</a>
            </nav>
            <button className="button">Cart (0)</button>
          </div>
        </div>
      </header>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { t: "BOGO 4g Flower", s: "Buy One Get One", c: "Shop 4g" },
          { t: "Tasty Highs", s: "B2G2 Gummies", c: "Shop Edibles" },
          { t: "Choice Candies", s: "Exclusive Batch", c: "Get Exotic" },
        ].map((x, i) => (
          <div key={i} className="relative overflow-hidden rounded-3xl card shadow-lg">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621581982331-6a443deb89c6?q=80&w=1600&auto=format&fit=crop')] opacity-30" />
            <div className="relative p-6 md:p-8 lg:p-10">
              <p className="text-xs uppercase tracking-widest text-white/80">{x.s}</p>
              <h3 className="mt-1 text-2xl md:text-3xl font-extrabold leading-tight">{x.t}</h3>
              <span className="button mt-4">{x.c}</span>
            </div>
          </div>
        ))}
      </section>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6 grid grid-cols-1 md:grid-cols-12 gap-6">
        <aside className="md:col-span-3 lg:col-span-2 space-y-3 md:sticky md:top-24 self-start">
          <div className="card p-4">
            <div className="text-sm font-semibold mb-2">Shop by Category</div>
            <ul className="space-y-1 text-sm">
              {[
                ["Flower", 128],
                ["Edibles", 64],
                ["Pre-Rolls", 42],
                ["Vapes", 56],
                ["Concentrates", 21],
              ].map(([n, c]) => (
                <li key={String(n)} className="flex items-center justify-between">
                  <a href="#" className="hover:underline">{n as string}</a>
                  <span className="text-white/50">{c as number}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-4">
            <div className="text-sm font-semibold mb-2">Quick Links</div>
            <ul className="space-y-1 text-sm">
              <li><a href="#lab" className="hover:underline">Lab Results</a></li>
              <li><a href="#wholesale" className="hover:underline">Wholesale</a></li>
              <li><a href="#reviews" className="hover:underline">Customer Reviews</a></li>
            </ul>
          </div>
        </aside>
        <section className="md:col-span-9 lg:col-span-10">
          <div className="card p-3 flex flex-wrap items-center gap-3">
            <div className="text-sm">Filters</div>
            <div className="ml-auto flex items-center gap-2 text-sm">
              <button className="button">Sort: Popular</button>
              <button className="button">Price</button>
              <button className="button">Strain</button>
              <button className="button">Brand</button>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((p:any) => (<(ProductCard as any) key={p.id} p={p} />))}
          </div>
          <div className="mt-6 flex items-center justify-center gap-2">
            {[1,2,3,4].map((n) => (
              <button key={n} className={`h-9 w-9 rounded-xl border border-white/10 ${n===1? 'bg-white/10':''}`}>{n}</button>
            ))}
          </div>
        </section>
      </main>
      <section id="lab" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
        <div className="card p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-extrabold">Lab Results</h3>
            <p className="text-white/80 mt-1">COAs for every batch—potency, terpenes, and contaminant screens.</p>
          </div>
          <span className="button">View Certificates</span>
        </div>
      </section>
      <section id="wholesale" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
        <div className="card p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-extrabold">Wholesale Program</h3>
            <p className="text-white/80 mt-1">Apply for tiered pricing, net terms, and bulk inventory access.</p>
          </div>
          <span className="button">Apply Now</span>
        </div>
      </section>
      <section id="reviews" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex items-end justify-between">
          <h3 className="text-2xl md:text-3xl font-extrabold">Customer Reviews</h3>
          <a href="#" className="text-sm underline">Read all</a>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "Alex H.", text: "Fast shipping and the flower was 🔥. Will reorder." },
            { name: "Jess P.", text: "Gummies taste great and lab results are easy to find." },
            { name: "Marco R.", text: "Wholesale team was super responsive—smooth onboarding." },
          ].map((r, i) => (
            <div key={i} className="card p-5">
              <div className="text-base">“{r.text}”</div>
              <div className="mt-3 text-sm text-white/70">— {r.name}</div>
            </div>
          ))}
        </div>
      </section>
      <footer className="mt-16 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="text-lg font-black">Foxy Buds</div>
            <p className="text-white/80 mt-2">Legal THC delivered. Replace copy with compliance text.</p>
          </div>
          <div>
            <div className="font-semibold mb-2">Shop</div>
            <ul className="space-y-1 text-white/80">
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">Best Sellers</a></li>
              <li><a href="#">Flower</a></li>
              <li><a href="#">Edibles</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Resources</div>
            <ul className="space-y-1 text-white/80">
              <li><a href="#lab">Lab Results</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Order Tracking</a></li>
              <li><a href="#reviews">Customer Reviews</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Wholesale</div>
            <ul className="space-y-1 text-white/80">
              <li><a href="#wholesale">Apply</a></li>
              <li><a href="#">Program Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-white/60 pb-10">© {new Date().getFullYear()} Foxy Buds · foxybuds.com</div>
      </footer>
    </div>
  );
}
