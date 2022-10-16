import {Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Header,
  Home,
  NotFound,
  ProtectedPage,
  SignIn,
  SignUp,
  Footer,
  About,
  Cart,
  Account
} from "./components/pages";
import {
  UserAuthContextProvider,
  useUserAuth,
} from "./context/UserAuthContext";

function App() {
  let { user } = useUserAuth();
  return (
    <div className="App">
      <UserAuthContextProvider>
        {!user ? "" : <Header />}
          <Routes>
            <Route path="/Home" element={user!=null?<Home />:<SignIn/>} />
            <Route path="SignIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/" element={<ProtectedPage><Home /></ProtectedPage>}/>
            <Route path="*" element={<NotFound />} />
            <Route path="About" element={user!=null?<About />:<SignIn/>} />
            <Route path="Cart" element={user!=null?<Cart />:<SignIn/>} />
            <Route path="Account" element={user!=null?<Account />:<SignIn/>} />
          </Routes>
        {!user?"":<Footer/>}
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
