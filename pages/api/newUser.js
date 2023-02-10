import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  const { name, email, imageUrl } = req.body;
  try {
    await prisma.user.create({
      data: {
        name,
        email,
        imageUrl,
      },
    });
    res.status(200).json({ message: "User created successfully" });
  } catch {
    console.log("Failure");
  }
}
