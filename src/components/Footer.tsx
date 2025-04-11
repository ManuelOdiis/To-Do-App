const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <div className="text-center py-6 font-medium"><p className="text-border">Copyright &copy; {year}   To Do App. All rights reserved</p></div>
  )
}

export default Footer