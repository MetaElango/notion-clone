"use client";

import { Button } from "@/components/ui/button";

import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";
import Image from "next/image";

const DocumentsPage = () => {
  const { user } = useUser();
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src={"/empty.png"}
        width="300"
        height="300"
        alt="empty documents image"
        className="dark:hidden"
      />

      <Image
        src={"/empty.png"}
        width="300"
        height="300"
        alt="empty documents image"
        className="hidden dark:block"
      />
      <h3>Welcome to {user?.firstName}&apos;s Jotion</h3>
      <Button>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
};

export default DocumentsPage;
