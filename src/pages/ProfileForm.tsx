import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDispatch } from "react-redux";
import { addWorkerInfo } from "@/redux/authSlice";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

// --- 1. Validation sxemasi ---
const formSchema = z.object({
  fullName: z.string().min(3, "Ism kamida 3 ta belgi bo‘lishi kerak"),
  serviceType: z
    .string()
    .min(3, "Xizmat turi kamida 3 ta belgi bo‘lishi kerak"),
  experienceYears: z
    .string()
    .min(1, "Tajribani yozishda kamida 1 ta belgi bo‘lishi kerak"),
  price: z.string().min(3, "Narxni kiriting"),
  location: z.string().min(3, "Hududni kiriting"),
  phone: z.string().min(9, "Telefon raqamini to‘liq kiriting"),
  telegram: z.string().min(2, "Telegram foydalanuvchi nomini kiriting"),
});

// --- 2. Form komponenti ---
export default function ProfileForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // useForm() ni zod bilan bog‘lash
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      serviceType: "",
      experienceYears: "",
      price: "",
      location: "",
      phone: "",
      telegram: "",
    },
  });

  // 3. Submit funksiyasi
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    const {
      experienceYears,
      fullName,
      location,
      phone,
      price,
      serviceType,
      telegram,
    } = data;
    dispatch(
      addWorkerInfo({
        experienceYears,
        fullName,
        location,
        phone,
        price,
        serviceType,
        telegram,
      })
    );
    navigate("/");
  };

  // --- 4. JSX ---
  return (
    <Card className="w-full max-w-3xl mx-auto my-[4rem]">
      <CardHeader>
        <CardTitle>Xizmat ko‘rsatuvchi ma’lumotlarini kiritish</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Ism / Familiya */}
          <div className="space-y-2">
            <Label htmlFor="fullName">Ism / Familiya</Label>
            <Input
              id="fullName"
              placeholder="Akbar Xolidov"
              {...register("fullName")}
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName.message}</p>
            )}
          </div>

          {/* Xizmat turi */}
          <div className="space-y-2">
            <Label htmlFor="serviceType">Xizmat turi</Label>
            <Input
              id="serviceType"
              placeholder="Usta, haydovchi, IT..."
              {...register("serviceType")}
            />
            {errors.serviceType && (
              <p className="text-red-500 text-sm">
                {errors.serviceType.message}
              </p>
            )}
          </div>

          {/* Tajriba */}
          <div className="space-y-2 md:col-span-1">
            <Label htmlFor="experienceYears">Tajriba (yil)</Label>
            <Input
              id="experienceYears"
              type="number"
              placeholder="8"
              {...register("experienceYears")}
            />
            {errors.experienceYears && (
              <p className="text-red-500 text-sm">
                {errors.experienceYears.message}
              </p>
            )}
          </div>

          {/* Narx */}
          <div className="space-y-2 md:col-span-1">
            <Label htmlFor="price">Kunlik xizmat haqqi</Label>
            <Input
              id="price"
              placeholder="Asosiy ta'mirlash - 200 000 UZS"
              {...register("price")}
            />
            {errors.price && (
              <p className="text-red-500 text-sm">{errors.price.message}</p>
            )}
          </div>

          {/* Hudud */}
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="location">Hudud</Label>
            <Input
              id="location"
              placeholder="Buxoro viloyati, G‘ijduvon"
              {...register("location")}
            />
            {errors.location && (
              <p className="text-red-500 text-sm">{errors.location.message}</p>
            )}
          </div>

          {/* Telefon */}
          <div className="space-y-2">
            <Label htmlFor="phone">Telefon</Label>
            <Input
              id="phone"
              placeholder="+998901234567"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          {/* Telegram */}
          <div className="space-y-2">
            <Label htmlFor="telegram">Telegram</Label>
            <Input
              id="telegram"
              placeholder="@username"
              {...register("telegram")}
            />
            {errors.telegram && (
              <p className="text-red-500 text-sm">{errors.telegram.message}</p>
            )}
          </div>

          <div className="md:col-span-2 flex justify-end">
            <Button type="submit">Saqlash</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
