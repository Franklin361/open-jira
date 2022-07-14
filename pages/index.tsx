import type { NextPage } from "next";
import { MainLayout } from "../components";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <main className="flex gap-5 p-5 h-[85vh]">
        <div className="flex-1 border border-neutral-content/50 p-2 rounded-lg overflow-y-scroll">Item</div>
        <div className="flex-1 border border-neutral-content/50 p-2 rounded-lg overflow-y-scroll">Item</div>
        <div className="flex-1 border border-neutral-content/50 p-2 rounded-lg overflow-y-scroll">Item</div>
      </main>
    </MainLayout>
  )
};

export default Home;

