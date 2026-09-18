import axios from "axios";
import React from "react";
import { useEffect } from "react";

const UserCard = ({ users,setusers }) => {
    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const res = await axios.get("http://localhost:8000/admin");
            setusers(res.data.length);
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchUsers();
      }, []); // 👈 run only once
  return (
    <div className="relative  h-40 w-49 flex flex-col bg-white/5 border border-white/10 rounded-2xl  p-3 overflow-hidden">

      {/* 🌟 glow background */}
      <div className="absolute -top-10 -left-10 w-[120px] h-[120px] bg-rose-500/20 blur-3xl rounded-full" />

      {/* header */}
      <div className="flex justify-between  items-center relative z-10">
        <h2 className="text-zinc-300 text-sm">Total Users</h2>
        <span className="text-xs text-rose-400 bg-rose-500/10 px-2 py-1 rounded-full">
          Live
        </span>
      </div>

      {/* number */}
      <div className="relative z-10 mt-1">
        <h1 className="text-4xl font-bold text-white">{users}</h1>
        <p className="text-xs text-zinc-400 mt-1">Registered users</p>
      </div>

      {/* mini trend bar (fake but useful UI) */}
      <div className="relative z-10   flex items-end gap-1 mt-1 h-20 ">
        {[30, 50, 40, 70, 60, 80, 90].map((h, i) => (
          <div
            key={i}
            className="w-3 bg-rose-400/80 rounded-sm shadow-[0_0_10px_rgba(244,63,94,0.5)]"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>

    </div>
  );
};

export default UserCard;