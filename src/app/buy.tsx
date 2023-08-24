"use client";

import { BUY_LINK } from "@/logic/config";

export function BuyButton() {
  return (
    <button
      className="w-full mt-4 py-4 text-xl text-white rounded-sm bg-black"
      onClick={() => (window.location.href = BUY_LINK)}
    >
      Buy
    </button>
  );
}
