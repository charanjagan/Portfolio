"use client";

import { useState } from "react";
import { profile } from "@/lib/data";

export default function Banner() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="px-4 pt-24 sm:px-6 sm:pt-28">
      <div className="glass relative mx-auto h-56 w-full max-w-5xl overflow-hidden rounded-3xl shadow-glass sm:h-72 lg:h-80">
        {!failed && (
          <img
            src={profile.bannerSrc}
            alt=""
            onError={() => setFailed(true)}
            className="h-full w-full object-cover"
          />
        )}

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/50 via-white/10 to-transparent"
        />
      </div>
    </div>
  );
}
