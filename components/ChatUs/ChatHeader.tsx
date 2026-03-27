import { Phone, Video, Minus, X } from "lucide-react";

const ChatHeader = ({ name }: { name: string }) => {
  return (
    <div className="flex items-center justify-between p-3 border-b border-gray-700">
      <div className="flex items-center gap-2">
        <img src="/avatar.png" className="w-8 h-8 rounded-full" />
        <p className="font-semibold">{name}</p>
      </div>

      <div className="flex items-center gap-3 text-purple-400">
        <Phone size={18} />
        <Video size={18} />
        <Minus size={18} />
        <X size={18} />
      </div>
    </div>
  );
};

export default ChatHeader;
