import Head from "next/head";
import Container from "../components/Container";
import fetch from "isomorphic-fetch";
import Users from "../components/users";


const Index = (props) => {
    return ( 
        <Container>
            <Head>
                <title>Home</title>
            </Head>
            <h1>Inicio</h1>
            <Users props={props.clientes}/>
        </Container>
    );
}


Index.getInitialProps = async ctcx => {
    //const res = await fetch('https://reqres.in/api/users');
    const res = await fetch('http://localhost:1337/api/clientes')
    const resJSON = await res.json();
    console.log(resJSON.data);
    return {clientes: resJSON.data}
}

export default Index;