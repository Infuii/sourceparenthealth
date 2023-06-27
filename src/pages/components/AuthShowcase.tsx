import { api } from "~/utils/api";

export default function AuthShowcase({ sessionData }) {
  const createUser = async () => {
    console.log("Creating user...");
    try {
      await api.user.createUser.useMutation({
        input: {
          name: sessionData?.user?.name,
          email: sessionData?.user?.email,
          image: sessionData?.user?.image,
        },
      });
      console.log("User created successfully!");
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4"></div>
  );
}
