import logo from './images/logo.svg'
import './styles/preloader.css'
import { useEffect } from 'react'

export default function Preloader() {
  useEffect(() => {
    const timer = setTimeout(() => {
     let preloader = document.querySelector('.preloader')

     preloader.style.display = 'none'
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className='preloader'>
        <div className='preloader-container'>
             <img src={logo} alt='' />
        </div>
    </div>
  )
}
