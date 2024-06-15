export default function Page() {
  return (
    <div className="w-full h-dvh bg-white">
      <div className="aboslute">
        <div className="h-full absolute flex items-center justify-between overflow-hidden">
          <img
            src="Chains.jpeg"
            className="w-60 h-fit border border-gray-60 rounded-2xl transition animate-slide mb-56 bg-scroll"
          />
          <img
            src="Another.jpeg"
            className="w-60 h-fit border border-gray-60 rounded-2xl transition animate-slide2 mb-16 bg-scroll"
          />
          <img
            src="Image2.jpeg"
            className="w-60 h-fit border border-gray-60 rounded-2xl transition animate-slide3 mt-24 bg-scroll"
          />
          <img
            src="Image3.jpeg"
            className="w-60 h-fit border border-gray-60 rounded-2xl transition animate-slide4 mt-64 bg-scroll"
          />
          <img
            src="Image.jpeg"
            className="w-60 h-fit border border-gray-60 rounded-2xl transition animate-slide3  mt-24 bg-scroll"
          />
          <img
            src="Tyler.jpeg"
            className="w-60 h-fit border border-gray-60 rounded-2xl transition animate-slide2  mb-16 bg-scroll"
          />
          <img
            src="Shoes.jpeg"
            className="w-60 h-fit border border-gray-60 rounded-2xl transition animate-slide mb-56 bg-scroll"
          />
        </div>
      </div>
      <div className="h-2/5 w-full flex grid flex-cols-1 justify-center items-center">
        <div className="  ">Level Up Your Style</div>
        <button className="">button</button>
      </div>
    </div>
  );
}
