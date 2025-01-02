// src/components/TopNav.jsx
import React from "react";
import { HiOutlineSearch } from "react-icons/hi";

export default function TopNav() {
  return (
    <div className="flex items-center justify-between bg-white border-b border-gray-200 px-6 py-4">
      {/* Search bar on the left, like the screenshot */}
      <div className="relative w-1/3">
        <HiOutlineSearch
          size={20}
          className="absolute top-2 left-2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search items categories item name"
          className="pl-10 pr-3 py-2 w-full rounded border border-gray-300 focus:outline-none focus:border-blue-400"
        />
      </div>

      {/* Right side could show user info or a button to Add Item, etc. */}
      <div className="flex items-center gap-4">
        {/* Example: "Add item" button to match screenshot’s top-right */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add item
        </button>
        {/* "Save changes" button next to it */}
        <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
          Save Changes
        </button>
      </div>
    </div>
  );
}
