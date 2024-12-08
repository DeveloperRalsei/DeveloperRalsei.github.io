import { PageContext } from "@/components/context/PageContext";
import { useContext } from "react";

function usePage() {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("usePage must be used within a PageProvider");
  }
  return context;
}

export default usePage;
