import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const SignInForm = () => {
    return (
        <>
            <div className="text-center">
                <h1 className="text-2xl font-semibold">
                    Sign In
                </h1>

                <p className="text-sm text-muted-foreground">
                    Enter your email and password to sign in
                </p>
            </div>

            <form>
                <div className="grid gap-2 mt-2">
                    <div className="mb-3">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            placeholder="name@example.com"
                            type="email"
                            autoComplete="email"
                        />
                    </div>
                    <div className="mb-3">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            placeholder="******"
                            type="password"
                        />
                    </div>

                    <Link
                        href="/forgot-password"
                        className="underline text-muted-foreground underline-offset-4 hover:text-primary mb-6 text-sm text-end"
                    >Forgot password?</Link>

                    <Button
                        type="submit">
                        Sign In
                    </Button>

                </div>
            </form>

            <p className="text-center text-sm text-muted-foreground">
                You dont have an account?{"  "}
                <Link
                        href="/sign-up"
                        className="underline underline-offset-4 hover:text-primary"
                    >Sign up?</Link>
            </p>

        </>
    );
}

export default SignInForm;