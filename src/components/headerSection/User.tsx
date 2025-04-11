import avatar from "../../../public/avatar-1.jpg"

const User = () => {
  return (
    <div className="top-0 right-0">
        <section className="p-5 flex flex-col h-full">
        <span className="flex items-center mx-auto">
            <span className="font-medium"> Hi User!</span>
            <img src={avatar} alt="cat" className="w-10 rounded-full ml-4"
            />
        </span>
        </section>
    </div>
  )
}

export default User