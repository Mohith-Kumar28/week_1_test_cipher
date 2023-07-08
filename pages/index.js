import Home from "@/components/Home";
import Navbar from "@/components/NavBar";



export default function index() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between  bg-white`}
    >
      <Navbar/>

      <Home/>
      </main>
  )
}
