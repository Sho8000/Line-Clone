'use client'
import { useEffect, useState, useCallback, useLayoutEffect } from 'react'
import styles from './Header.module.css'
import { BiGlobe } from 'react-icons/bi'

const menuItems = [
    { id: 'lifeOnLine', label: 'Life on LINE' },
    { id: 'messengerApp', label: 'Messenger APP' },
    { id: 'services', label: 'Services' }
] as const

type MenuItem = typeof menuItems[number]['id']

const Navbar = () => {
    const [isClient, setIsClient] = useState(false)
    const [activeItem, setActiveItem] = useState<MenuItem>('lifeOnLine')

    useEffect(() => {
        setIsClient(true)
    }, [])

    useLayoutEffect(() => {
        const updateSlider = () => {
            const activeElement = document.querySelector(`.${styles.active}`)
            const slider = document.querySelector(`.${styles.slider}`)
            const headerMenu = document.querySelector(`.${styles.headerMenu}`)
            
            if (activeElement && slider && headerMenu) {
                const { left: menuLeft } = headerMenu.getBoundingClientRect()
                const { left, width } = activeElement.getBoundingClientRect()
                
                slider.setAttribute('style', `width: ${width}px; transform: translateX(${left - menuLeft}px)`)
            }
        }

        setTimeout(updateSlider, 0)
        
        window.addEventListener('resize', updateSlider)
        return () => window.removeEventListener('resize', updateSlider)
    }, [activeItem, isClient])

    const handleNavClick = useCallback((itemName: MenuItem) => (e: React.MouseEvent) => {
        e.preventDefault()
        setActiveItem(itemName)
        const element = document.getElementById(itemName)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }, [])

    if (!isClient) return null

    return (
        <>
            <header className={styles.header}>
                <div>
                    <div className={styles.headerTopRow}>
                        <h1><a href="/">LINE</a></h1>
                    </div>
                    <div className={styles.navigationContainer}>
                        <ul className={styles.headerMenu}>
                            <div className={styles.slider} data-active={activeItem}></div>
                            {menuItems.map(({ id, label }) => (
                                <li key={id} className={activeItem === id ? styles.active : ''}>
                                    <a href={`/#${id}`} onClick={handleNavClick(id)}>{label}</a>
                                </li>
                            ))}
                        </ul>
{/*                         <div className={styles.langMenuTop}>
                            <BiGlobe aria-label="Language selector" />
                        </div> */}
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar
