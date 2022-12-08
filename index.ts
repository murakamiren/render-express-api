import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = [
	{ name: "test", age: 20 },
	{ name: "exp", age: 30 },
	{ name: "render", age: 10 },
];

app.get("/", async (_rep: Request, res: Response) => {
	return res.status(200).send({
		message: "hello render!",
	});
});

app.get("/user", async (_rep: Request, res: Response) => {
	return res.status(200).send(JSON.stringify(users));
});

try {
	app.listen(port, () => {
		console.log(`server running. port:${port}`);
	});
} catch (e) {
	if (e instanceof Error) {
		console.error(e.message);
	}
}
