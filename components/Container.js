import Head from "next/head";
import Navigation from "./navitgation";

const Container = (props) => (
    <div>
        <Head>
            <title>Admon | Next.js</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/cerulean/bootstrap.min.css" integrity="sha384-3fdgwJw17Bi87e1QQ4fsLn4rUFqWw//KU0g8TvV6quvahISRewev6/EocKNuJmEw" crossorigin="anonymous"/>
        </Head>
        <Navigation/>
        <div className="container py-4">
            {props.children}
        </div>
    </div>
)

export default Container;