"use client";

import { useState } from "react";
import { profile } from "@/lib/data";

export default function Banner() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative h-72 w-full overflow-hidden bg-gradient-to-br from-paper-200 via-paper-100 to-accent/20 sm:h-96 lg:h-[28rem]">
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
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-paper-50 via-paper-50/30 to-paper-50/60"
      />
    </div>
  );
}
