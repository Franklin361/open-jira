import type { NextPage } from "next";
import { ColumnGrid, Form, MainLayout } from "../components";


const Home: NextPage = () => {
  return (
    <MainLayout>
      <main className="flex gap-5 p-5 h-[85vh]">
        <ColumnGrid status="pending" children={<Form />} />
        <ColumnGrid status="progress" />
        <ColumnGrid status="completed" />
      </main>
    </MainLayout>
  )
};

export default Home;
