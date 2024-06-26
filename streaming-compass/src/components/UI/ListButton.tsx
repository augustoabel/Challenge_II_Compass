
const ListButton = () => {
  return (
    <button className="w-12 h-12 flex justify-center items-center text-white border-white/90 border border-solid rounded-full p-2 hover:bg-white">
      <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
      <path d="M13 8H8V13C8 13.55 7.55 14 7 14C6.45 14 6 13.55 6 13V8H1C0.45 8 0 7.55 0 7C0 6.45 0.45 6 1 6H6V1C6 0.45 6.45 0 7 0C7.55 0 8 0.45 8 1V6H13C13.55 6 14 6.45 14 7C14 7.55 13.55 8 13 8Z" fill="white"/>
      </svg>
    </button>
  )
}

export default ListButton