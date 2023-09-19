// import { Children } from "react"

const Button = ({children}) => {
  return (
    <button className="bg-slate-800 text-white font-semibold rounded py-1 px-2 md:py-1 md:px-6 md:text-lg">
        {children}
    </button>
  )
}

export default Button