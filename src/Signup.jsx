import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5F0E8] flex items-center justify-center px-6 md:px-20">
      <div className="bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-2xl w-full max-w-2xl">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Create a new account</h2>
          <p className="text-gray-500">
            Sign up to access SEOLVIA Products inventory and production tools.
          </p>
        </div>

        <div className="grid gap-5">
          <input
            type="text"
            placeholder="Full name"
            className="w-full border p-4 rounded-xl"
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full border p-4 rounded-xl"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-4 rounded-xl"
          />
          <input
            type="password"
            placeholder="Confirm password"
            className="w-full border p-4 rounded-xl"
          />
        </div>

        <button
          onClick={() => navigate("/")}
          className="mt-8 w-full bg-[#0F172A] text-white py-4 rounded-xl hover:bg-[#1E293B] transition duration-300 font-semibold"
        >
          Create account
        </button>

        <div className="text-center mt-5 text-sm text-gray-500">
          Already have an account?{' '}
          <button
            onClick={() => navigate("/")}
            className="text-[#0F172A] font-semibold hover:underline"
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
