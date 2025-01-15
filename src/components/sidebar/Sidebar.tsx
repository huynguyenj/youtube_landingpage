import './Sidebar.css'
function Sidebar({isBigTitle,Icon,title} : {isBigTitle:boolean, Icon:React.ElementType | null,title:string}) {
  return (
    <div className='sidebar_row'>
      {isBigTitle ? 
      (<>
       <h2 className='title_icon'>{title}</h2>
      {Icon && <Icon sx={{fontSize:'14px',background:'none'}}></Icon>}
      </>) 
      : (<>
      {Icon && <Icon sx={{background:'none'}} ></Icon>}
        <h2 className='title_icon'>{title}</h2>
      </>)}
    </div>
  )
}

export default Sidebar