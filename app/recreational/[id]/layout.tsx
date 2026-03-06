import { BOAT_MODELS } from '@/lib/data';

// Esto le dice a Vercel qué páginas existen antes de que alguien entre
export async function generateStaticParams() {
  return BOAT_MODELS.recreational.models.map((m) => ({ id: m.id }));
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}