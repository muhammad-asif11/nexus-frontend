import { PhoneOff } from "lucide-react";

const CallMessage = () => {
  return (
    <div className="flex justify-start">
      <div className="bg-gray-700 p-3 rounded-2xl w-[80%]">
        
        <div className="flex items-center gap-3">
          <div className="bg-red-500 p-2 rounded-full">
            <PhoneOff size={16} />
          </div>

          <div>
            <p className="font-semibold">Missed audio call</p>
            <p className="text-sm text-gray-400">5:01 PM</p>
          </div>
        </div>

        <button className="mt-3 w-full bg-gray-600 py-2 rounded-lg hover:bg-gray-500">
          Call back
        </button>
      </div>
    </div>
  );
};

export default CallMessage;