
const Button = ({className, text, icon:Icon, onClick,...props}) => {
  return (
    <button className={` bg-gradient-to-r from-red-500 to-purple-500 hover:from-pink-600 hover:to-indigo-600 active:from-red-800 active:to-purple-800  transition-all text-white px-3 py-1  cursor-pointer text-center ${className}`} onClick={onClick} {...props}>
        {Icon && <Icon size={16} />}
        {text? text : "Button"}
    </button>
  )
}

export default Button