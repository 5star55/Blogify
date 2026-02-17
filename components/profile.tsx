import { User } from "@/lib/blog-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import getNameInitials from "@/lib/utils";

type ProfileProps = {
  user?: User | null;
};

export default function Profile({ user }: ProfileProps) {
  const displayName = user?.name ?? "";
  const displayUsername = user?.username ?? "";

  return (
    <div className="flex gap-5">
      <Avatar>
        <AvatarImage src={user?.avatar ?? ""} />
        <AvatarFallback>{getNameInitials(displayName)}</AvatarFallback>
      </Avatar>
      {user ? `${displayName} (@${displayUsername})` : "Unknown author"}
    </div>
  );
}
