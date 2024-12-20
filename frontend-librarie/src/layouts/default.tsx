import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <span className="flex items-center gap-1 text-current">
          <span className="text-default-600">Crée par</span>
          <p className="text-secondary">Aurélie Moustardier</p>
          <p className="text-default-600"> avec NextUI</p>
        </span>
      </footer>
    </div>
  );
}
