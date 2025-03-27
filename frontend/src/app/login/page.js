"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { usePostLoginMutation } from "@/hooks/api-hooks/useAuthQuery";
import { toast } from "react-toastify";
import Loader from "@/components/loader";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isPending } = usePostLoginMutation({
    onSuccess: (data) => {
      console.log("Login Successfull");
      toast.success(data.data.message ?? "Login Successfull");
    },
    onError: (error) => {
      toast.error(error.data.message);
    },
  });

  const onsubmit = async (data) => {
    console.log("data", data);
    mutate(data);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
          <Link href="/" className="text-2xl font-serif font-bold">
            Pencraft
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-serif font-bold">Welcome back</h1>
            <p className="text-gray-600">Sign in to access your account</p>
          </div>

          <div className="bg-white p-8 border border-gray-200 rounded-lg shadow-sm">
            <form onSubmit={handleSubmit(onsubmit)} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-xs ">
                      This field is required
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-gray-600 hover:text-black"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="w-full"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <span className="text-red-500 text-xs">
                      This field is required
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm font-normal">
                  Remember me
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full rounded-full bg-black text-white hover:bg-gray-800"
                disabled={isPending}
              >
                {isPending ? <Loader/> : 'Login'}
              </Button>
            </form>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="font-medium text-black hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-6">
        <div className="container px-4 mx-auto md:px-6">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <Link href="#" className="hover:text-gray-900 transition-colors">
              Help
            </Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
