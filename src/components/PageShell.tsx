import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="public-page-shell">
      <Header />
      <main className="public-page-content">{children}</main>
      <Footer />
    </div>
  );
}
