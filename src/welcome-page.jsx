import "./output.css";
export default function Welcome() {
  function handleClick() {
    window.location.href = "./signin";
  }
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center static">
            <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-gray-900">MY KANBAN</h1>
            <p className="mt-4 text-gray-600 text-xl">Web Homework Project</p>
            <button className="mt-6 bg-blue-500 text-white py-2 px-14 rounded-full hover:bg-blue-700 static left-2" onSubmit={e => {
                e.preventDefault();}} onClick={handleClick}>
              ENTER
        </button>
      </div>
    </div>
    </>
  );
}