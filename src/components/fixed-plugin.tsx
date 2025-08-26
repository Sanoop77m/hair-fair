"use client";
import { BookOpen, MessageSquare } from "lucide-react";
import { Button } from "@material-tailwind/react";

export function FixedPlugin() {
  return (
    <Button
      color="white"
      size="sm"
      className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50"
      onClick={() => window.open("https://wa.me/919048406969", "_blank")}
    >
      <MessageSquare className="w-6 h-6" />
      Chat with us
    </Button>
  );
}
