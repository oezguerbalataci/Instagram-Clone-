// @ts-nocheck
import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";

export default function SignIn({ providers }) {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center min-h-screen items-center text-center py-2 -mt-56 px-14">
        <img className="w-80" src="https://links.papareact.com/ocw" alt="" />
        <p>Educational purposes only. This is not the real app</p>

        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div className="" key={provider.name}>
              <button
                className="p-3 text-white bg-blue-500 rounded-lg "
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
