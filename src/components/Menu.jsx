import MenuItem from "./MenuItem";

function Menu() {
  const menus = [
    { title: "Espresso", description: "Rich and bold shot of coffee.", price: "Rp 25.000" },
    { title: "Cappuccino", description: "Perfect balance of coffee and milk foam.", price: "Rp 30.000" },
    { title: "Caramel Latte", description: "Smooth latte with caramel sweetness.", price: "Rp 35.000" },
  ];

  return (
    <section id="menu" className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12 text-amber-800 animate-fadeIn">
          Our Menu
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {menus.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Menu;
