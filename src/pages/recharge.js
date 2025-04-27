import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import esimData from "../data/esimData.json";
import PlanCard from "../components/PlanCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { GrCube } from "react-icons/gr";

const RechargeSuccessMessage = ({ message }) => (
  <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-blue-700 text-white p-4 rounded-md shadow-lg z-50 text-center">
    <p className="mb-2">{message}</p>
    <p className="text-sm">Redirecting to home...</p>
  </div>
);

export default function Recharge() {
  const router = useRouter();
  const { availablePlans } = esimData;
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [rechargingPlan, setRechargingPlan] = useState(null);

  const handleBackToDashboard = () => {
    router.push("/dashboard");
  };

  const simulateRecharge = (planName) => {
    setRechargingPlan(planName);
    setTimeout(() => {
      setRechargingPlan(null);
      setSuccessMessage(
        `Recharge successful! You have selected the ${planName} plan.`
      );
      setShowSuccessMessage(true);
    }, 1500);

    setTimeout(() => {
      router.push("/");
    }, 4000);
  };

  const handleSelectPlan = (plan) => {
    simulateRecharge(plan.name);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div
        className={`flex justify-center flex-grow p-4 sm:p-6 ${
          showSuccessMessage || rechargingPlan
            ? "opacity-60 pointer-events-none"
            : ""
        }`}
      >
        <div className="max-w-screen-lg w-full flex flex-col gap-y-4 sm:gap-y-6 p-2">
          <button
            onClick={handleBackToDashboard}
            className="flex items-center text-blue-500 hover:text-blue-700 mb-2 sm:mb-4 cursor-pointer"
          >
            <AiOutlineArrowLeft className="w-4 h-4 mr-2 sm:w-5 sm:h-5" />
            Back to Dashboard
          </button>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 sm:mb-4">
            Manage SIM
          </h1>

          {/* Current Plan */}
          <div className="bg-white rounded-xl shadow-md mb-4 sm:mb-6 p-4 sm:p-6 relative">
            <div className="flex justify-between items-start mb-2 sm:mb-4">
              <h2 className="text-lg sm:text-xl font-semibold text-black">
                Current Plan
              </h2>
              <GrCube
                className="absolute top-3 right-3 sm:top-4 sm:right-4 text-blue-500"
                size={20}
              />
            </div>

            <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-4 gap-y-1 sm:gap-y-2 text-gray-700 text-sm ">
              <div className="flex justify-between md:block">
                <div className="w-1/2 md:w-full">Plan Name</div>
                <div className="w-1/2 md:w-full text-black font-semibold text-base sm:text-lg md:text-xl">
                  Premium Monthly
                </div>
              </div>

              <div className="flex justify-between md:block">
                <div className="w-1/2 md:w-full">Price</div>
                <div className="w-1/2 md:w-full text-black font-semibold text-base sm:text-lg md:text-xl">
                  $29.99/month
                </div>
              </div>

              <div className="flex justify-between md:block">
                <div className="w-1/2 md:w-full">Validity</div>
                <div className="w-1/2 md:w-full text-black font-semibold text-base sm:text-lg md:text-xl">
                  3/1/2024 - 3/31/2024
                </div>
              </div>

              <div className="flex justify-between md:block">
                <div className="w-1/2 md:w-full">Remaining Data</div>
                <div className="w-1/2 md:w-full text-black font-semibold text-base sm:text-lg md:text-xl">
                  5.8 GB
                </div>
              </div>
            </div>
          </div>

          {/* Available Plans */}
          <div className=" bg-white rounded-xl p-4 sm:p-6 shadow-md">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">
              Available Plans
            </h2>
            <div className="flex flex-col md:flex-row gap-2 sm:gap-4">
              {availablePlans.map((plan) => (
                <div key={plan.name} className="w-full md:w-1/3">
                  <PlanCard
                    plan={plan}
                    onSelect={handleSelectPlan}
                    isRecharging={rechargingPlan === plan.name}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Recharge Success Message */}
          {showSuccessMessage && (
            <RechargeSuccessMessage message={successMessage} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
