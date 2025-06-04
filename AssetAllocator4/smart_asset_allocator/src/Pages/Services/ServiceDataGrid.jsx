export default function ServiceDataGrid({ data }) {
  return (
    <div className="grid md:grid-cols-3 gap-4 my-4">
      {data.map((item) => (
        <div key={item.id} className="bg-white shadow-md rounded-xl p-4">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="rounded-xl h-40 w-full object-cover mb-2"
          />
          <h3 className="font-semibold text-lg">{item.title}</h3>
          <p className="text-gray-600 text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
