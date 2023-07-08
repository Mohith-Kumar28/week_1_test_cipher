// import { HeartIcon,StarIcon,PaperClipIcon,ExclamationTriangleIcon } from '@heroicons/react/24/outline'
// const products = [
//     {
//       id: 1,
//       name: 'White Traditional long dress',
//       href: 'https://www.hoffmanprocess.com.au/what-is-equanimity/',
//       imageSrc: '/assets/img1.png',
//       imageAlt: "image alt",
//       price: '$3.99',
//       originalPrice: '$5.99',
//       color: 'Black',
//       coupon:'#MONHPY',
//       couponName:'Monday Holiday',
//       colorOptions:['border-gray-400','border-red-400','border-blue-400']
//     },
//     {
//       id: 2,
//       name: 'Long Sleeve denim jacket',
//       href: 'https://www.limeroad.com/black-organic-ordershock-p19216522',
//       imageSrc: '/assets/img2.jpg',
//       imageAlt: "image alt",
//       price: '$3.99',
//       originalPrice: '$5.99',
//       color: 'Black',
//       coupon:'#SRPSPYDY',
//       couponName:'Payday Surprice',
//       colorOptions:['border-gray-400','border-blue-400']
//     },
//     {
//       id: 3,
//       name: 'Hush Puppies',
//       href: 'https://www.pexels.com/photo/pair-of-high-heels-3023238/',
//       imageSrc: '/assets/img3.jpeg',
//       imageAlt: "image alt",
//       price: '$3.99',
//       originalPrice: '$5.99',
//       color: 'Black',
//       coupon:'#HPYFRST',
//       couponName:'First order',
//       colorOptions:['border-gray-400','border-yellow-400','border-blue-400']
//     },
//     {
//       id: 4,
//       name: 'Athens skirt',
//       href: 'https://www.amazon.in/DreadLock-Drawstring-Synthetic-Hairpieces-Extentions/dp/B099WCXW5X',
//       imageSrc: '/assets/img4.jpg',
//       imageAlt: "image alt",
//       price: '$3.99',
//       originalPrice: '$5.99',
//       color: 'Black',
//       coupon:'#VEGANLOVE',
//       couponName:'vegetarian food',
//       colorOptions:['border-gray-400','border-red-400','border-blue-400']
//     },
    
//   ]
  

 
//   const Home = () => {
//     return (
//         <div className="bg-white">
//         <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6  lg:max-w-7xl lg:px-8">
      
  
//           <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//             {products.map((product) => (<div key={product.id}>
//                 <a target='_blank' href={product.href}>
                      
//               <div key={product.id} className="group relative shadow-lg rounded-xl">
//                 <div className="aspect-square w-full overflow-hidden rounded-xl bg-gray-200 ">
//                   <img
//                     src={product.imageSrc}
//                     alt={product.imageAlt}
//                     className="h-full w-full object-cover object lg:h-full lg:w-full"
//                   />

// <div className='p-2 bg-white rounded-full absolute top-3 right-3 z-10'>
// <HeartIcon className='w-5  text-black '/>

// </div>
// <div className='px-2 py-1 text-white bg-red-500 rounded-md absolute left-3 top-3 z-10'>
// 25%
// </div>

//                 </div>
//                 <div className='p-3'>
//                 <div className="mt-4 flex justify-between">
//                   <div>
//                     <h3 className="text-sm font-bold max-w-[125px] text-gray-700">
                     
//                         {product.name}
                      
//                     </h3>
                   
//                   </div>
//                   <p className="text-sm text-right font-bold text-red-500">{product.price}<br/><span className='text-gray-400 font-medium text-xs text-right'>{product.originalPrice}</span></p>
//                 </div>
//                 <div className='flex justify-between py-2'>
//                     <div className='flex gap-2'>
//                         {product.colorOptions.map((color)=>(

//                  <div key={color} className={`${color} rounded-full border-2 w-4 h-4 `}></div>
//             ))}
   
//                     </div>

//                     <div className='flex gap-2 text-xs text-gray-400'>
//                     <div className='rounded-full border w-5 h-5 border-gray-400 text-center'>S</div>
//                     <div className='rounded-full border w-5 h-5 border-gray-400 text-center'>M</div>
//                     <div className='rounded-full border w-5 h-5 border-gray-400 text-center'>L</div>
//                     </div>
//                 </div>


