import { TaskProps } from "@/app/(dashboard)/components/Kaban";

export const dummyDatas: TaskProps[] = [
	{
		id: "4ee6e592-2416-41b1-8176-19e9564ab6d8",
		title: "Tasks",
		tasks: [
			{
				id: "e63ea50e-2401-4edb-8d25-8d01e1bd0b63",
				tags: ["UI", "Bug"],
				title: "Fix Navbar",
				description: "Resolve issues with the navigation bar",
				deadline: "2024-08-01",
				assignee: "John Doe",
				assignor: "Jane Smith",
			},
			{
				id: "62ebfbfa-a477-4804-bd3f-48c8443dabbb",
				tags: ["Backend", "Feature"],
				title: "Implement User Authentication",
				description: "Create a secure authentication system for users",
				deadline: "2024-08-15",
				assignee: "Alice Johnson",
				assignor: "Bob Brown",
			},
			{
				id: "2045ad52-60b9-4859-a30a-7bedc4b56b8e",
				tags: ["Database", "Optimization"],
				title: "Optimize Database Queries",
				description: "Improve the performance of database queries",
				deadline: "2024-07-25",
				assignee: "Charlie Wilson",
				assignor: "David Davis",
			},
		],
	},

	{
		id: "5598bf9f-bca1-4b0f-8f51-36c84b944614",
		title: "In-Progress",
		tasks: [
			{
				id: "f1c4731c-4967-40e3-a556-487645a9af14",
				tags: ["UI", "Feature"],
				title: "Enhance Page Transitions",
				description: "Improve the transition effects between pages",
				deadline: "2024-08-12",
				assignee: "Eva Rodriguez",
				assignor: "Chris Carter",
			},
			{
				id: "3e1136cd-8ab0-402e-8e0d-f1cc755151b0",
				tags: ["Backend", "Security"],
				title: "Implement Rate Limiting",
				description:
					"Enhance security by implementing rate limiting for API requests",
				deadline: "2024-08-20",
				assignee: "Frank Miller",
				assignor: "Grace Green",
			},
		],
	},

	{
		id: "7762162b-deb3-4e52-a5d9-0ab7f7983a82",
		title: "Completed",
		tasks: [
			{
				id: "0f7842b4-9e5b-4b2e-a333-add7f9ca6322",
				tags: ["Database", "Bug"],
				title: "Fix Data Inconsistencies",
				description: "Address inconsistencies in the database",
				deadline: "2024-08-05",
				assignee: "Helen Martinez",
				assignor: "Isaac Inoue",
			},
			{
				id: "142d0342-709a-4e0f-a66d-b2038f7ab6df",
				tags: ["UI", "Feature"],
				title: "Implement Dark Mode",
				description: "Introduce a dark mode option for the application",
				deadline: "2024-08-15",
				assignee: "Jackie Lee",
				assignor: "Ken Kim",
			},
			{
				id: "acacfb1b-09cd-4126-bbe3-21892a37a0cc",
				tags: ["Backend", "Optimization"],
				title: "Improve API Response Times",
				description: "Optimize backend API responses for faster loading",
				deadline: "2024-08-25",
				assignee: "Liam Thompson",
				assignor: "Mia Moore",
			},
		],
	},

	{
		id: "d8efead3-7856-4f33-9d77-7a7d183a6029",
		title: "Backlog",
		tasks: [
			{
				id: "9f492431-6fb3-4257-bd02-1bd0512192ad",
				tags: ["UI", "Bug"],
				title: "Fix Image Loading",
				description: "Address issues with images not loading properly",
				deadline: "2024-08-10",
				assignee: "Olivia Taylor",
				assignor: "Peter Peterson",
			},
			{
				id: "25e0c19f-64e4-495f-b5c5-600de6854c9d",
				tags: ["Backend", "Feature"],
				title: "Implement Email Notifications",
				description: "Develop a feature for sending email notifications to users",
				deadline: "2024-08-20",
				assignee: "Quincy Quinn",
				assignor: "Rachel Reed",
			},
		],
	},

	{
		id: "692bc2ab-1f0b-40c3-bfdb-8d285fc3ee8d",
		title: "Canceled",
		tasks: [
			{
				id: "dba984b1-2980-4ddb-8efe-b5515ea1d191",
				tags: ["Database", "Optimization"],
				title: "Indexing for Faster Searches",
				description: "Add indexing to optimize search queries on the database",
				deadline: "2024-08-08",
				assignee: "Samuel Sanders",
				assignor: "Tina Turner",
			},
			{
				id: "08c9b938-9fe7-49f5-826d-0be0fb2cd629",
				tags: ["UI", "Bug"],
				title: "Fix Cross-Browser Compatibility",
				description:
					"Address issues with the website not displaying correctly in certain browsers",
				deadline: "2024-08-18",
				assignee: "Ursula Underwood",
				assignor: "Victor Vaughn",
			},
			{
				id: "f7eca420-f8e3-4720-a574-1b8620cf2d8e",
				tags: ["Backend", "Security"],
				title: "Enhance Password Encryption",
				description:
					"Improve the security of user passwords through advanced encryption",
				deadline: "2024-08-22",
				assignee: "Wendy Wilson",
				assignor: "Xander Xavier",
			},
		],
	},
];
