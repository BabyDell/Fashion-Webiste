export default function Page() {
  return (
    <>
      <div className="w-full h-dvh bg-white ">
        <div className="absolute mx-auto  -mt-12 inset-x-0 top-1/4 h-auto w-auto">
          <div className="font-serif text-5xl mb-3 text-gray-700 text-emerald-800">
            Upgrade Your Fashion
          </div>
          <button className="bg-red-600 hover:bg-red-700 px-4 py-3 rounded-md text-xl text-slate-100">
            Start Now
          </button>
        </div>
        <div className="h-full flex items-center justify-center gap-3 overflow-hidden">
          <img
            src="Chains.jpeg"
            className="w-60 h-fit border border-gray-400 rounded-2xl transition animate-slide mb-56 bg-scroll max-xl:hidden"
          />
          <img
            src="Another.jpeg"
            className="w-60 h-fit border border-gray-400 rounded-2xl transition animate-slide2 mb-16 bg-scroll"
          />
          <img
            src="Image2.jpeg"
            className="w-60 h-fit border border-gray-400 rounded-2xl transition animate-slide3 mt-24 bg-scroll"
          />
          <img
            src="Image3.jpeg"
            className="w-60 h-fit border border-gray-400 rounded-2xl transition animate-slide4 mt-64 bg-scroll"
          />
          <img
            src="Image.jpeg"
            className="w-60 h-fit border border-gray-400 rounded-2xl transition animate-slide3  mt-24 bg-scroll"
          />
          <img
            src="Tyler.jpeg"
            className="w-60 h-fit border border-gray-400 rounded-2xl transition animate-slide2  mb-16 bg-scroll"
          />
          <img
            src="Shoes.jpeg"
            className="w-60 h-fit border border-gray-400 rounded-2xl transition animate-slide mb-56 bg-scroll max-xl:hidden"
          />
        </div>
      </div>
    </>
  );
}
