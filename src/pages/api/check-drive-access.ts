import type { NextApiRequest, NextApiResponse } from "next";
import getGoogleClient from "@/utils/gdrive";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const drive = await getGoogleClient();

      // Extract the file ID from the request body
      const { fileId } = req.body;

      const response = await drive.files.get({
        fileId: fileId,
        fields: "id, name",
      });

      res.status(200).json({ fileName: response.data.name });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error accessing Google Drive" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
