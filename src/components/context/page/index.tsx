import { MantineColor } from "@mantine/core";
import { createContext, useContext, useState } from "react";

type page = {
    pageLabel: string;
};

type PageContextType = page & {
    setPage: (v: page) => void;
};

const PageContext = createContext<PageContextType>({
    pageLabel: "",
    setPage() {},
});

export const PageProvider = ({ children }: { children: React.ReactNode }) => {
    const [page, setPage_] = useState<page>({
        pageLabel: "",
    });

    const setPage = (v: page) => {
        setPage_(v);
    };

    return (
        <PageContext.Provider
            value={{
                setPage,
                ...page,
            }}
        >
            {children}
        </PageContext.Provider>
    );
};

export const usePage = () => useContext(PageContext);
