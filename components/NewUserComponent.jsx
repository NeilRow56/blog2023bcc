"use client";

import { useState } from "react";

const NewUserComponent = () => {
  const [form, setForm] = useState({ name: "", email: "", imageUrl: "" });

  async function newUser(data) {
    try {
      fetch("http://localhost:3000/api/newUser", {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }).then(() => setForm({ name: "", email: "", imageUrl: "" }));
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async (data) => {
    try {
      newUser(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mx-auto justify-center">
      <h1 className="mt-24 text-center text-2xl font-bold">Register</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(form);
        }}
        className="mx-auto flex w-auto min-w-[25%] max-w-min flex-col items-stretch space-y-6 "
      >
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="rounded border-2 border-gray-400 p-1"
        />
        <input
          type="text"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="rounded border-2 border-gray-400 p-1"
        />
        <input
          type="text"
          placeholder="Image Url"
          value={form.imageUrl}
          onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
          className="rounded border-2 border-gray-400 p-1"
        />
        <button type="submit" className="primary-button">
          Add
        </button>
      </form>
    </div>
  );
};

export default NewUserComponent;
