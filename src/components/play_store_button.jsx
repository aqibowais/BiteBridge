
export const PlayStoreButton = ({data}) => {
  const {title, icon} = data
  return (
    <div className="w-52 h-auto flex justify-center items-center gap-3 p-2 my-3 bg-[#F4F4F4] rounded-lg">
        <div className="text-2xl">
        {icon}
        </div>
        <div>
          <p className="text-gray-500 text-sm">Download on the</p>
          <h1 className="text-black font-bold tracking-wide">{title}</h1>
        </div>
    </div>
  )
}
