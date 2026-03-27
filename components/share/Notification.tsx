import React from "react";
import { Icon } from "./Icon";
import { IconName } from "../utills/const";
type Props = {
  icon: IconName;
};
const Notification = ({ icon }: Props) => {
  return (
    <div className="relative">
      <span className="bg-Narangi p-1 absolute right-0 rounded-2xl"></span>
      <Icon name={icon} className="text-[#3692EB] text-2xl" />
    </div>
  );
};

export default Notification;
