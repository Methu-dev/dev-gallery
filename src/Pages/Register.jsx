import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext/AuthProvider";
import { Link } from "react-router-dom";


const Register = () => {
    const {createUser} = useContext(AuthContext);
    const handleSignUp = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      console.log(name,email, password);

      createUser(email, password)
      .then(result =>{
        const user = result.user;
        console.log(user)
      })
      .catch(error => console.log(error))
    };
  return (
    <div class="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
  <form onSubmit={handleSignUp} class="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 space-y-5">
    <h2 class="text-2xl font-semibold text-center text-gray-800 dark:text-white">Creat Your Account</h2>
    
    <div>
      <label for="Name" class="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Your Name</label>
      <input type="text" id="name" class="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="enter your name" required />
    </div>
    <div>
      <label for="email" class="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Your email</label>
      <input type="email" id="email" class="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="name@example.com" required />
    </div>
    
    <div>
      <label for="password" class="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
      <input type="password" id="password" class="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required />
    </div>
   
    
    <button type="submit" class="w-full py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800">
      Register Now
    </button>
    <p className="my-4 text-center">
              Already have an account?{" "}
              <Link className="text-[#FF3811]" to="/">
                Login
              </Link>
            </p>
  </form>
  
</div>
  )
}

export default Register