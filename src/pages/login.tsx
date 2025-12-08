import Head from "next/head";
import { LoginForm } from "@/components/login/login-form";
import { LoginHeader } from "@/components/login/login-header";
import { LoginHero } from "@/components/login/login-hero";
import { LoginActions } from "@/components/login/login-actions";

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Nortus | Login</title>
      </Head>
      <main className="min-h-screen max-w-screen flex bg-background text-foreground px-16 py-6 gap-16">
      <section className="flex flex-col w-1/2">
        <LoginHeader />
        <LoginForm />
      </section>

      <section className="relative flex-1 w-1/2 aspect-square bg-secondary flex items-center justify-center rounded-4xl overflow-hidden">
        <LoginActions />
        <LoginHero />
      </section>
    </main>
    </>
  );
}
