function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center p-4">
      <div className="flex justify-center items-center">
        <img className="h-128 w-128" src="/img/error/404.png" alt="404 Picture" />
      </div>
      <h3 className="font-bold text-3xl text-center text-gray-600 mb-6">
        Oops! The page you're looking for doesn't exist or has been moved.
      </h3>
      <a href="/" className="bg-blue-500 text-white font-medium px-3 py-2 rounded hover:shadow">Go to Home Page</a>
    </div>
  )
}
export default NotFound
