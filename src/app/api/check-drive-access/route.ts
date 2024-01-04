import getGoogleClient from "@/utils/gdrive";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {
		const drive = await getGoogleClient();

		// Extract the file ID from the request body
		const { fileId } = await req.json();

		const response = await drive.files.get({
			fileId: fileId,
			fields: "id, name",
		});

		return NextResponse.json({ fileName: response.data.name, status: 200 });
	} catch (error) {
		console.error(error);
		return new NextResponse("Error accessing Google Drive", { status: 500 });
	}
}
