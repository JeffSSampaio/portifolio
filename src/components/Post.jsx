import Image from './Image';
import '../styles/post.css';
function Post() {
  return (
    <div className='body-feed'>
        <div className='container-feed'>
           <div className='posts-feed'>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSClpjhZxKffDpvSgE-jAwO_Mhdx3__492F4A&s" alt="Logo GitHub" width={200} height={220} className="m-[9px] rounded-md "/>
            <p className='texto font-[700] text-[20px] mt-[5px] text-white'> oi</p>
           </div>
        </div>
    </div>

   
  );
}
export default Post;

