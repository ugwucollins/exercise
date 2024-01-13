import { useState } from 'react';
import './Header.scss';
import { Link } from 'react-scroll'

const Header = ({menus}:any) => {
    const [selectIndex,setselectIndex] = useState(0);
    const[dropdown,setdropdown] = useState(false);
    const[dropdown1,setdropdown1] = useState(true);
    const[nav,setnav] = useState(true);

    return(
        <div className=" Header">
            <div className="Header-fit">
                <span className="Header-fit-f">F</span>
                <span className="Header-fit-club">
                    <p className="Header-fit-club-p">THE</p>
                    <p className="Header-fit-club-p2">FIT CLUB</p>
                </span>
            </div>

            <div className="Header-menu">
                    <>
                   <div className={dropdown1?"Header-menu-bar1":"Header-menu-close"}
                    onClick={() => {
                        setdropdown1(false)
                        setdropdown(true)
                        setnav(false)
                    }}
                    ></div>
                    <div className={dropdown?"Header-menu-bar":"Header-menu-close"}
                    onClick={() => {
                        setdropdown(false)
                        setdropdown1(true)
                        setnav(true)
                    }}
                    ></div>
                    </>
                <nav className={nav?"Header-menu-nav":"Header-menu-nav1"}>

                    <ul className='Header-menu-ul'>
                            {menus.map((menu:any,Index:any) => 
                            <li className="Header-menu-li"  key={menu}>
                                      <Link
                                      onClick={() => {
                                        setselectIndex(Index)
                                        setnav(true)
                                        setdropdown1(true)
                                        setdropdown(false)
                                      }}
                                        to={menu.title}
                                        key={menu.id}
                                        offset={0}
                                        duration={1200}
                                        smooth={true}
                                        className={selectIndex === Index ?"active":"Header-menu-li"}
                                        >
                                        {menu.title}
                                     </Link>
                                </li>)
                            }
                    </ul>
                </nav>
            </div>
            
        </div>
    )
}
export default Header;