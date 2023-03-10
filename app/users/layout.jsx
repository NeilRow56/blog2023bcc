import UserList from "@/components/UsersComponent";

const UsersLayout = async ({ children }) => {
  return (
    <section className="flex">
      <aside className="w-1/4">
        <UserList />
      </aside>
      <main>{children}</main>
    </section>
  );
};

export default UsersLayout;
