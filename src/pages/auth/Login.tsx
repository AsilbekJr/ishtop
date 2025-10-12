import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Link, useNavigate } from "react-router-dom";
import { login } from "@/redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/redux/store";
import { useEffect } from "react";
const formSchema = z.object({
  username: z.string().min(5).max(50),
  password: z.string().min(4),
});
type FormType = z.infer<typeof formSchema>;

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { error, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleSubmit = (values: FormType) => {
    const { username, password } = values;
    dispatch(login({ username, password }));
    form.reset();
  };
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-8 px-4 w-full"
        >
          <Card className="mx-auto max-w-md">
            <CardHeader>
              <CardTitle className="text-2xl">Ro'yxatdan o'tish</CardTitle>
              <CardDescription>
                Login va parol orqali tizimga kirish mumkin.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Kirish</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormDescription>
                      Bu sizning login nomingiz.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardContent className="grid gap-4">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormDescription>Bu sizning parolingiz.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>

            <CardFooter className="flex flex-col gap-2">
              <Button
                type="submit"
                className="cursor-pointer w-full bg-[#155dfd] hover:bg-blue-700"
              >
                Submit
              </Button>
              <Link to="/auth/register">
                <p className="text-sm text-center mt-2">
                  Ro'yxatdan o'tganmisiz? Ro'yxatdan o'tish
                </p>
              </Link>
            </CardFooter>
          </Card>
        </form>
        {error && <p className="text-red-500">{error}</p>}
      </Form>
    </div>
  );
}
