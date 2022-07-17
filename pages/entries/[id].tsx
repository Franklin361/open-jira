import { NextPage, GetServerSideProps } from "next"
import { MainLayout, SingleEntryContent, FormSingleEntry, LoadingSingleEntry } from "../../components"
import { getEntryById } from "../../database";
import { useSingleEntryOperation } from "../../hooks"
import { Entry } from '../../interfaces';

const SingleEntry: NextPage<Entry> = (entry) => {

    const { form, isLoading, messageLoading, handleDelete, ...props } = useSingleEntryOperation(entry)

    return (
        <MainLayout navTitle="Update Post" title={`Open Jira | ${form.content.slice(0, 12).toString()} ...`} >
            <section className="lg:max-w-4xl max-w-lg mx-auto w-full grid lg:grid-cols-2 grid-cols-1 gap-5 my-10">
                <SingleEntryContent
                    content={form.content}
                    handleDelete={handleDelete}
                    isLoading={isLoading}
                />

                <FormSingleEntry
                    form={form}
                    isLoading={isLoading}
                    {...props}
                />

                <LoadingSingleEntry
                    isLoading={isLoading}
                    messageLoading={messageLoading}
                />
            </section>
        </MainLayout >
    )
}

export default SingleEntry



export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const entry = await getEntryById(query.id as string)

    if (!entry) return {
        redirect: {
            destination: '/',
            permanent: false
        }
    }

    return {
        props: {
            ...entry
        }
    }
}
