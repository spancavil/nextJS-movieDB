import Layout from "../../components/layout";
import { useSession, signIn, signOut } from "next-auth/client"

const Data = () => {
    const { data: session } = useSession()
    console.log(session);
        if (session) {
          return (
            <Layout>
                Signed in as {session.user.email} <br />
                <h1>Aqui tiene sus datos ultrasecretos</h1>
                <button onClick={() => signOut()}>Sign out</button>
            </Layout>
          )
        }
        return (
          <Layout>
            <h1>Not signed in </h1>
          </Layout>
    )
}

export default Data
