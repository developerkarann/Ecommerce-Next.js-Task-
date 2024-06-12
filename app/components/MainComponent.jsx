"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const MainComponent = () => {

  const [productData, setProductData] = useState([])

  //Feting data from the given API
  const fetchData = async () => {
    try {
      const resposne = await axios.get('https://fakestoreapi.com/products');
      const { data } = resposne;
      setProductData(data.slice(0, 8));
      // API is giving the of 25 producst so using array.slice() method to show only 8 product as it was required 
    } catch (error) {
      console.log('Getting while fetching data', error.message)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <>
      <div className="mainSection">
        <div className="subHeadings flex justify-between p-5">
          <div className="text">Bags Backpacks</div>
          <div className="totalProduct">{productData.length} Products</div>
        </div>
        <div className="products ">
          <div className="cardContainer grid pl-10 grid-cols-4 my-5  " >
            {
              productData?.map((product) => {
                return (
                  <>
                    <div className="card self-center max-w-72  rounded-lg overflow-hidden shadow-lg mb-10  cursor-pointer " style={{ backgroundColor: '#111', maxHeight: '600px' }}>
                      <img src={product.image} alt="Product Image" className="w-full max-h-96 min-h-96 object-cover" />
                      <div className="px-3 py-4">
                        <h2 className=" text-lg mb-2">{product.title.substring(0, 25)}...</h2>
                        {/* Using array.substring() method because the every product has different length of title 
                        so it was effecting the widh of card and giving bad user experince  */}
                        <div className="detaols flex justify-between items-center" >
                          <div className="flex my-2  items-end">
                            <p className=" text-base text-xl mr-2 " >₹{product.price}</p>
                            <p className="text-gray-500  text-xs line-through mr-1 mb-1">₹ {product.price * 2}</p>
                            <p className=" text-green-700 text-xs mr-1 mb-1">(50% Off)</p>
                          </div>
                          <div className="div">
                            <img src="./assests/store.png" className=' w-7 h-8 ' alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default MainComponent