export default function Grid() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        <div className="bg-white p-4 rounded-lg shadow-md">Item 1</div>
        <div className="bg-white p-4 rounded-lg shadow-md">Item 2</div>
        <div className="bg-white p-4 rounded-lg shadow-md">Item 3</div>
      </div>
    );
  }
  