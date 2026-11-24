import { Inngest } from "inngest";
import Connectdb from "./db.js";
import User from "../models/user.js";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "Slack-clone" });
const syncUser = inngest.createFunction(
  {
    id: "sync-user",
  },
  { event: "clerk/user.created" },
  async ({ event }) => {
    await Connectdb();
    const { email_adresses, first_name, last_name, iamge_url } = event.data;
    const newuser = await User.create({
      clerkId: id,
      email: email_adresses[0]?.email_address,
      name: `${first_name} ${last_name}`,
      image: iamge_url,
    });
    await createUser(newuser);
  },
);
const deleteUserFromDB = inngest.createFunction(
  {
    id: "delete-user",
  },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    await Connectdb();
    const { id } = event.data;
    await User.deleteOne({ clerkId: id });
    await deleteStreamUser(id.toString())
  }
);
// Create an empty array where we'll export future Inngest functions
export const functions = [syncUser, deleteUserFromDB];
