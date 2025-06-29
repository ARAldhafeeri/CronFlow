import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import {
  User,
  CreateUserRequest,
  GetUsersResponse,
  CreateUserResponse,
} from "@cronflow/shared";

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan("combined"));
app.use(express.json());

// Mock data
let users: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    createdAt: new Date(),
  },
];

// Routes
app.get("/api/users", (req, res) => {
  const response: GetUsersResponse = {
    success: true,
    data: users,
  };
  res.json(response);
});

app.post("/api/users", (req, res) => {
  const { name, email }: CreateUserRequest = req.body;

  const newUser: User = {
    id: Date.now().toString(),
    name,
    email,
    createdAt: new Date(),
  };

  users.push(newUser);

  const response: CreateUserResponse = {
    success: true,
    data: newUser,
  };

  res.status(201).json(response);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
