export default function NewsletterForm() {
    return (
      <div className="mt-6 flex items-center justify-center space-x-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-64 p-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button className="bg-white text-black font-semibold px-5 py-3 rounded-lg hover:bg-gray-200 transition">
          Dołącz do nas!
        </button>
      </div>
    );
  }
  