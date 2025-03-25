import { createContext, useContext } from "react";
import { useLanyard, LanyardWebsocket } from "react-use-lanyard";

const StatusContext = createContext<LanyardWebsocket | null>(null);

export const StatusProvider = ({ children }: { children: React.ReactNode }) => {
    const lanyardData = useLanyard({
        userId: "718798893445283863",
        socket: true,
    });
    return (
        <StatusContext.Provider value={lanyardData}>
            {children}
        </StatusContext.Provider>
    );
};

export const useStatus = () => {
    const ctx = useContext(StatusContext);
    if (!ctx) {
        throw new Error("sigh... USE THIS FUCKIN PROVIDER STUPID GOAT");
    }
    return ctx;
};
