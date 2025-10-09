import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useDispatch } from "react-redux";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
import { useState } from "react";
import type { AppDispatch } from "@/redux/store";
import { register, type UserRole } from "@/redux/authSlice";

const formSchema = z
  .object({
    username: z.string().min(5).max(50),
    password: z.string().min(4),
    role: z.enum(["ishchi", "mijoz"]),
    confirmPassword: z.string().min(4),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Parollar mos emas",
    path: ["confirmPassword"],
  });

export default function Register() {
  const [role, setRole] = useState<UserRole>("ishchi");
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      role: "ishchi",
      confirmPassword: "",
    },
  });
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    const { username, password } = values;
    dispatch(register({ username, password, role: role }));
    form.reset();
    if (role === "ishchi") {
      navigate("/profile-form");
    } else {
      navigate("/auth/login");
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-50 py-2 md:py-10">
      <div className="w-full max-w-md px-4 mb-2">
        <h4 className="py-2 font-bold text-xl md:text-2xl md:font-semibold mb-2">
          Iltimos, quydagilardan birini tanlang!
        </h4>
        <div>
          <RadioGroup
            value={role}
            onValueChange={(value) => setRole(value as UserRole)}
            className="flex space-x-6 mb-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                className="cursor-pointer"
                value="ishchi"
                id="worker"
              />
              <Label htmlFor="worker">Ishchi</Label>
            </div>

            <div className="flex items-center space-x-2">
              <RadioGroupItem
                className="cursor-pointer"
                value="mijoz"
                id="client"
              />
              <Label htmlFor="client">Mijoz</Label>
            </div>
          </RadioGroup>

          {/* State qiymatini ko‘rish uchun */}
          <p className="text-sm text-gray-600 text-center">
            <span className="font-bold text-2xl">{role}</span>
          </p>
        </div>
      </div>
      {role === "mijoz" ? (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-8 w-full"
          >
            <Card className="mx-auto max-w-md ">
              <CardHeader>
                <CardTitle className="text-2xl">Ro'yxatdan o'tish</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ism</FormLabel>
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
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormDescription>Bu sizning parolingiz.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardContent className="grid gap-4">
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormDescription>Parolni tasdiqlang.</FormDescription>
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
                <Link to="/auth/login">
                  <p className="text-sm text-center mt-2">
                    Akkountingiz bormi? Kirish
                  </p>
                </Link>
              </CardFooter>
            </Card>
          </form>
        </Form>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-8 w-full"
          >
            <Card className="mx-auto width-full max-w-md">
              <CardHeader>
                <CardTitle className="text-2xl">Ro'yxatdan o'tish</CardTitle>
              </CardHeader>

              <CardContent>
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Login</FormLabel>
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
              <CardContent>
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormDescription>Bu sizning parolingiz.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardContent className="grid gap-4">
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormDescription>Parolni tasdiqlang.</FormDescription>
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
                <Link to="/auth/login">
                  <p className="text-sm text-center mt-2">
                    Akkountingiz bormi? Kirish
                  </p>
                </Link>
              </CardFooter>
            </Card>
          </form>
        </Form>
      )}
    </div>
  );
}
