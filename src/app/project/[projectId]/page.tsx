export default function Page() {
  return (
    <main className="flex flex-col bg-white w-screen h-screen text-black">
      <nav aria-label="Navigation Bar" className="bg-gray-500 w-full h-12" />

      <div className="flex w-full flex-grow">
        <div
          aria-label="Secondary Side Bar"
          className="bg-gray-500 w-20 h-full"
        />
        <div className="flex flex-col w-full">
          <div aria-label="Top Bar" className="bg-gray-400 w-full h-14" />
          <div className="flex flex-grow">
            <div
              aria-label="Primary Side Bar"
              className="bg-gray-300 w-64 h-full"
            />
            <div
              aria-label="Work Area"
              className="bg-gray-100 flex-grow h-full"
            ></div>
          </div>
        </div>
      </div>
    </main>
  );
}
