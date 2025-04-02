import { Form, useParams, redirect, useNavigate } from "react-router-dom";
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
export const LoginPage = () => {
  const navigate = useNavigate();
  const { signup } = useParams();
  return (
    <div className="flex justify-center items-center bg-gray-700 h-screen">
      <div
        className="container bg-white rounded-lg p-8 shadow-lg"
        style={{ width: "500px", height: "500px" }}
      >
        <h3 className="text-center text-xl font-bold mb-4 text-gray-800">
          Login to proceed
        </h3>
        <Form method="post">
          {signup == "true" && (
            <div className="mb-4">
              <label
                htmlFor="UserName"
                className="block text-sm font-medium text-gray-700"
              >
                <b>User Name</b>
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                id="UserName"
                name="name"
                placeholder="Enter your name"
              />
            </div>
          )}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              <b>Email</b>
            </label>
            <input
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              id="UserEmail"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              <b>Password</b>
            </label>
            <input
              type="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              id="UserPassword"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            {signup === "true" ? "Register!" : "Login"}
          </button>
        </Form>
        {signup === "false" && (
          <p className="text-sm text-gray-600 mt-4 text-center">
            Forgot Password?
          </p>
        )}
        {signup === "true" ? (
          <p className="text-sm text-gray-600 mt-4 text-center">
            Already have an account?{" "}
            <span
              onClick={() => {
                navigate("/login/false");
              }}
              className="text-blue-500 cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>
        ) : (
          <p className="text-sm text-gray-600 mt-4 text-center">
            Don't have an account?{" "}
            <span
              onClick={() => {
                navigate("/signup/true");
              }}
              className="text-blue-500 cursor-pointer hover:underline"
            >
              Signup
            </span>
          </p>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}
export const postLoginAction = async (data) => {
  try {
    const formData = await data.request.formData();
    const userData = Object.fromEntries(formData);
    console.log("Post Login called for this ", userData);
    const response = await axios.post("http://localhost:8000/login", userData, {
      headers: { "Content-Type": "application/json" },withCredentials:true,
    });
    const result = response.data;
    if (result.success) {
      console.log("login result", response.data);
      toast.success("Login successful!");
      return redirect('/Home');
    } else {
      toast.error(result.message);
    }
  } catch (error) {
    console.log("error in post login action", error);
    toast.error(error.message);
  }
};

export const postRegisterAction = async (data) => {
  try {
    const formData = await data.request.formData();
    const userData = Object.fromEntries(formData);
   const response =  await fetch("http://localhost:8000/register", {
      method: "POST",
      withCredentials:"include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    const result = await response.json();
    console.log(result.success);
    console.log(response.cookies);
    if(result.success){
      toast.success("Register successful!");
      return redirect('/login/false');
    }else{
      toast.error('Login Failed');
    } 
  } catch (error) {
    console.log("error in post register action", error);
    toast.error("some error occured");
  }
};
