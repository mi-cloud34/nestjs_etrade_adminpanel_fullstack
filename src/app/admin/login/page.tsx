import LoginClient from "@/components/AdminPanel/Login"
import { ReactElement } from "react";


const Login = () => {
    return (
      <div><div className="bg-red-700 text-blue-900">merhaba nasılsın mesut</div>
      <LoginClient/></div>
    );
  }
  
  export default Login
  Login.getLayout = function getLayout(page: ReactElement) {
    return <>{page}</>;
  };