"use client";
import React, { useState } from "react";

export default function UserAccessList() {
  const [searchQuery, setSearchQuery] = useState("");
  const users = [
    { name: "Nick Sharp", email: "nick@attio.com", access: "Full access" },
    { name: "Alex Christie", email: "alex@attio.com", access: "Metadata only" },
  ];

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="user-access">
      <h2>Individual Inbox Sharing</h2>
      <div className="search-and-share">
        <input
          type="text"
          className="search-input"
          placeholder="Search users..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="share-button">Share access</button>
      </div>
      <div className="user-list">
        {filteredUsers.map((user, index) => (
          <div key={index} className="user">
            <span>
              {user.name} <small>{user.email}</small>
            </span>
            <select defaultValue={user.access}>
              <option value="Full access">Full access</option>
              <option value="Metadata only">Metadata only</option>
            </select>
          </div>
        ))}
      </div>
    </section>
  );
}
