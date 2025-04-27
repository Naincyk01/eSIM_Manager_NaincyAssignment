import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const PlanCard = ({ plan, onSelect, isRecharging }) => {
  const features = [];
  if (plan.data) {
    features.push(`${plan.data} Data`);
  }
  if (plan.validity) {
    features.push(`${plan.validity} Validity`);
  }
  if (plan.speed) {
    features.push(`${plan.speed} Speed`);
  }
  if (plan.support) {
    features.push(`${plan.support} Support`);
  }
  if (plan.roaming) {
    features.push('Global Roaming');
  }

  return (
    <div className="bg-white h-auto sm:h-[340px] rounded-md shadow-md p-4 sm:p-6 border border-gray-300 hover:border-blue-500 flex flex-col">
      <h3 className="text-lg sm:text-xl font-semibold text-black mb-1 sm:mb-2">{plan.name}</h3>
      <p className="text-xl sm:text-2xl font-bold text-blue-500 mb-2 sm:mb-4">{plan.price}</p>
      <ul className="mb-2 sm:mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600 mb-1 sm:mb-2">
            <AiOutlineCheckCircle className="text-green-500 mr-2" size={16} />
            {feature}
          </li>
        ))}
      </ul>
      <button
        onClick={() => !isRecharging && onSelect(plan)}
        className={`bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mt-auto focus:outline-none focus:shadow-outline text-sm sm:text-base cursor-pointer ${isRecharging ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={isRecharging}
      >
        {isRecharging ? 'Recharging...' : 'Select Plan'}
      </button>
    </div>
  );
};

export default PlanCard;