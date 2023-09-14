import { useEffect, useRef } from "react";

const AvatarContextMenu = ({
  options,
  cordinates,
  contextMenu,
  setContextMenu,
}) => {
  const contextMenuRef = useRef(null);
  const handleClick = (e, callback) => {
    e.stopPropagation();
    setContextMenu(false)
    callback()
  }
  useEffect(()=>{
    const handleOutsideClick = (e) => {
        if(e.target.id !== "context-opener") {
            if ( contextMenuRef.current && 
                !contextMenuRef.current.contains(event.target) ){
                    setContextMenu(false)
                }
        }
    }
    document.addEventListener("click", handleOutsideClick)
    return () => {
        document.removeEventListener("click", handleOutsideClick)
    }
  },[])
  return (
    <div className="flex gap-3 relative z-[100]">
    <div
      className={`fixed bg-primary shadow-sm rounded-md shadow-slate-700 py-1`}
      style={{
        top: cordinates.y,
        left: cordinates.x,
      }}
      ref={contextMenuRef}
    >
      <ul className="text-white">
        {options.map(({ name, callback }) => (
          <li key={name} onClick={(e) => handleClick(e, callback)} className="py-2 hover:bg-secondary px-4 cursor-pointer">
           {name}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default AvatarContextMenu;
