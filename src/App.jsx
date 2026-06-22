import { FcGoogle } from "react-icons/fc";

function App() {
  return (
  <div className="min-h-screen bg-[#F5F0E8]">

      {/* Navbar */}

      <nav className="flex justify-between items-center px-12 py-6">

        <div className="flex items-center gap-3">

         <div className="w-14 h-14 rounded-2xl bg-[#0F172A] flex items-center justify-center text-[#C8A96B] font-bold text-2xl shadow-lg">
            S
          </div>

          <div>
            <h1 className="text-xl font-bold">
              SEOLVIA
            </h1>

            <p className="text-xs text-gray-500">
              PRODUCTS
            </p>
          </div>

        </div>

       <button className="border border-[#C8A96B] px-5 py-2 rounded-xl text-[#0F172A]">
          Contact Sales
        </button>

      </nav>

      {/* Main Section */}

      <div className="grid md:grid-cols-2 items-center px-20 min-h-[80vh]">

        {/* Left */}

        <div>
          <h1 className="text-6xl font-bold mb-6">
  Production & Inventory
  <br />
  Management System
</h1>
<p className="text-xl text-gray-600 mb-8">
  Welcome to <span className="text-[#0F172A] font-semibold">SEOLVIA Products</span>
</p>
          
          <p className="text-lg text-gray-500 mt-4 max-w-lg">
Track production orders, inventory,
raw materials and manufacturing workflows
from one centralized platform.
</p>

          <p className="text-xl text-gray-600 mb-10">
            Login to access your
           <span className="text-[#0F172A] font-semibold">
              {" "}SEOLVIA Products
            </span>
            {" "}Inventory System.
          </p>

          <img
            src="https://cdn-icons-png.flaticon.com/512/679/679720.png"
            alt="inventory"
            className="w-[320px]"
          />

        </div>

        {/* Right */}

        <div className="flex justify-center">

          <div className="bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-2xl w-[500px]">

            <h2 className="text-3xl font-bold mb-2">
              Login to your account
            </h2>

            <p className="text-gray-500 mb-8">
              Enter your credentials to continue
            </p>

            <input
              type="email"
              placeholder="Email address"
              className="w-full border p-4 rounded-xl mb-5"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border p-4 rounded-xl mb-5"
            />

            <div className="flex justify-between mb-6">

              <label>
                <input type="checkbox" />
                <span className="ml-2">
                  Remember me
                </span>
              </label>

             <button className="text-[#0F172A]">
                Forgot Password?
              </button>

            </div>
            <button
className="
w-full
bg-[#0F172A]
hover:bg-[#1E293B]
text-white
py-4
rounded-xl
font-semibold
shadow-lg
hover:scale-105
transition
duration-300
"
>
Login
</button>

            <div className="text-center my-5 text-gray-400">
              OR
            </div>
            <button
  className="
  w-full
  border
  border-gray-200
  py-4
  rounded-xl
  flex
  justify-center
  items-center
  gap-3
  hover:bg-gray-50
  transition
  duration-300
  shadow-sm
  "
>
              <FcGoogle size={24} />
              Login with Google
            </button>
            
          </div>

        </div>

      </div>
      <div className="text-center text-gray-400 text-sm pb-5">
        © 2026 SEOLVIA Products. All rights reserved.
        </div>

    </div>
  );
}

export default App;