import Head from "next/head";

const EditProfile = () => {
  return (
    <div>
      <Head>
        <title>Edit profile | Codeverse</title>
        <meta name="description" content="Social media for programmers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>Edit profile page</div>
    </div>
  );
};

EditProfile.profileRoute = true;

export default EditProfile;
