import { type GetServerSideProps } from "next";
import { getProviders, signIn } from "next-auth/react";

type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
};

type Providers = {
  [key: string]: Provider;
};

type SignInProps = {
  providers: Providers;
};

export default function SignIn({ providers }: SignInProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div>
          {Object.values(providers).map((provider) =>
            provider?.id === "google" ? (
              <button
                key={provider?.id as never}
                className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() =>
                  void signIn(provider?.id, {
                    callbackUrl: `${window.location.origin}`,
                  })
                }
              >
                Sign in with Google
              </button>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: { providers },
  };
};
