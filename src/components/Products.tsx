import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";

export default function Products() {
  return (
    <section id="products" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-semibold text-green-700 mb-3">Products</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
            Automation made practical.
          </h2>
          <p className="text-slate-500 mt-3">
            Choose a product to ask about price, availability, and installation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-9">
          {products.map((product) => (
            <article key={product.title} className="group flex flex-col rounded-lg border border-slate-200 bg-white overflow-hidden transition-shadow hover:shadow-lg">
              <div className="relative w-full h-52 overflow-hidden bg-slate-100">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4 flex flex-1 flex-col">
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900">{product.title}</h3>
                  <p className="text-sm text-slate-500 mt-1 leading-relaxed">{product.description}</p>
                </div>
                <Link
                  href={`/products/${product.slug}`}
                  className="mt-4 inline-flex w-fit items-center justify-center rounded-md bg-green-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-800"
                >
                  Know more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
