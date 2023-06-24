import { HeartIcon,StarIcon,PaperClipIcon,ExclamationTriangleIcon } from '@heroicons/react/24/outline'
const products = [
    {
      id: 1,
      name: 'White Traditional long dress',
      href: 'https://www.hoffmanprocess.com.au/what-is-equanimity/',
      imageSrc: '/assets/img1.png',
      imageAlt: "image alt",
      price: '$3.99',
      originalPrice: '$5.99',
      color: 'Black',
      coupon:'#MONHPY',
      couponName:'Monday Holiday',
      colorOptions:['border-gray-400','border-red-400','border-blue-400']
    },
    {
      id: 2,
      name: 'Long Sleeve denim jacket',
      href: 'https://www.limeroad.com/black-organic-ordershock-p19216522',
      imageSrc: '/assets/img2.jpg',
      imageAlt: "image alt",
      price: '$3.99',
      originalPrice: '$5.99',
      color: 'Black',
      coupon:'#SRPSPYDY',
      couponName:'Payday Surprice',
      colorOptions:['border-gray-400','border-blue-400']
    },
    {
      id: 3,
      name: 'Hush Puppies',
      href: 'https://www.pexels.com/photo/pair-of-high-heels-3023238/',
      imageSrc: '/assets/img3.jpeg',
      imageAlt: "image alt",
      price: '$3.99',
      originalPrice: '$5.99',
      color: 'Black',
      coupon:'#HPYFRST',
      couponName:'First order',
      colorOptions:['border-gray-400','border-yellow-400','border-blue-400']
    },
    {
      id: 4,
      name: 'Athens skirt',
      href: 'https://www.amazon.in/DreadLock-Drawstring-Synthetic-Hairpieces-Extentions/dp/B099WCXW5X',
      imageSrc: '/assets/img4.jpg',
      imageAlt: "image alt",
      price: '$3.99',
      originalPrice: '$5.99',
      color: 'Black',
      coupon:'#VEGANLOVE',
      couponName:'vegetarian food',
      colorOptions:['border-gray-400','border-red-400','border-blue-400']
    },
    
  ]
  

 
  const Home = () => {
    return (
        <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6  lg:max-w-7xl lg:px-8">
      
  
          <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (<div key={product.id}>
                <a target='_blank' href={product.href}>
                      
              <div key={product.id} className="group relative shadow-lg rounded-xl">
                <div className="aspect-square w-full overflow-hidden rounded-xl bg-gray-200 ">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object lg:h-full lg:w-full"
                  />

<div className='p-2 bg-white rounded-full absolute top-3 right-3 z-10'>
<HeartIcon className='w-5  text-black '/>

</div>
<div className='px-2 py-1 text-white bg-red-500 rounded-md absolute left-3 top-3 z-10'>
25%
</div>

                </div>
                <div className='p-3'>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm font-bold max-w-[125px] text-gray-700">
                     
                        {product.name}
                      
                    </h3>
                   
                  </div>
                  <p className="text-sm text-right font-bold text-red-500">{product.price}<br/><span className='text-gray-400 font-medium text-xs text-right'>{product.originalPrice}</span></p>
                </div>
                <div className='flex justify-between py-2'>
                    <div className='flex gap-2'>
                        {product.colorOptions.map((color)=>(

                 <div key={color} className={`${color} rounded-full border-2 w-4 h-4 `}></div>
            ))}
   
                    </div>

                    <div className='flex gap-2 text-xs text-gray-400'>
                    <div className='rounded-full border w-5 h-5 border-gray-400 text-center'>S</div>
                    <div className='rounded-full border w-5 h-5 border-gray-400 text-center'>M</div>
                    <div className='rounded-full border w-5 h-5 border-gray-400 text-center'>L</div>
                    </div>
                </div>


                <div className='flex justify-between'>
                    <div className='flex text-gray-400 '>
                        <StarIcon className='w-4 mr-2'/>
                        <p >4</p>
                        <PaperClipIcon className='w-4 -rotate-45'/>
                    </div>
                    <div className='flex text-pink-600'>BUY
                    
                    <ExclamationTriangleIcon className='w-2 ml-1 fill-pink-600 rotate-180'/>
                    </div>
                  
                </div>
              </div>

              
            
             </div>
            </a> 

              <div className='flex text-gray-400 rounded-xl mt-5 bg-white drop-shadow-xl '>
                <div className='w-full text-center'>
                    {product.couponName}
                    <br/>
                    <span className='text-red-400 font-bold text-lg'>{product.coupon}</span>
                </div>
                <div className='rounded-r-xl py-2 px-8 text-white bg-pink-500'>
                    20%<br/>Off
                </div>
              </div>
           </div> ))}
          </div>
        </div>
      </div>
    
    )
  }
  
  export default Home