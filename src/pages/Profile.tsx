import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Phone, Mail, Clock } from "lucide-react";

type ServicePackage = {
  title: string;
  price?: string; // e.g. "30$/hour" or "200 000 UZS"
  description?: string;
};

export type Profile = {
  id?: string;
  name: string;
  company?: string;
  avatarUrl?: string;
  serviceType: string; // e.g. "Usta", "Haydovchi", "IT"
  experienceYears?: number;
  portfolio?: string[]; // image URLs
  packages?: ServicePackage[];
  location?: string; // shahar/hudud
  contacts: {
    phone?: string;
    telegram?: string;
    email?: string;
  };
  workingHours?: string; // e.g. "Dushanba—Juma 09:00–18:00"
};

// Small utility for rendering contact buttons
function ContactItem({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href?: string;
}) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm hover:bg-muted"
      >
        {icon}
        <span className="truncate">{label}</span>
      </a>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm text-muted-foreground">
      {icon}
      <span className="truncate">{label}</span>
    </div>
  );
}

export default function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 p-6">
        {/* Left column: avatar + basic info */}
        <div className="flex-shrink-0 flex items-center md:items-start md:flex-col gap-4 md:w-56">
          <Avatar className="w-28 h-28">
            {profile.avatarUrl ? (
              <AvatarImage
                src={profile.avatarUrl}
                alt={`${profile.name} avatar`}
              />
            ) : (
              <AvatarFallback>
                {profile.name.slice(0, 1).toUpperCase()}
              </AvatarFallback>
            )}
          </Avatar>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold leading-tight">
              {profile.name}
            </h3>
            {profile.company && (
              <p className="text-sm text-muted-foreground">{profile.company}</p>
            )}
            <div className="mt-2 flex flex-wrap gap-2 justify-center md:justify-start">
              <Badge variant="outline" className="capitalize">
                {profile.serviceType}
              </Badge>
              {typeof profile.experienceYears === "number" && (
                <Badge variant="outline">
                  {profile.experienceYears} yil tajriba
                </Badge>
              )}
            </div>
          </div>

          <div className="mt-3 w-full md:w-auto">
            <Button className="w-full md:w-auto">Kontaktga yozish</Button>
          </div>
        </div>

        {/* Right column: details */}
        <div className="flex-1">
          <CardHeader className="p-0 mb-2">
            <CardTitle className="text-base">Xizmat tafsilotlari</CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              {profile.serviceType} uchun to‘liq ma’lumotlar
            </CardDescription>
          </CardHeader>

          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Contacts & Location */}
              <div className="space-y-3">
                <Label className="text-sm">Aloqa</Label>
                <div className="flex flex-col gap-2">
                  {profile.contacts.phone && (
                    <ContactItem
                      icon={<Phone size={16} />}
                      label={profile.contacts.phone}
                      href={`tel:${profile.contacts.phone}`}
                    />
                  )}

                  {profile.contacts.telegram && (
                    <ContactItem
                      icon={<Phone size={16} />}
                      label={`Telegram: ${profile.contacts.telegram}`}
                      href={`https://t.me/${profile.contacts.telegram.replace(
                        "@",
                        ""
                      )}`}
                    />
                  )}

                  {profile.contacts.email && (
                    <ContactItem
                      icon={<Mail size={16} />}
                      label={profile.contacts.email}
                      href={`mailto:${profile.contacts.email}`}
                    />
                  )}

                  {profile.location && (
                    <div className="mt-1 inline-flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin size={14} />
                      <span>{profile.location}</span>
                    </div>
                  )}

                  {profile.workingHours && (
                    <div className="mt-1 inline-flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock size={14} />
                      <span>{profile.workingHours}</span>
                    </div>
                  )}
                </div>

                <Separator />

                {/* Packages */}
                <div>
                  <Label className="text-sm">Xizmat paketlari</Label>
                  <div className="mt-2 flex flex-col gap-2">
                    {profile.packages && profile.packages.length > 0 ? (
                      profile.packages.map((p, idx) => (
                        <div key={idx} className="border rounded-md p-3">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <div className="font-medium">{p.title}</div>
                              {p.description && (
                                <div className="text-sm text-muted-foreground mt-1">
                                  {p.description}
                                </div>
                              )}
                            </div>
                            {p.price && (
                              <div className="font-semibold text-sm">
                                {p.price}
                              </div>
                            )}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-sm text-muted-foreground">
                        Narx yoki paketlar kiritilmagan.
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Portfolio */}
              <div>
                <Label className="text-sm">Portfolio / Misollar</Label>
                <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {profile.portfolio && profile.portfolio.length > 0 ? (
                    profile.portfolio.map((src, i) => (
                      <figure
                        key={i}
                        className="overflow-hidden rounded-md bg-muted"
                      >
                        <img
                          src={src}
                          alt={`portfolio-${i}`}
                          className="object-cover w-full h-24 sm:h-20"
                        />
                      </figure>
                    ))
                  ) : (
                    <div className="text-sm text-muted-foreground">
                      Portfolio mavjud emas.
                    </div>
                  )}
                </div>

                <div className="mt-3">
                  <Button variant="ghost">Batafsil portfolio</Button>
                </div>
              </div>
            </div>

            <Separator className="my-4" />

            <div className="flex items-center justify-between gap-4">
              <div className="text-sm text-muted-foreground">
                <Calendar size={14} className="inline-block mr-2" />
                So‘rov yuborish uchun mavjud vaqtingizni belgilang.
              </div>

              <div className="flex items-center gap-2">
                <Button variant="outline">Xizmatni so‘rash</Button>
                <Button>Telefon orqali qo‘ng‘iroq</Button>
              </div>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}

/*
Usage example:

import ProfileCard, { Profile } from "./ProfileCard";

const demo: Profile = {
  name: "Akbar Xolidov",
  company: "Akbar Usta",
  serviceType: "Usta",
  experienceYears: 8,
  portfolio: ["/images/p1.jpg", "/images/p2.jpg"],
  packages: [
    { title: "Asosiy ta'mirlash", price: "200 000 UZS", description: "Xona ta'miri - shift, devorlar." },
    { title: "Tez xizmat", price: "300 000 UZS", description: "24 soat ichida bajarish." },
  ],
  location: "Buxoro viloyati, G'ijduvon",
  contacts: { phone: "+998901234567", telegram: "akbar_usta", email: "akbar@example.uz" },
  workingHours: "Dushanba–Juma 09:00–18:00",
};

<ProfileCard profile={demo} />
*/
