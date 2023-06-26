import { type GetServerSideProps } from "next";
import { getProviders, signIn } from "next-auth/react";
import { type AppProps } from "next/app";

export default function SignIn({ providers }: [providers: AppProps]) {
  return (
    <>
      <h1>Sign in</h1>
      <div>
        {Object.values(providers).map((provider) => (
          <button
            key={provider.id}
            onClick={() =>
              void signIn(provider.id, {
                callbackUrl: `${window.location.origin}`,
              })
            }
          >
            `Sign in with ${provider.name}
          </button>
        ))}
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: { providers },
  };
};
