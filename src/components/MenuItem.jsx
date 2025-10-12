function MenuItem({ title, description, price }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg hover:scale-105 transition animate-zoomIn">
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-amber-700 font-bold">{price}</p>
    </div>
  );
}
export default MenuItem;
