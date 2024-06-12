import React from 'react'

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="TopHeader  flex justify-between m-3 mt-7  pl-10  ">
                    <div className="logo">
                        <img src="./assests/logo.png" className='cursor-pointer' alt="" />
                    </div>
                    <div className="menu flex">
                        <img src="./assests/search.png" className=' mr-8 cursor-pointer' alt="" />
                        <img src="./assests/user-alt.png" className=' mr-8 cursor-pointer' alt="" />
                        <img src="./assests/shopping-bag.png" className=' mr-8 cursor-pointer' alt="" />
                        <img src="./assests/Bookmark.png" className=' mr-8 cursor-pointer' alt="" />
                    </div>
                </div>
                <div className="HeaderMenu">
                    <div className="ul flex list-none  justify-center ">
                        <li><a href="" className=' font-extralight text-sm m-5 ' > Bags </a></li>
                        <li><a href="" className=' font-extralight text-sm m-5' > Travel  </a></li>
                        <li><a href="" className=' font-extralight text-sm m-5' >  Accesories </a></li>
                        <li><a href="" className=' font-extralight text-sm m-5' > Gifting </a></li>
                        <li><a href="" className=' font-extralight text-sm m-5' > Jewelery </a></li>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header