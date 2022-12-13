import React from 'react'
import images from "./control.png";
import logo from "./acmlogo.png";
import { useState } from "react";


const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
];

export default function () {
    const [open, setOpen] = useState(true);
    return (
        <div>
            <div className="flex">
                <div
                    className={` ${open ? "w-60" : "w-20 "
                        } bg-whit h-screen p-5  pt-8 relative duration-300`}
                >
                    <img
                        src={images}
                        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
                        border-2 rounded-full  ${!open && "rotate-180"}`}
                        onClick={() => setOpen(!open)}
                    />
                    <div className="flex gap-x-4 items-center">
                        <img
                            src={logo}
                            className={`cursor-pointer duration-500 ${open && "rotate-[360deg] w-13"
                                }`}
                        />
                        <h1
                            className={`text-whit origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                                }`}
                        >
                        
                        </h1>
                    </div>
                    <ul className="pt-6">
                        {Menus.map((Menu, index) => (
                            <li
                                key={index}
                                className={`flex  rounded-md p-2 cursor-pointer hover:bg-dark-blue text-black-300 text-sm items-center gap-x-4 
                                ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-dark-blue"
                                    } `}
                            >
                                <img src={`./components/${Menu.src}.png`} />
                                <span className={`${!open && "hidden"} origin-left duration-200 text-bgcol font-bold`}>
                                    {Menu.title}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="h-screen flex-1 p-7">
                    <h1 className="text-whit text-2xl font-semibold ">Home Page</h1>
                </div>
            </div>
        </div>
    )
}
