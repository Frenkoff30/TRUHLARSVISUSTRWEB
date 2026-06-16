export default function Footer() {
  return (
    <footer className="bg-walnut text-cream/60 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <img
          src="/logotruhlarstvi.png"
          alt="Truhlářství Šustr"
          className="h-12 w-auto"
        />
        <p>Svobodné Hamry 38, 539 01 Hlinsko &middot; +420 607 721 016</p>
        <p>&copy; {new Date().getFullYear()} Truhlářství Šustr. Všechna práva vyhrazena.</p>
      </div>
    </footer>
  );
}
