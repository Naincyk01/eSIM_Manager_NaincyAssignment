import { useState } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  const [bookingId, setBookingId] = useState("");
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (bookingId === "esim_12345678") {
      router.push("/dashboard");
    } else {
      alert("Invalid Booking ID");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-col items-center justify-center flex-grow p-6 sm:p-8">
        <div className="w-full max-w-md bg-white shadow-2xl rounded-xl p-6 sm:p-8">
          <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
            eSIM Manager
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="bookingId"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Enter Booking ID:
              </label>
              <input
                type="text"
                id="bookingId"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={bookingId}
                onChange={(e) => setBookingId(e.target.value)}
                placeholder="e.g., esim_12345678"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full cursor-pointer"
            >
            Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
