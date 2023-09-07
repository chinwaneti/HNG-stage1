import Image from 'next/image';
import pic from "./images/styl.png";
import {AiOutlineGithub, AiFillLinkedin, AiOutlineInstagram, AiOutlineTwitter, AiOutlineMail, AiOutlineHome} from "react-icons/ai"
import Link from 'next/link';

export default function Page() {

  return (
    <div className='h-[84.6vh] bg-gray-100'>
      <div>
        <div>
          <header className='flex items-start'>
            <div data-testid="slackDisplayImage" className='flex items-center h-[70vh] bg-red-200 w-[25%] ml-28 rounded-b-full'>
            <Image src={pic} alt='dinma' width={200} height={300} className=' rounded-b-full mt-20 ml-14' />

              <div className='ml-[100%] '>
                <ul className='flex  justify-start items-start space-x-20 mt-16'>
                 <Link href='/'><li><AiOutlineHome /></li></Link> 
                  <li><AiFillLinkedin /></li>
                  <li><AiOutlineTwitter /></li>
                  <li><AiOutlineInstagram /></li>
                 <Link href='mailto:chidinmanwaneti.cn@gmail.com'> <li><AiOutlineMail /></li></Link>
                </ul>
                <div className='mt-14 w-[100%] '>
                  <p className=''>Hello there, Nice to meet you . I am</p>
                  <h1 data-testid="slackUserName" className='font-bold text-3xl my-3 text-blue-600'>Chidinma Nwaneti</h1>
                  <p  data-testid="myTrack" >My Track is <span className=' text-2xl' >Frontend</span></p>
                 <p>Crafting the Pixels, Weaving the Web. Frontend Magic in Every Click!</p>
                <Link href='https://github.com/chinwaneti/HNG-stage1' data-testid="githubURL">
  <button className='rounded-3xl flex justify-between bg-blue-600 w-32 my-5 p-3 hover:bg-blue-800 hover:shadow-xl hover:border-2 hover:border-black font-bold'>
    <AiOutlineGithub size={25} className='mx-auto'/>
  </button>
</Link>

                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
}
