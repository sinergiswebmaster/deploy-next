import Layout from '../components/common/layout'
import React, { useState, useEffect } from "react"
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Router from 'next/router'
import { request } from 'graphql-request'
import useSWR from 'swr'


const fetcher = query => request('https://platform.medicalbeyond.com/graphql', query)


function Index(props) {
    console.log('PROPS',props)
    const [register,setRegister] = useState(false)
    const [datos,setDatos] = useState({
        email: '',
        nombre:'',
        aPaterno:'',
        aMaterno:'',
        cedula:'',
        pais:'',
        especialidad:'',
        terminos: false,
        telefono: ''
    })
    const [nombreEvento,setNombreEvento] = useState('')
    const [token,setToken] = useState(null)
    useEffect(() => {
        // getData()
    },[])
    const { data, error,isValidating, mutate } = useSWR(
        `query {
            eventBySlug( slug: "lorem-ipsum" ) {
              title
              start
              details {
                  id
                  time
                  countries
              }
              speakers {
                name
                position
                photo
              }
            }
          }`,
        fetcher
      )
      console.log(data)
      console.log(error)
      console.log(isValidating)
      console.log(mutate)
    const getData = async()=>{
          setNombreEvento(data.event.title)
    }

    const loginBeyond = async () =>{
        console.log('CLICK LOGIN')
        const {data} = await axios({
            url: 'https://platform.medicalbeyond.com/graphql',
            method: 'post',
            data: {
              query: `
              mutation {
                Login (
                  username: "${datos.email}"
                    
                ) {
                  status
                  access_token
                  refresh_token
                  expires_in
                  token_type
                  user {
                    id
                  }
                }
              }
                `
            }
          })
          console.log('LOGIN BY',data)
          setToken(data.data.Login.access_token)
    }
    const tracking = async () => {
        const {data} = await axios({
            url: 'https://platform.medicalbeyond.com/graphql',
            method: 'post',
            headers: {
                Authorization: `Bearer ${token}`
           },
            data: {
              query: `
              mutation {
                CreateTracking(
                  event_id:1
                    source: "facebook.com"
                  medium: "social"
                )
              }
                `
            }
          })
          console.log('TRACK',data)
    }
    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
        console.log(datos)
    }

   const registerForm = () => {
       console.log(hola)
   }
    return (
        <Layout live={false}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
<div className=" bg-gray-50 overflow-hidden ">
  <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
    <svg className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784">
      <defs>
        <pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
    </svg>


    <div className="relative mt-5 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
      <div className="relative lg:mt-3">
        <h1 className="text-2xl leading-8 font-extrabold text-green-500 tracking-tight sm:text-3xl sm:leading-9">
        {data ? data.eventBySlug.title : <div>LOADING....</div>}
        </h1>
        <p className="mt-3 text-gray-900">
            Detalles del evento:
        </p>
        {/* Event Date */}
        <p className="text-2xl font-bold">
            Jueves 5 de noviembre
        </p>
        {/* Times for event */}
        {data && data.eventBySlug.details[0].countries}
        <p><span className="text-xl font-bold">7:30 pm</span> Ciudad de México,Guatemala,Costa Rica, Honduras</p>
        <p><span className="text-xl font-bold">8:30 pm</span> Colombia, Ecuador, Perú, Panamá</p>
        <p><span className="text-xl font-bold">9:30 pm</span> Bolivia, República Dominicana</p>
        <p><span className="text-xl font-bold">10:30 pm</span> Argentina, Brasil, Chile, Paraguay</p>
        <hr className="my-5"/>
        <p className="text-gray-900">Ponentes:</p>
        <ul className="mt-10">
              {/* {
                  props.data.data.event.speakers.map((speaker,i)=>(
                      <li key={i} className={i != 0 ? 'mt-10': ''}>
                            <div className="flex-shrink-0 group block focus:outline-none ">
                <div className="flex items-center">
                    <div>
                    <img className="inline-block h-1/2 w-1/2 rounded-full border-2 border-green-500" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    </div>
                    <div className="ml-3">
                    <h5 className="text-xl leading-6 font-medium text-gray-900">
                    {speaker.name}
                    </h5>
                    <p className="text-xs leading-4 font-medium text-gray-500 transition ease-in-out duration-150">
                    {speaker.position}
                    </p>
                    </div>
                </div>
                </div>
                      </li>
                  ))
              } */}
        </ul>
      </div>

      <div className="mt-10 -mx-4 relative lg:mt-0">
<div className="bg-white overflow-hidden shadow-xl rounded-lg">
  <div className="px-6 py-5 sm:p-8">
    
    
    <div className="text-center">
    <div>
  <div className="sm:block my-2">
    <nav className="flex justify-center">
    <a href="#" onClick={()=>setRegister(!register)} className={`px-3 py-2 shadow-2xl font-medium text-sm leading-5 rounded-xl ${register ? 'bg-gray-200 text-gray-900': 'text-white bg-green-500'}`}>
      Iniciar sesión
      </a>
      <a href="#" onClick={()=>setRegister(!register)} aria-current="page" className={`ml-4  px-3 py-2 shadow-2xl font-medium text-sm leading-5 rounded-xl  ${register ? 'text-white bg-green-500' : 'bg-gray-200 text-gray-900'}`}>
        Nuevo registro
      </a>
    </nav>
  </div>
</div>
      {register ?
      <>
      <p className="mt-4 text-lg leading-6 text-gray-800">
      Si ya formas parte de Beyond solo debes <span className="text-green-500">↑ Iniciar Sesión</span> con tu correo electrónico registrado.
      </p>
      <p className="mt-4 text-lg leading-6 text-gray-800">
      Para registrarte al seminario en línea y formar parte de Beyond por favor completa el formulario de registro.
      </p>
      </>
      :
      <p className="mt-4 text-lg leading-6 text-gray-800">Ingrese su email para acceder.</p>
      }
    </div>
    <div className="mt-12">
        {register ? 
        <>
          <form onSubmit={registerForm} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
        <div className="sm:col-span-2">
                <div className="mt-1 relative rounded-md shadow-sm focus:border-green-500 focus:border">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {/* <!-- Heroicon name: mail --> */}
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                </div>
            <input id="email" name="email" onChange={handleInputChange} className="form-input block w-full py-4 px-10 sm:text-sm sm:leading-5 " placeholder="Correo electrónico" />
        </div>
        </div>
        <div>
                <div className="mt-1 relative rounded-md shadow-sm focus:border-green-500 focus:border">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {/* <!-- Heroicon name: user --> */}
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </div>
            <input id="name" className="form-input block w-full py-4 px-10 sm:text-sm sm:leading-5 " placeholder="Nombre" />
        </div>
        </div>
        <div>
        <div className="mt-1 relative rounded-md shadow-sm focus:border-green-500 focus:border">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {/* <!-- Heroicon name: user --> */}
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </div>
            <input id="aPat" name="aPaterno" onChange={handleInputChange} className="form-input block w-full py-4 px-10 sm:text-sm sm:leading-5 " placeholder="Apellido Paterno" />
        </div>
        </div>
        <div>
        <div className="mt-1 relative rounded-md shadow-sm focus:border-green-500 focus:border">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {/* <!-- Heroicon name: user --> */}
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </div>
            <input id="aMat" name="aMaterno" onChange={handleInputChange} className="form-input block w-full py-4 px-10 sm:text-sm sm:leading-5 " placeholder="Apellido Materno" />
        </div>
        </div>
        <div>
        <div className="mt-1 relative rounded-md shadow-sm focus:border-green-500 focus:border">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {/* <!-- Heroicon name: academic-cap --> */}
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
                </div>
            <input id="cedula" name="cedula" onChange={handleInputChange} className="form-input block w-full py-4 px-10 sm:text-sm sm:leading-5 " placeholder="Cédula Profesional" />
        </div>
        </div>
        <div className="sm:col-span-2">
          {/* <label htmlFor="phone_number" className="block text-sm font-medium leading-5 text-gray-700">Phone Number</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 flex items-center">
              <select aria-label="Country" className="form-select h-full py-0 pl-4 pr-8 border-transparent bg-transparent text-gray-500 transition ease-in-out duration-150">
                <option>US</option>
                <option>CA</option>
                <option>EU</option>
              </select>
            </div>
            <input id="phone_number" className="form-input py-3 px-4 block w-full pl-20 transition ease-in-out duration-150" placeholder="+1 (555) 987-6543"/> */}
          {/* </div> */}
          <div className="mt-1 relative rounded-md shadow-sm focus:border-green-500 focus:border">
            {/* <input id="cedula" className="form-input block w-full py-4 px-10 sm:text-sm sm:leading-5 " placeholder="Cédula Profesional" /> */}
            <select name="especialidad" onChange={handleInputChange} aria-label="especialidad" className="form-select h-full w-full py-4 px-10 border-green-500 bg-transparent text-gray-500 transition ease-in-out duration-150">
                <option value="1">Medicina General</option>
                <option value="2">Oncología</option>
                <option value="3">EU</option>
            </select>
        </div>
        </div>
        <div className="sm:col-span-2">
        <div className="mt-1 relative rounded-md shadow-sm focus:border-green-500 focus:border">
            {/* <input id="cedula" className="form-input block w-full py-4 px-10 sm:text-sm sm:leading-5 " placeholder="Cédula Profesional" /> */}
            <select name="pais" onChange={handleInputChange} aria-label="pais" className="form-select h-full w-full py-4 px-10 border-green-500 bg-transparent text-gray-500 transition ease-in-out duration-150">
                <option value="1">US</option>
                <option value="2">CA</option>
                <option value="3">EU</option>
            </select>
        </div>
        </div>
        <div>
            <p className="text-gray-500 text-sm">Opcional. Deseo recibir un recordatario antes del evento a través de un mensaje de texto en mi celular (Número a 10 dígitos).</p>
        </div>
        <div>
        <div className="mt-1 relative rounded-md shadow-sm focus:border-green-500 focus:border">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {/* <!-- Heroicon name: device-mobile --> */}
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>                </div>
            <input id="telefono" name="telefono" onChange={handleInputChange} className="form-input block w-full py-4 px-10 sm:text-sm sm:leading-5 " placeholder="Ej. 5587654321" />
        </div>
        </div>
        <div className="sm:col-span-2">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              {/* <!--
                Simple toggle

                On: "bg-indigo-600", Off: "bg-gray-200"
              --> */}
              <span role="checkbox" tabIndex="0" name="terminos" onChange={handleInputChange} aria-checked="false" className="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline">
                {/* <!-- On: "translate-x-5", Off: "translate-x-0" --> */}
                <span aria-hidden="true" className="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200"></span>
              </span>
            </div>
            <div className="ml-3">
              <p className="text-base leading-6 text-gray-500">
              Al enviar su información personal, acepta el uso con fines comerciales para este webinar y para que podamos manejar su información de acuerdo con nuestro 
                <a href="#" className="font-medium text-gray-700 underline"> Aviso de Privacidad</a>.
              </p>
            </div>
          </div>
        </div>
        <div className="sm:col-span-2">
          <span className="w-full inline-flex rounded-md shadow-sm">
            <button type="button" onClick={loginBeyond} className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-500 hover:bg-green-400 transition ease-in-out duration-150">
              Registro
            </button>
          </span>
        </div>
      </form>
    
        </>
        :
        <>
          <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
        <div className="sm:col-span-2">
                <div className="mt-1 relative rounded-md shadow-sm focus:border-green-500 focus:border">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {/* <!-- Heroicon name: mail --> */}
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                </div>
            <input id="email" name="email" onChange={handleInputChange} className="form-input block w-full py-4 px-10 sm:text-sm sm:leading-5 " placeholder="Correo electrónico" />
        </div>
        </div>
       <div className="sm:col-span-2">
          <span className="w-full inline-flex rounded-md shadow-sm">
            <button type="button" onClick={loginBeyond} className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-500 hover:bg-green-400 transition ease-in-out duration-150">
              Iniciar Sesión
            </button>
          </span>
        </div>
      </form>
    
        </>}
    </div>
  </div>
</div>
      </div>
    </div>

    <svg className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12" width="404" height="784" fill="none" viewBox="0 0 404 784">
      <defs>
        <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="404" height="784" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
    </svg>

  </div>
</div>

            </div>
        </Layout>
    );
  }
//   export async function getStaticPaths() {
//     return {
//       paths: [
//         { params: { event: '*' } }
//       ],
//       fallback: true
//     };
//   }
  
  export async function getServerSideProps(context) {
      console.log(context.params)
        const {data} = await axios({
            url: 'https://platform.medicalbeyond.com/graphql',
            method: 'post',
            data: {
              query: `
              query {
                eventBySlug( slug: "lorem-ipsum" ) {
                  title
                  start
                  speakers {
                    name
                    position
                    photo
                  }
                }
              }
                `
            }
          })
    return {
      props: {data}, // will be passed to the page component as props
    }
  }

  export default Index