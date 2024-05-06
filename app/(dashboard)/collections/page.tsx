"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";

import { columns } from "@/components/collections/CollectionColumns";
import { DataTable } from "@/components/custom ui/DataTable";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Loader from "@/components/custom ui/Loader";
import { UserButton } from "@clerk/nextjs";

const Collections = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [collections, setCollections] = useState([]);

  const getCollections = async () => {
    try {
      const res = await fetch("/api/collections", {
        method: "GET",
      });
      const data = await res.json();
      setCollections(data);
      setLoading(false);
    } catch (err) {
      console.log("[collections_GET]", err);
    }
  };

  useEffect(() => {
    getCollections();
  }, []);

  return loading ? <Loader /> : (
    <div className="px-8 py-10">
      <div className="flex items-center justify-between">
        <p className="text-heading2-bold">Tour chủ đề
        </p>
        <div className="float-right py-0"><UserButton /></div>
      </div>

      <Separator className="bg-grey-1 my-4" />
      <Button className="bg-blue-1 text-white" onClick={() => router.push("/collections/new")}>
        <Plus className="h-4 w-4 mr-2" />
        Tạo tour chủ đề
      </Button>
      <DataTable columns={columns} data={collections} searchKey="title" />
    </div>
  );
};

export default Collections;