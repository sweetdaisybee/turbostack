import { Button } from "@components";
import { useState } from "react";

export const Home: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleInputFirstName = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value } = event.target;
    setFirstName(value);
    return;
  };
  const handleInputLastName = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value } = event.target;
    setLastName(value);
    return;
  };
  const handleInputUsername = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value } = event.target;
    setUsername(value);
    return;
  };
  const handleInputEmail = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value } = event.target;
    setEmail(value);
    return;
  };

  const createUser = async (): Promise<void> => {
    await fetch("/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email
      })
    });
    return;
  };

  const goToGoogle = (): void => {
    if (!process.env.EXTERNAL_SITE) {
      throw new Error("Please define all env variables");
    }
    window.location.href = process.env.EXTERNAL_SITE;
    return;
  };

  return(
    <div className="flex flex-col items-center bg-neutral-900 text-white p-8">
      <span>Hello World!</span>
      <input className="mt-2 bg-neutral-800 p-2" placeholder="Enter first name" onChange={handleInputFirstName}></input>
      <input className="mt-2 bg-neutral-800 p-2" placeholder="Enter last name" onChange={handleInputLastName}></input>
      <input className="mt-2 bg-neutral-800 p-2" placeholder="Enter username" onChange={handleInputUsername}></input>
      <input className="mt-2 bg-neutral-800 p-2" placeholder="Enter email" onChange={handleInputEmail}></input>
      <Button text="Create user" onClick={createUser}/>
      <Button text="Google!" onClick={goToGoogle}/>
    </div>
  );
};
