"use client";

import { useNotification } from "@/context/NotificationContext";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FiX } from "react-icons/fi";
import floatingIcon from "@/public/footer/Brandmark1.png";

export const Notifications = () => {
  const { notifications, removeNotification, pauseTimer, resumeTimer } =
    useNotification();

  return (
    <div className="fixed top-5 md:top-28 right-2 md:right-5 z-50 space-y-2 w-[300px]">
      <AnimatePresence>
        {notifications.map((n) => (
          <motion.div
            key={n.id}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => pauseTimer(n.id)}
            onMouseLeave={() => resumeTimer(n.id)}
            className={`relative rounded px-4 py-3 pr-10 shadow-lg text-white flex items-center justify-between 
            bg-gradient-to-r text-xs sm:text-sm md:text-base
            ${
              n.type === "success"
                ? "from-black to-green-500 bg-opacity-70 text-white"
                : n.type === "error"
                ? "from-black to-red-600 bg-opacity-80 text-white"
                : n.type === "info"
                ? "from-black to-sky-500 bg-opacity-80 text-white"
                : "from-black to-yellow-400 bg-opacity-80 text-white"
            }`}
          >
            <div className="flex flex-col items-center gap-1">
              <Image className="w-6 md:w-10" src={floatingIcon} alt="spoontoo" />
              <span
                className={`text-[9px] font-semibold uppercase tracking-wider ${
                  n.type === "success"
                    ? "text-green-500"
                    : n.type === "error"
                    ? "text-red-500"
                    : n.type === "info"
                    ? "text-sky-500"
                    : "text-yellow-500"
                }`}
              >
                {n.type === "success"
                  ? "Success"
                  : n.type === "error"
                  ? "Error"
                  : n.type === "info"
                  ? "Info"
                  : "Warning"}
              </span>
            </div>
            <span className="text-sm pl-3">{n.message}</span>
            <button
              onClick={() => removeNotification(n.id)}
              className="absolute top-2 right-2 text-white hover:text-gray-300"
            >
              <FiX size={18} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
