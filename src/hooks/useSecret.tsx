import { SecretContext } from "@/components/context/secret/SecretContext";
import { useContext } from "react";

function useSecret() {
  const context = useContext(SecretContext);

  if (!context) {
    throw new Error("useSecret must be used within a SecretProvider");
  }
  return context;
}

export default useSecret;
