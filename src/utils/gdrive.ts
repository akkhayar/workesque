// utils/googleDriveClient.ts
import { google } from "googleapis";
import { readFileSync } from "fs";
import type { JWT } from "google-auth-library";
import path from "path";

let jwtClient: JWT | null = null;

export async function getGoogleClient() {
  if (!jwtClient) {
    const keyPath = path.join(process.cwd(), "gdrive-key.json");
    const key = JSON.parse(readFileSync(keyPath, "utf-8"));

    jwtClient = new google.auth.JWT(
      key.client_email,
      undefined,
      key.private_key,
      ["https://www.googleapis.com/auth/drive"]
    );

    await jwtClient.authorize();
  }

  return google.drive({ version: "v3", auth: jwtClient });
}

export default getGoogleClient;
