


function Nav() {
  return (
    

      <nav className=" sticky  z-50 bg-white shadow flex justify-between items-center p-4">
       <div>
      <h1 className="text-gray-800 font-bold tracking-wide"> 
        <span className="text-[#83723A]">Rora</span>Shop</h1>
       </div>
       <div>
    <ul className="flex gap-12 text-[15px] font-light">
        <li className="text-[#83723A] font-semibold cursor-pointer">Home</li>
        <li className="text-[#83723A] font-semibold cursor-pointer">product</li>
        <li className="text-[#83723A] font-semibold cursor-pointer">About</li>
        <li className="text-[#83723A] font-semibold cursor-pointer">Contact</li>
      </ul>

      </div>
      <div className="relative cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="#83723A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
      <span className="absolute -top-2 -right-2 bg-[#83723A] text-white text-xs w-4 h-4 flex items-center justify-center rounded-full"> 0
      </span>
    </div>
      </nav>
      
  )
}

export default Nav

