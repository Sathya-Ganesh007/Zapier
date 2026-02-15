import { Button } from "@/components/ui/button";
import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth/auth-button";
import { Hero } from "@/components/home/hero";
import { ThemeSwitcher } from "@/components/layout/theme-switcher";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
            <div className="flex gap-5 items-center font-semibold">
              <Link href={"/"}>Zapier Clone</Link>
            </div>
            {!hasEnvVars ? (
              <EnvVarWarning />
            ) : (
              <Suspense>
                <AuthButton />
              </Suspense>
            )}
          </div>
        </nav>

        {/* Action Button Section */}
        <div className="w-full max-w-5xl px-5 pt-8 flex justify-center">
          <Button 
            asChild
            className="group relative flex items-center gap-3 h-14 px-10 text-lg font-bold bg-[#ff4f00] hover:bg-[#e64600] text-white transition-all duration-300 transform hover:scale-105 overflow-hidden"
          >
            <Link href="/dashboard">
              <>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
                Create New Zap
              </>
            </Link>
          </Button>
        </div>

        <div className="flex-1 flex flex-col gap-20 max-w-5xl p-5">
          <Hero />
          <main className="flex-1 flex flex-col gap-6 px-4">
            
          </main>
        </div>

        <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
          <p>
            Powered by{" "}
            <a
              href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
              target="_blank"
              className="font-bold hover:underline"
              rel="noreferrer"
            >
              Supabase
            </a>
          </p>
          <ThemeSwitcher />
        </footer>
      </div>
    </main>
  );
}
