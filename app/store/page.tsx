import Image from 'next/image';
import { STORE_PRODUCTS } from '@/lib/data';
import { ShoppingCart, Filter } from 'lucide-react';

export default function StorePage() {
  const categories = ['All', 'Apparel', 'Gear & Accessories', 'Electronics'];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-[#001F3F] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Official Store</h1>
          <p className="text-xl text-[#40E0D0]">
            Premium maritime apparel, equipment, and accessories
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className="px-4 py-2 rounded-md bg-white text-[#001F3F] font-semibold hover:bg-[#00CED1] hover:text-white transition-colors shadow-sm"
                >
                  {cat}
                </button>
              ))}
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow">
              <Filter className="h-5 w-5" />
              Filter
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {STORE_PRODUCTS?.map((product) => (
              <div
                key={product?.id ?? 0}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover-lift cursor-pointer"
              >
                <div className="relative aspect-square">
                  <Image
                    src={product?.image ?? ''}
                    alt={product?.name ?? ''}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{product?.category ?? ''}</p>
                  <h3 className="text-xl font-bold text-[#001F3F] mb-2">{product?.name ?? ''}</h3>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-bold text-[#00CED1]">${product?.price ?? 0}</span>
                    <button className="px-4 py-2 bg-[#00CED1] text-white rounded-md hover:bg-[#00A8AB] transition-colors flex items-center gap-2">
                      <ShoppingCart className="h-5 w-5" />
                      Add
                    </button>
                  </div>
                </div>
              </div>
            )) ?? null}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#001F3F] text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Free Shipping on Orders Over $200
          </h2>
          <p className="text-lg text-gray-300">
            All products ship worldwide with secure packaging and tracking
          </p>
        </div>
      </section>
    </div>
  );
}
