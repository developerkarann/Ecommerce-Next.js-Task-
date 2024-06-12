"use client"
import React from 'react'

const MenuComponent = () => {

    const items = [
        {
            img: './assests/all-bags.png',
            name: 'All Bags'
        },
        {
            img: './assests/vanity-pouch.png',
            name: 'Vanity Pouch'
        },
        {
            img: './assests/tote.png',
            name: 'Tote Bag'
        },
        {
            img: './assests/Duffle-bag.png',
            name: 'Duffle Bag'
        },
        {
            img: './assests/Laptop-sleeve.png',
            name: 'Laptop Sleeve'
        },
        {
            img: './assests/messenger.png',
            name: 'Messager Bags'
        },
        {
            img: './assests/sling-bag.png',
            name: 'Sling Bag'
        },
        {
            img: './assests/handbag.png',
            name: 'Hand Bag'
        },
        {
            img: './assests/Frame.png',
            name: 'Buck Bag'
        },
    ]
   
    return (
        <>
            <div className="main flex items-baseline  mt-10 px-2">
                {
                    items.map((i, ind) => {
                        return (
                            <div className="item mt-2 cursor-pointer items-center text-center flex ml-1 flex-col min-w-36  "  key={ind}  >
                                <div className="icons">
                                    <img src={i.img} alt="" />
                                </div>
                                <div className="name font-extralight text-sm m-5">
                                    <p>{i.name}</p>
                                </div>
                            </div>

                        )
                    })
                }

            </div>
        </>
    )
}

export default MenuComponent