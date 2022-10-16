// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import {Home, SignIn, SignUp, NotFound, ProtectedPage,Blog, Header, Footer } from './components/pages/index'
// import  {UserAuthContextProvider, useUserAuth} from './context/UserAuthContext'

// export default function Router() {
//     const {user} = useUserAuth()
//   return (
//     // <UserAuthContextProvider>
//         <Routes>
//             {/* {!user?<Header/>:""} */}
//             {/* <Route path='*' element={<NotFound/>}/> */}
//             <Route path='/' element={<SignIn/>}/>
//             <Route path='/signUp' element={<SignUp/>}/>
//             <Route path='/home' element={<Home/>}/>
//             <Route path='/home' element={<ProtectedPage><Home/></ProtectedPage>}/>
//             {/* {!user?<Footer/>:""} */}
            
//         </Routes>
//     // </UserAuthContextProvider>
//     )
// }
