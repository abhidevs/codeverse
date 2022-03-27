import Head from "next/head";

const Profile = () => {
  return (
    <div>
      <Head>
        <title>Profile | Codeverse</title>
        <meta name="description" content="Social media for programmers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>Profile page</div>
    </div>
  );
};

Profile.profileRoute = true;

export default Profile;
