

function Image({src, alt, className, width=150, height=150, borderRadius=8, border = '5px solid var( --cor-roxo-escuro)'}) {
  return <img src={src}  style={{border: border, borderRadius:borderRadius , width: width, height: height}} alt={alt} className={className} />;
}

export default Image;