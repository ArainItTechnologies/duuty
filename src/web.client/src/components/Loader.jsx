import React from "react";
import { useAppState } from "../hooks/Hooks";

const Loader = () => {
  const { isLoading } = useAppState();

    return isLoading && (
      <div className="fixed grid place-content-center inset-0 bg-black/50 backdrop-blur-sm h-screen w-screen z-[999]">
        <div className="h-12 w-12 bg-transparent border-2 border-purple-600 border-t-0 border-r-0 animate-spin rounded-full" />
      </div>
    );
}

export default Loader;
