import {
  Tag,
  LucideHome,
  Plane,
  BookmarkCheck,
  Users
} from "lucide-react";

export const navLinks = [
  {
    url: "/",
    icon: <LucideHome />,
    label: "Trang chủ",
  },
  {
    url: "/collections",
    icon: <Plane />,
    label: "Tour chủ đề",
  },
  {
    url: "/products",
    icon: <Tag />,
    label: "Tour",
  },
  {
    url: "/orders",
    icon: <BookmarkCheck />,
    label: "Tour đã đặt",
  },
  {
    url: "/customers",
    icon: <Users />,
    label: "Khách hàng",
  },
];
