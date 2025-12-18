import { HERO_DATA } from "@/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-accents-2 py-8 bg-background">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-accents-5 text-sm">
          © {currentYear} {HERO_DATA.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
