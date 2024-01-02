"use client";
/*

Info needed to start a home:

- Drive folder for project
- Spreadsheet for personnel (optional -- otherwise automatically created)

*/

import { useState } from "react";

export default function Page() {
	const [fileId, setFileId] = useState("");
	const [statusMessage, setStatusMessage] = useState("");

	const checkAccess = async () => {
		setStatusMessage(""); // Reset status message
		const response = await fetch("/api/check-drive-access", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ fileId }),
		});

		if (response.ok) {
			const data = await response.json();
			setStatusMessage(`Passed: Access to file "${data.fileName}" confirmed.`);
		} else {
			setStatusMessage("Failed: Unable to access the specified file.");
		}
	};

	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
			<div className="form-group bg-white p-6 rounded-lg shadow-md">
				<label
					htmlFor="driveUrl"
					className="block text-lg font-semibold text-gray-700"
				>
					Add project drive
				</label>
				<p className="description mt-2 text-sm text-gray-600">
					Go to your drive and add this service account to the folder you want
					to use for your project: <br />
					<span className="font-medium text-gray-800">
						main-694@project-management-405211.iam.gserviceaccount.com
					</span>
				</p>
				<input
					className="mt-4 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent"
					type="text"
					value={fileId}
					onChange={(e) => setFileId(e.target.value)}
					id="driveUrl"
					name="driveUrl"
				/>

				<div className="button-container mt-4">
					<button
						onClick={checkAccess}
						className="w-full px-4 py-2 mb-2 bg-slate-600 text-white rounded-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50"
					>
						Check
					</button>
					<a
						className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
						href="/project/default"
					>
						Continue
					</a>
				</div>
				{statusMessage && (
					<p className="mt-4 text-sm text-gray-700">{statusMessage}</p>
				)}
			</div>
		</main>
	);
}