//                 <div className='flex justify-between'>
//                     <div className='flex text-gray-400 '>
//                         <StarIcon className='w-4 mr-2'/>
//                         <p >4</p>
//                         <PaperClipIcon className='w-4 -rotate-45'/>
//                     </div>
//                     <div className='flex text-pink-600'>BUY
                    
//                     <ExclamationTriangleIcon className='w-2 ml-1 fill-pink-600 rotate-180'/>
//                     </div>
                  
//                 </div>
//               </div>

              
            
//              </div>
//             </a> 

//               <div className='flex text-gray-400 rounded-xl mt-5 bg-white drop-shadow-xl '>
//                 <div className='w-full text-center'>
//                     {product.couponName}
//                     <br/>
//                     <span className='text-red-400 font-bold text-lg'>{product.coupon}</span>
//                 </div>
//                 <div className='rounded-r-xl py-2 px-8 text-white bg-pink-500'>
//                     20%<br/>Off
//                 </div>
//               </div>
//            </div> ))}
//           </div>
//         </div>
//       </div>
    
//     )
//   }
  
//   export default Home

















// using stled components
  import { HeartIcon, StarIcon, PaperClipIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

  import styled from 'styled-components';
  
  const Container = styled.div`
    background-color: #fff;
  `;
  
  const GridContainer = styled.div`
   display:flex; 
   
   width:100%;
   background-color: #f3f4f6;
  `;
  
  const ProductCard = styled.div`
    position: relative;
    border-radius: 1rem;
    background-color: #f3f4f6;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-left: 10px;
   margin-right: 10px;
   margin-top: 20px;
  `;
  
  const ProductImage = styled.img`
    width: 100%;
    height: 280px;
    object-fit: cover;
    border-radius: 1rem 1rem 0 0;
  `;
  
  const HeartIconStyled = styled(HeartIcon)`
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    width: 1.25rem;
    background-color: #fff;
    border-radius:100px;
    padding:2px;
    transition: color 0.2s ease-in-out;
  `;
  
  const DiscountBadge = styled.div`
    position: absolute;
    top: 0.75rem;
    left: 0.75rem;
    padding: 0.25rem 0.5rem;
    background-color: #ff4444;
    color: #fff;
    border-radius: 0.25rem;
  `;
  
  const ProductContent = styled.div`
    padding: 1rem;
  `;
  
  const ProductName = styled.h3`
    margin-top: 0;
    font-size: 0.875rem;
    font-weight: bold;
    color: #4b5563;
  `;
  
  const ProductPrice = styled.p`
    margin-top: 0.5rem;
    font-size: 0.875rem;
    font-weight: bold;
    color: #ef4444;
  `;
  
  const ColorOptionsContainer = styled.div`
    display: flex;
    gap: 0.25rem;
    margin-top: 0.15rem;
    margin-left:auto
  `;
  
  const ColorOption = styled.div`
    width: 0.625rem;
    height: 0.625rem;
    border-radius: 50%;
    border: 2px solid ${(props) => props.color};
  `;
  
  const SizeOptionsContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 0.5rem;
    color: #9ca3af;
  `;
  
  const RatingContainer = styled.div`
    display: flex;
    width:100%;
   
    justify-content:between;
    color: #9ca3af;
  
    svg {
      width: 1rem;
      margin-right: 0.25rem;
    }
  `;
  
  const BuyButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    // background-color: #000;
    color: #960080;
    border: none;
    margin-left:auto;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
  
    svg {
      width: 1rem;
      margin-left: 0.25rem;
    }
  
    &:hover {
      background-color: #333;
    }
  `;
  
  const CouponContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.625rem;
    padding: 0.5rem;
    color: #9ca3af;
    background-color: #fff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
  `;
  
  const CouponCode = styled.span`
    margin-right: 0.5rem;
    font-weight: bold;
    color: #ef4444;
  `;
  
  const DiscountPercent = styled.div`
    padding: 0.25rem 0.75rem;
    background-color: #960080;
    color: #fff;
    border-radius: 0.5rem;
  `;
  
  const ProductLink = styled.a`
    text-decoration: none;
    color: inherit;
  `;

  const SizeOption = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border: 2px solid #9ca3af;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
  color: #9ca3af;
`;
  
  const products = [
    {
      id: 1,
      name: 'White Traditional long dress',
      href: 'https://www.hoffmanprocess.com.au/what-is-equanimity/',
      imageSrc: '/assets/img1.png',
      imageAlt: 'image alt',
      price: '$3.99',
      originalPrice: '$5.99',
      color: 'Black',
      coupon: '#MONHPY',
      couponName: 'Monday Holiday',
      colorOptions: ['border-gray-400', 'border-red-400', 'border-blue-400'],
    },
    {
      id: 2,
      name: 'Long Sleeve denim jacket',
      href: 'https://www.limeroad.com/black-organic-ordershock-p19216522',
      imageSrc: '/assets/img2.jpg',
      imageAlt: 'image alt',
      price: '$3.99',
      originalPrice: '$5.99',
      color: 'Black',
      coupon: '#SRPSPYDY',
      couponName: 'Payday Surprise',
      colorOptions: ['border-gray-400', 'border-blue-400'],
    },
    {
      id: 3,
      name: 'Hush Puppies',
      href: 'https://www.pexels.com/photo/pair-of-high-heels-3023238/',
      imageSrc: '/assets/img3.jpeg',
      imageAlt: 'image alt',
      price: '$3.99',
      originalPrice: '$5.99',
      color: 'Black',
      coupon: '#HPYFRST',
      couponName: 'First order',
      colorOptions: ['border-gray-400', 'border-yellow-400', 'border-blue-400'],
    },
    {
      id: 4,
      name: 'Athens skirt',
      href: 'https://www.amazon.in/DreadLock-Drawstring-Synthetic-Hairpieces-Extentions/dp/B099WCXW5X',
      imageSrc: '/assets/img4.jpg',
      imageAlt: 'image alt',
      price: '$3.99',
      originalPrice: '$5.99',
      color: 'Black',
      coupon: '#VEGANLOVE',
      couponName: 'Vegetarian Food',
      colorOptions: ['border-gray-400', 'border-red-400', 'border-blue-400'],
    },
  ];
  
  const Home = () => {
    return (
      <Container>
        <div className="">
          <GridContainer>
            {products.map((product) => (
              <ProductLink key={product.id} href={product.href} target="_blank">
                <ProductCard>
                  <ProductImage src={product.imageSrc} alt={product.imageAlt} />
             
                  <HeartIconStyled className='w-5 text-black' />
                  <DiscountBadge>25%</DiscountBadge>
                  <ProductContent>
                    <div className='mt-4 flex justify-between'>
                      <ProductName>{product.name}</ProductName>
                      <ProductPrice>
                        {product.price}
                        <br />
                        <span className='text-gray-400 font-medium text-xs text-right'>{product.originalPrice}</span>
                      </ProductPrice>
                    </div>
                  
                    <SizeOptionsContainer>
                    <SizeOption>S</SizeOption>
                    <SizeOption>M</SizeOption>
                    <SizeOption>L</SizeOption>
                      <ColorOptionsContainer>
                      {product.colorOptions.map((color, index) => (
                        // <ColorOption key={index} color={color} />
                        <div key={color} className={`${color} rounded-full border-2 w-4 h-4 `}></div>
                      ))}
                    </ColorOptionsContainer>
                    </SizeOptionsContainer>
                    <RatingContainer>
                      <StarIcon className='w-4 mr-2' />
                      <p className='mt-2'>4</p>
                      <PaperClipIcon className='-rotate-45' />
                    <BuyButton>
                      BUY
                      <ExclamationTriangleIcon className='w-4 ml-1' />
                    </BuyButton>
                    </RatingContainer>
                  </ProductContent>
                  <CouponContainer>
                    <div>
                      {product.couponName}
                      <br />
                      <CouponCode>{product.coupon}</CouponCode>
                    </div>
                    <DiscountPercent>20% Off</DiscountPercent>
                  </CouponContainer>
                </ProductCard>
              </ProductLink>
            ))}
          </GridContainer>
        </div>
      </Container>
    );
  };
  
  export default Home;
  