import React,{useState} from 'react';

function Card({children, width='auto', height, borderRadius = 8 ,padding='auto',margin='auto' ,backgroundColor='#2b2f7f', isHover = false, scaleHover = 1.05, func, opacity, overFlow = 'overflow-hidden', className})  {
   const animacaoHover = isHover ? `transition-transform duration-200 ease-in-out hover:scale-[${scaleHover}]` : ''; 
    
   const [isMouseOver, setIsMouseOver] = useState(false);
   return (
        <div 
        onMouseEnter={()=> isHover && setIsMouseOver(true)}
        onMouseLeave={()=> isHover && setIsMouseOver(false)}
        onClick={func}
        style={{ 
            width: width, 
            height: height ?? 'auto',
            margin: margin,
            padding: padding,
             borderRadius: borderRadius, 
             backgroundColor: backgroundColor,
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
              transform: isMouseOver ? `scale(${scaleHover})` : 'scale(1)',
              cursor: isHover ? 'pointer' : 'default',
              transition: 'transform 0.2s ease-in-out', opacity: opacity ?? 1,
              
            }} 
        className={`${className}  px-6 py-4 p-[20px]  rounded-lg shadow-md flex flex-col items-center ${overFlow} ${animacaoHover}`}>
            {children}
        </div>

    )
}

export default Card;