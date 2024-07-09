"use client";
import HomeNav from "@/src/components/home/aside";
import HomeContent from "@/src/components/home/content";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/src/components/ui/resizable";

const Home = () => {
  return (
    <ResizablePanelGroup direction="horizontal" className="w-full h-full">
      <ResizablePanel minSize={5} maxSize={20} defaultSize={20}>
        <HomeNav />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={80}>
        <HomeContent />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Home;
