"use client";

import { useState } from "react";
import { profile } from "@/lib/data";

export default function Banner() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative h-[36rem] w-full overflow-hidden bg-gradient-to-br from-ink-800 via-ink-900 to-accent/20 sm:h-[48rem] lg:h-[56rem]">
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
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-ink-950/70"
      />
    </div>
  );
}
