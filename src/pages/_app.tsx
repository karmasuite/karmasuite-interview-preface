import type { AppProps } from "next/app";
import type { FC } from "react";
import { QueryProvider } from "../components";

const App: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <QueryProvider>
            <Component {...pageProps} />
        </QueryProvider>
    );
};

export default App;
