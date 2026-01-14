import Card from './Card';
import Image from './Image';
function Post() {
  return (
     <Card width={500} height={'auto'} margin='0'>
              <Card width={400} height={400} backgroundColor={'#5556B8'} isHover={true} scaleHover={1.02} >
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSClpjhZxKffDpvSgE-jAwO_Mhdx3__492F4A&s" alt="Logo GitHub" width={200} height={300} className="m-[9px] rounded-md "/>
                <p className='texto font-[600] text-[20px] mt-[5px] text-white'>Conteúdo do Card de Feed</p>
              </Card>
            </Card>
  );
}
export default Post;