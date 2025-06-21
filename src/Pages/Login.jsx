import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };
  return (
    <div class="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <form
        onSubmit={handleLogin}
        class="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 space-y-5"
      >
        <h2 class="text-2xl font-semibold text-center text-gray-800 dark:text-white">
          Sing In Your Account
        </h2>

        <div>
          <label
            for="email"
            class="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            class="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="name@example.com"
            required
          />
        </div>

        <div>
          <label
            for="password"
            class="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            class="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>

        <button
          type="submit"
          class="w-full py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
        >
          Sing In
        </button>
        <p className="my-4 text-center">
          new to car doctors?{" "}
          <Link className="text-[#FF3811]" to="/register">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
