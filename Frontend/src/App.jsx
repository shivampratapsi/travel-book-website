import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { ToastContainer } from "react-toastify";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import HotelListContextProvider from "./store/hotelStore";
function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-blue-100">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

      <HotelListContextProvider>
        <Header />

        <main className="flex-1 container mx-auto px-4 py-6">
          <Outlet />
        </main>
      </HotelListContextProvider>

      <footer className="bg-blue-700 text-white text-center py-4 mt-auto shadow-md">
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="font-semibold">Travel Booking Website</span>. All rights reserved.
        </p>
      </footer>
    </div>
  );
}


export default App;
