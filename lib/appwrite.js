import { Alert } from "react-native";
import {
  Account,
  Avatars,
  Client,
  Databases,
  ID,
  Query,
} from "react-native-appwrite";

export const config = {
  endPoint: "https://cloud.appwrite.io/v1",
  platform: "dev.0xaun.aura",
  projectId: "6655f112003b6269cc46",
  databaseId: "6655f6a900056e91455b",
  usersCollectionId: "6655f6b4001b88709fb0",
  videosCollectionId: "6655f7510015a5bbcef4",
  storageId: "6655f8a400198afca3a7",
};

const client = new Client();

client
  .setEndpoint(config.endPoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatar = new Avatars(client);
const databases = new Databases(client);

export const register = async (email, password, username) => {
  try {
    console.log("Step #1");
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );
    if (!newAccount) throw Error;

    const avatarURL = avatar.getInitials(username);

    console.log("Step #2");
    await login(email, password);

    const newUser = await databases.createDocument(
      config.databaseId,
      config.usersCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarURL,
      }
    );

    console.log("New User #", newUser);

    return newUser;
  } catch (error) {
    console.error("Register Error:", error);
    throw new Error(error);
  }
};

export const login = async (email, password) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    console.error("Login Error:", error);
    throw new Error(error);
  }
};

// Get Account
export async function getAccount() {
  try {
    const currentAccount = await account.get();
    return currentAccount;
  } catch (error) {
    throw new Error(error);
  }
}

export const getCurrentUser = async () => {
  try {
    const currentAccount = await getAccount();
    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      config.databaseId,
      config.usersCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    );
    console.log("Current User:", currentUser.documents[0]);
    if (!currentUser) throw Error;

    return currentUser.documents[0];
  } catch (error) {
    Alert.alert("Error", error.message);
    console.error("Get Current User Error:", error);
    throw new Error(error);
  }
};

// Sign Out
export async function signOut() {
  try {
    const session = await account.deleteSession("current");

    return session;
  } catch (error) {
    throw new Error(error);
  }
}
