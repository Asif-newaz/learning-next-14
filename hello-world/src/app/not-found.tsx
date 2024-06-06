export default function NotFound() {
  return (
    <div className="h-screen bg-black flex justify-center items-center">
      <div className="text-center text-white">
        <h1 className="text-3xl">Page not found</h1>
        <p>Could not find requested resource</p>
      </div>
    </div>
  );
}
