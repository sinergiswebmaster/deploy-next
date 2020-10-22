import { useState } from 'react'
import { Transition } from '@headlessui/react'
import Link from 'next/link';
import Head from 'next/head';


// import '../sass/custom-styles.scss';
export default function Layout ({children, title, live}) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>

        <Head>
            
        <meta charset="utf-8" />
    <link rel="apple-touch-icon" sizes="76x76" href="../assets/img/apple-icon.png"/>
    <link rel="icon" type="image/png" href="/img/favicon.png"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    {/* <!-- Primary Meta Tags --> */}
    <title>Seminario en línea | Medical Beyond</title>
    <meta name="title" content="Seminario en línea | Medical Beyond" />
    <meta name="description" content="<?php echo $metaDescription; ?>" />
    {/* <!-- Open Graph / Facebook --> */}
    <meta property="og:type" content="website"/>
    <meta property="og:url" content="https://live.medicalbeyond.mx/<?php echo $metaSlug; ?>"/>
    <meta property="og:title" content="Seminario en línea | Medical Beyond"/>
    <meta property="og:description" content="<?php echo $metaDescription; ?>" />
    <meta property="og:image" content="https://live.medicalbeyond.mx/<?php echo $metaSlug; ?>/assets/img/<?php echo $metaImg; ?>.jpg" />
    {/* <!-- Twitter --> */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://live.medicalbeyond.mx/<?php echo $metaSlug; ?>" />
    <meta property="twitter:title" content="Seminario en línea | Medical Beyond" />
    <meta property="twitter:description" content="<?php echo $metaDescription; ?>" />
    <meta property="twitter:image" content="https://live.medicalbeyond.mx/<?php echo $metaSlug; ?>/assets/img/<?php echo $metaImg; ?>.jpg" />
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />
    {/* <!--     Fonts and icons     --> */}
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;800&amp;display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous" />
    
  
        </Head>
        <div className="font-sans">
        {/* <!-- Navbar --> */}
        <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
                <div className="flex-shrink-0">
                <img className="lg:block h-10 w-auto" src="/img/logo.png" alt="Beyond Logo"/>
                </div>
            </div>
            <div className="-mr-2 flex sm:hidden">
                {/* <!-- Mobile menu button --> */}
                <button onClick={()=>setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">
                {!isOpen ? 
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                :
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                }
                </button>
            </div>
            </div>
        </div>
        <div className={!isOpen ? 'hidden': 'block'+'sm:hidden'}>
            
            <div className="pb-3 border-t border-gray-700">
            <div className="mt-3 px-2">
                <a href="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Cerrar Sesión</a>
            </div>
            </div>
        </div>
        </nav>

        {/* <!-- End Navbar --> */}
        {children}
    </div>
</>
    )
}