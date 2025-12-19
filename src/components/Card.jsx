import React,{useState} from 'react';

function Card({children, width=12, height = 12, borderRadius = 8 , backgroundColor='#2b2f7f', isHover = false, scaleHover = 1.05})  {
   const animacaoHover = isHover ? `transition-transform duration-200 ease-in-out hover:scale-[${scaleHover}]` : ''; 
    
   const [isMouseOver, setIsMouseOver] = useState(false);
   return (
        <div 
        onMouseEnter={()=> isHover && setIsMouseOver(true)}
        onMouseLeave={()=> isHover && setIsMouseOver(false)}

        style={{ width: width, height: height, borderRadius: borderRadius , backgroundColor: backgroundColor, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', transform: isMouseOver ? `scale(${scaleHover})` : 'scale(1)',transition: 'transform 0.2s ease-in-out'}} 
        className={`card px-6 py-4 p-[20px]  rounded-lg shadow-md flex flex-col items-center overflow-hidden ${animacaoHover}`}>
            {children}
        </div>

    )
}

export default Card;