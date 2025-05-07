const Middle = () => {
  let items = ["Home","Catalogs","Brands","Reviews", "Contact","Support"];
return (
  <>
  {items.map(value =>{
      return (
        <a href="#" className="text-lg leading-normal text-white no-underline hover:text-black">{value}</a>
      )
  })}
  </>
)
}

export default Middle