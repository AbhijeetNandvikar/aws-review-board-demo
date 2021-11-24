import type { NextPageContext } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/client";
import Link from "next/link";
import styles from "../styles/Home.module.css";

interface HomeProps {
  session: Session;
}

const Home = ({ session }: HomeProps) => {
  return (
    <div className={styles.container}>
      {session ? (
        <div className="m-4 bg-blue-400 rounded p-3">
          <h3> User Info</h3>
          {"Name:" + session.user?.name}
          <br />
          {"Email:" + session.user?.email}
        </div>
      ) : (
        <Link href="/auth">
          <a>Click here to SignIn</a>
        </Link>
      )}
    </div>
  );
};

export const getServerSideProps = async (context: NextPageContext) => {
  return {
    props: {
      session: await getSession(context),
    },
  };
};

export default Home;
