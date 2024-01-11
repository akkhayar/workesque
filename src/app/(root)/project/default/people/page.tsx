"use client";

import { useState } from "react";

export default function AccountsPage() {
	const [email, setEmail] = useState("");
	const [accounts, setAccounts] = useState([
		{ id: 1, email: "example1@gmail.com", role: "User" },
		{ id: 2, email: "example2@gmail.com", role: "Manager" },
		// Add more placeholder accounts with roles here
	]);
	const roles = ["Manager", "User"];

	const handleRoleChange = (accountId: number, newRole: string) => {
		const updatedAccounts = accounts.map((account) => {
			if (account.id === accountId) {
				return { ...account, role: newRole };
			}
			return account;
		});
		setAccounts(updatedAccounts);
	};

	const handleAddAccount = () => {
		// Implement account addition logic
	};

	const handleEditAccount = (id: number) => {
		// Implement account edit logic
	};

	const handleDeleteAccount = (id: number) => {
		// Implement account delete logic
	};

	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
			<div className="container mx-auto p-8 bg-white rounded-lg shadow-md">
				<header className="text-2xl font-bold mb-4 text-gray-700">
					Account Management
				</header>

				<div className="add-account mb-8">
					<input
						type="email"
						placeholder="Enter Gmail Address"
						className="text-black border border-gray-300 p-2 rounded mr-2"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<button
						className="bg-slate-600 text-white px-4 py-2 rounded hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50"
						onClick={handleAddAccount}
					>
						Add Account
					</button>
				</div>

				<div className="accounts-list">
					{accounts.map((account) => (
						<div
							key={account.id}
							className="flex items-center justify-between mb-2 p-2 border-b border-gray-300"
						>
							<span className="text-gray-700">{account.email}</span>
							<div className="flex items-center">
								<select
									className="mr-2 border border-gray-300 rounded px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50"
									value={account.role}
									onChange={(e) => handleRoleChange(account.id, e.target.value)}
								>
									{roles.map((role) => (
										<option key={role} value={role}>
											{role}
										</option>
									))}
								</select>
								<button
									className="text-sm bg-slate-500 text-white px-2 py-1 rounded mr-2 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-opacity-50"
									onClick={() => handleEditAccount(account.id)}
								>
									Edit
								</button>
								<button
									className="text-sm bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
									onClick={() => handleDeleteAccount(account.id)}
								>
									Delete
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</main>
	);
}
