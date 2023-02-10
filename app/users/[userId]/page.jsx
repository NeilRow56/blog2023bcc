import { getUserById } from "../../../lib/prisma/users";
import User from "@/components/UserComponent";

const Page = async ({ params }) => {
  const { user } = await getUserById(params.userId);

  return <User user={user} />;
};

export default Page;
