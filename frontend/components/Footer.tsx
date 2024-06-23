import Link from 'next/link'

const Footer = () => {
  return (
    <div className=' bg-gradient-to-r from-blue-100 to-pink-100 grid md:grid-cols-3 justify-center z-80 border-2 border-purple-500 rounded-lg md:max-w-5xl mx-auto my-4 hover:scale-95 hover:cursor-pointer transition'>
      <div className='p-5 px-6 flex justify-around'>
        <div>
          <Link href={'/'}><p className=' text-gray-600 hover:text-purple-600 transition cursor-pointer'>Services</p></Link>
          <Link href={'/'}><p className='text-gray-600 hover:text-purple-600 transition cursor-pointer'>Home</p></Link>
          <Link href={'/'}><p className='text-gray-600 hover:text-purple-600 transition cursor-pointer'>About Us</p></Link>
        </div>
        <div className='border-r-2 border-purple-400'></div>
      </div>

      <div className='p-5 flex justify-between'>
        <div>
          <Link href={'contact'}><p className='text-gray-600 hover:text-purple-600 transition cursor-pointer'>Contact</p></Link>
          <p className='text-gray-600 hover:text-purple-600 transition cursor-pointer'>Social Media</p>
          <p className='text-gray-600 hover:text-purple-600 transition cursor-pointer'>Blog</p>
        </div>
        <div className='border-r-2 border-purple-400'></div>
      </div>

      <div className='p-5 flex justify-around'>
        <div>
          <p className='text-gray-600 hover:text-purple-600 transition cursor-pointer'>Our Mission</p>
          <p className='text-gray-600 hover:text-purple-600 transition cursor-pointer'>Terms</p>
          <p className='text-gray-600 hover:text-purple-600 transition cursor-pointer'>Privacy Policy</p>
        </div>
        <div className=''></div>
      </div>
    </div>
  )
}

export default Footer
