// pages/dashboard.js
import React from "react";
import { useRouter } from "next/router";
import esimData from "../data/esimData.json";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UsageBar from "../components/UsageBar";
import { LuSignal } from "react-icons/lu";
import { TbActivityHeartbeat } from "react-icons/tb";

export default function Dashboard() {
  const router = useRouter();
  const { plan, usage, currentSession } = esimData;

  const handleManageSim = () => {
    router.push("/recharge");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <div className="flex justify-center p-4 sm:p-6">
        <div className="max-w-screen-lg w-full p-2 flex flex-col gap-y-4 sm:gap-y-6">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-black">
              Dashboard
            </h1>
            <button
              onClick={handleManageSim}
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm sm:text-base cursor-pointer"
            >
              Manage SIM
            </button>
          </div>

          {/* Data Usage Card */}
          <div className="bg-white flex flex-col rounded-lg shadow-xl p-4 sm:p-6 mb-4 relative gap-y-1">
            <div className="flex justify-between items-start">
              <h2 className="text-lg font-semibold text-black">Data Usage</h2>
              <LuSignal
                className="text-blue-500 absolute top-4 right-4 sm:top-6 sm:right-6"
                size={20}
              />
            </div>

            <p className="text-sm text-gray-600">{plan.name}</p>
            <div className="mt-2">
              <UsageBar used={usage.usedData} total={usage.totalData} />
              <div className="flex justify-between text-sm text-gray-600 mt-1">
                <span>{usage.usedData} </span>
                <span>{usage.totalData} </span>
              </div>
            </div>
          </div>

          {/* Remaining Data and Current Session Cards */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            {/* Remaining Data Card */}
            <div
              className="bg-white rounded-xl p-4 sm:p-6 w-full md:w-1/2 shadow-xl flex-grow"
              style={{ minHeight: "200px" }}
            >
              <div className="flex justify-between items-center mb-2 sm:mb-3">
                <h2 className="text-lg font-semibold text-gray-700">
                  Remaining Data
                </h2>
                <LuSignal className="text-blue-500" size={20} />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-black mb-1 sm:mb-2">
                {plan.remainingData}
              </p>
              <p className="text-sm text-gray-600 mb-2 sm:mb-3">
                Available for use
              </p>

              <div className="flex flex-col h-6 sm:h-8 justify-end mb-2 sm:mb-4">
                <div className="border-b border-gray-100"></div>
              </div>

              <div className="text-sm text-gray-600 space-y-1 sm:space-y-2">
                <div className="flex justify-between">
                  <div>Total Data:</div>
                  <div className="font-medium text-black">
                    {usage.totalData}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>Used Data:</div>
                  <div className="font-medium text-black">{usage.usedData}</div>
                </div>
                <div className="flex justify-between">
                  <div>SMS Total:</div>
                  <div className="font-medium text-black">{usage.smsTotal}</div>
                </div>
                <div className="flex justify-between">
                  <div>SMS Used:</div>
                  <div className="font-medium text-black ">{usage.smsUsed}</div>
                </div>
                <div className="flex justify-between">
                  <div>Voice Total:</div>
                  <div className="font-medium text-black">
                    {usage.voiceTotal}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>Voice Used:</div>
                  <div className="font-medium text-black">
                    {usage.voiceUsed}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>Valid From:</div>
                  <div className="font-medium text-black">{plan.validFrom}</div>
                </div>
                <div className="flex justify-between">
                  <div>Valid Until</div>
                  <div className="font-medium text-black">
                    {plan.validUntil}
                  </div>
                </div>
              </div>
            </div>

            {/* Current Session Card */}
            <div
              className="bg-white rounded-xl shadow-md p-4 sm:p-6 w-full md:w-1/2 flex-grow"
              style={{ minHeight: "200px" }}
            >
              <div className="flex justify-between items-center mb-2 sm:mb-3">
                <h2 className="text-lg font-semibold text-gray-700">
                  Current Session
                </h2>
                <TbActivityHeartbeat className="text-blue-500" size={24} />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-black mb-1 sm:mb-2">
                {currentSession.usageMB} MB
              </p>
              {/* <p className="text-sm text-gray-600">Last updated: {new Date(currentSession.started).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} {new Date(currentSession.started).toLocaleDateString()}</p> */}
              <p className="text-sm text-gray-600">
                Last updated:{" "}
                {new Date(currentSession.started)
                  .toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })
                  .toLowerCase()}{" "}
                {new Date(currentSession.started).toLocaleDateString()}
              </p>

              <div className="flex flex-col h-6 sm:h-8 justify-end mb-2 sm:mb-4">
                <div className="border-b border-gray-100"></div>
              </div>

              <div className="text-sm text-gray-600 space-y-1 sm:space-y-2">
                <div className="flex justify-between">
                  <div>Session ID:</div>
                  <div className="font-medium text-black">
                    {currentSession.sessionId}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>Started:</div>
                  <div className="font-medium text-black">
                    {new Date(currentSession.started).toLocaleDateString([], {
                      month: "numeric",
                      day: "numeric",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>Usage: </div>
                  <span className="font-medium text-black">
                    {Math.round(currentSession.usageMB / 1024)} MB
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
