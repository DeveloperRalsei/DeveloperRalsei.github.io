import { createContext, useState } from "react";
import { page } from "@/types";

type PageContextType = {
  page: page;
  setPage: (page: page, blogPageId?: number) => void;
  blogPageId: number;
};

export const PageContext = createContext<PageContextType>({
  page: "home",
  setPage: () => {},
  blogPageId: 0,
});

export const PageProvider = ({ children }: { children: React.ReactNode }) => {
  const [page, setCurrentPage] = useState<page>("home");
  const [blogPageId, setBlogPageId] = useState<number>(0);

  function setPage(page: "blog-post", blogPageId: number): void;

  function setPage(page: page): void;

  function setPage(page: page, blogPageId?: number): void {
    console.log(page, blogPageId);
    if (page !== "blog-post") {
      setCurrentPage(page);
      return;
    }

    setCurrentPage(page);
    setBlogPageId(blogPageId || -1);
  }

  return (
    <PageContext.Provider value={{ page, setPage, blogPageId }}>
      {children}
    </PageContext.Provider>
  );
};
