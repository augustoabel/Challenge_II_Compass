import AddIcon from "../../images/icons/icon-add.png"

const ListButton = () => {
  return (
    <button className="w-12 h-12 flex justify-center items-center text-white border-white/90 border border-solid rounded-full p-2">
      <img className="w-3.5 h-3.5" src={AddIcon} alt="Add icon" />
    </button>
  )
}

export default ListButton