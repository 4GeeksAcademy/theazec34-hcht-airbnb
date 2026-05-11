"use client";

import { useParams } from "next/navigation";
import { TopNav } from "@/components/TopNav";
import { RoomDetails } from "@/components/rooms/RoomDetails";

const RoomDetailPage = () => {
  const params = useParams<{ id: string }>();

  return (
    <>
      <TopNav />
      <RoomDetails id={params.id} />
    </>
  );
};

export default RoomDetailPage;
