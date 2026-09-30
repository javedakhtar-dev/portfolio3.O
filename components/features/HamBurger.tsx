'use client'

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

export default function HamBurger() {
    const [HamBurgerOpen, setHamburgerOpen] = useState(false);
    return (
        <div>
            {HamBurgerOpen ? (
                <ImCross onClick={() => setHamburgerOpen(false)}/>
            ) : (
                <GiHamburgerMenu size={'1.5em'} onClick={() => setHamburgerOpen(true)}/>
            )}
        </div>
    )
}