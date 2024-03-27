import { NextPage } from "next";
import { useGetExpenses, useNoSsr } from "../hooks";

const Page: NextPage = () => {
    const { data, isLoading } = useGetExpenses();
    const noSsr = useNoSsr();

    return noSsr(
        <div style={{ whiteSpace: "pre" }}>
            {/**
             * TODO
             * @description Fill in here.
            */}
            {JSON.stringify(data ?? {}, null, 4)}
        </div>
    );
};

export default Page;