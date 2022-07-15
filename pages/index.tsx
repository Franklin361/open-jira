import type { NextPage } from "next";
import { ColumnGrid, Form, MainLayout } from "../components";
import { useEffect } from 'react';
import { useEntryStore } from "../store";
import { refreshEntries } from "../utils";

const Home: NextPage = () => {
  // TODO: create a custom hook to initialize data
  const setEntries = useEntryStore(state => state.setEntries)

  useEffect(() => {
    refreshEntries(setEntries)
  }, [])


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
