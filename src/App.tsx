
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import HomePage from "@/components/HomePage";
import GalleryPage from "@/components/GalleryPage";
import ArticlesPage from "@/components/ArticlesPage";

type Page = "home" | "gallery" | "articles";

const App = () => {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  return (
    <TooltipProvider>
      <Toaster />
      <div className="min-h-screen bg-background">
        <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
        {currentPage === "home" && <HomePage onNavigate={setCurrentPage} />}
        {currentPage === "gallery" && <GalleryPage />}
        {currentPage === "articles" && <ArticlesPage />}
      </div>
    </TooltipProvider>
  );
};

export default App;
