'use client';

import Image from 'next/image';

const pins = [
  { top: '40%', left: '55%', img: '/images/boats/boat1.jpg', city: 'Santa Marta' },
  { top: '50%', left: '52%', img: '/images/boats/boat2.jpg', city: 'Cartagena' },
];

export default function MapsSection() {
  return (
    <section className="bg-white py-24">

      <div className="max-w-6xl mx-auto px-4 space-y-20">

        {/* MAPA GOOGLE */}
        <a
          href="https://www.google.com/maps?q=Santa+Marta"
          target="_blank"
          className="block h-[400px] relative rounded-2xl overflow-hidden"
        >
          <Image
            src="/images/maps/santa-marta-map.jpg"
            alt="map"
            fill
            className="object-cover"
          />
        </a>

        {/* MAPA COLOMBIA */}
        <div className="relative h-[500px] bg-[#EAF6F7] rounded-2xl overflow-hidden">

          <Image
            src="/images/maps/colombia-map.png"
            alt="colombia"
            fill
            className="object-contain"
          />

          {pins.map((p, i) => (
            <div
              key={i}
              className="absolute group"
              style={{ top: p.top, left: p.left }}
            >
              <div className="w-4 h-4 bg-[#00CED1] rounded-full" />

              <div className="hidden group-hover:block absolute bottom-6 left-1/2 -translate-x-1/2 bg-white p-2 rounded shadow">
                <Image src={p.img} alt="" width={120} height={80} />
                <p className="text-xs text-center">{p.city}</p>
              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}