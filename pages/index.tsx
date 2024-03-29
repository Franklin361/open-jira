import type { NextPage } from "next";

import { Alert, ColumnGrid, Form, MainLayout } from "../components";
import { useInitData } from "../hooks";


const Home: NextPage = () => {

  const existErrorInDb = useInitData()


  return (
    <MainLayout>
      <main className="grid lg:grid-cols-3 lg:grid-rows-1 md:grid-rows-2 md:grid-cols-2 grid-rows-3 grid-cols-1 lg:gap-5 gap-14 p-5 lg:h-[85vh] h-auto">
        <ColumnGrid status="pending"><Form existErrorInDb={existErrorInDb} /></ColumnGrid>
        <ColumnGrid status="progress" />
        <ColumnGrid status="completed" />
        {
          existErrorInDb && <Alert />
        }
      </main>
    </MainLayout>
  )
};

export default Home;
