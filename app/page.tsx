export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-pink-300 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-purple-300 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-indigo-300 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="max-w-xl mx-auto text-center relative z-10">
        {/* Main Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-lg border border-gray-200/50">
          {/* Anime-style Icon */}
          <div className="mb-8">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-pink-200 to-purple-300 rounded-2xl flex items-center justify-center shadow-sm transform rotate-12">
              <svg 
                className="w-8 h-8 text-gray-700 transform -rotate-12" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" 
                />
              </svg>
            </div>
          </div>

          {/* Title with anime-style font weight */}
          <h1 className="text-3xl md:text-4xl font-light text-gray-800 mb-3 tracking-wide">
            MTDen Global
          </h1>

          {/* Cute subtitle */}
          <div className="mb-8">
            <p className="text-sm text-gray-500 mb-2">( ´･ω･` )</p>
            <h2 className="text-lg md:text-xl text-gray-600 font-light">
              Service Temporarily Offline
            </h2>
          </div>

          {/* Main Message Box */}
          <div className="bg-gray-50/80 rounded-2xl p-6 mb-8 border border-gray-100">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-3 font-light">
              This website needs to be paid for before it can be brought back online.
            </p>
            <p className="text-sm text-gray-500">
              Please contact the administrator to restore service ✨
            </p>
          </div>

          {/* Minimalist Button */}
          <button className="bg-gray-800 hover:bg-gray-700 text-white font-light py-3 px-8 rounded-full shadow-sm transform hover:scale-105 transition-all duration-300 text-sm tracking-wide">
            Contact Admin
          </button>

          {/* Status with cute emoji */}
          <div className="mt-8 flex items-center justify-center space-x-2 text-gray-400">
            <div className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse"></div>
            <span className="text-xs font-light tracking-wide">Currently Offline</span>
            <span className="text-sm">💤</span>
          </div>
        </div>

        {/* Minimalist Footer */}
        <div className="mt-6 text-gray-400 text-xs font-light tracking-wide">
          <p>© 2025 MTDen Global</p>
        </div>
      </div>

      {/* Subtle geometric shapes */}
      <div className="absolute top-10 right-10 w-20 h-20 border border-gray-200 rounded-full opacity-30"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 border border-gray-200 rounded-lg opacity-20 transform rotate-45"></div>
      
      {/* Soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
    </div>
  );
}
