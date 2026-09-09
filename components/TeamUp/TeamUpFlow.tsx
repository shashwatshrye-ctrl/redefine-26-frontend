"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  createTeam,
  fetchTracks,
  joinTeam,
  DEFAULT_TRACKS,
  type Team,
  type Track,
} from "@/lib/teamup";

type Step = "choose" | "build" | "join";

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const INPUT_TAIL =
  "h-12 w-full rounded-xl border border-pink-600 bg-transparent px-5 text-base text-white outline-none transition placeholder:text-white/55 focus:border-pink-300 focus:ring-2 focus:ring-pink-300/20";

function FieldLabel({ icon, label, alt }: { icon: string; label: string; alt: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-9 w-9 shrink-0">
        <Image src={icon} alt="" fill className="object-contain" />
      </div>
      <div className="relative h-7 w-auto" style={{ aspectRatio: label.includes("TEAM") ? "155 / 26" : "84 / 26" }}>
        <Image src={label} alt={alt} fill className="object-contain object-left" />
      </div>
    </div>
  );
}

function TeamIllustration() {
  return (
    <div className="relative aspect-[760/904] w-full max-w-[47.5rem] overflow-hidden">
      <Image
        src="/teamup/left_artwork.png"
        alt="Hands joining puzzle pieces to form a team"
        fill
        priority
        sizes="(min-width: 1024px) 52vw, 92vw"
        className="object-contain object-bottom"
      />
    </div>
  );
}

function KindButton({
  icon,
  label,
  alt,
  onClick,
}: {
  icon: string;
  label: string;
  alt: string;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      onClick={onClick}
    >
      <button
        type="button"
        aria-label={alt}
        className="group block w-full rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-300"
      >
        <motion.div
          whileHover={{ scale: 1.025, y: -3 }}
          whileTap={{ scale: 0.985 }}
          transition={{ duration: 0.2 }}
          className="flex aspect-[371/139] w-full flex-col items-center justify-center gap-[clamp(0.45rem,1.2vw,0.8rem)] rounded-lg border border-pink-600/90 px-5 py-4 transition duration-200 group-hover:-translate-y-1 group-hover:bg-pink-500/10 sm:rounded-xl"
        >
          <div className="relative aspect-square w-[16%] min-w-8">
            <Image src={icon} alt="" fill className="object-contain" />
          </div>
          <div className="relative aspect-[307/34] w-[83%]">
            <Image src={label} alt={alt} fill className="object-contain" />
          </div>
        </motion.div>
      </button>
    </motion.div>
  );
}

function PanelFrame({
  children,
  onSubmit,
}: {
  children: React.ReactNode;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}) {
  const className =
    "flex aspect-[526/834] min-h-[31rem] w-full max-w-[32.875rem] flex-col rounded-xl border border-pink-600/90 px-[clamp(1.5rem,6vw,4rem)] pb-[clamp(2rem,5vw,3.5rem)] pt-[clamp(1.25rem,2vw,2rem)] shadow-[0_0_32px_rgba(236,72,153,0.13)] sm:min-h-[34rem] sm:rounded-2xl lg:min-h-0";

  if (onSubmit) {
    return (
      <form noValidate onSubmit={onSubmit} className={className}>
        {children}
      </form>
    );
  }
  return <div className={className}>{children}</div>;
}

interface TeamUpFlowProps {
  onTeamFormed?: (team: Team) => void;
}

export default function TeamUpFlow({ onTeamFormed }: TeamUpFlowProps) {
  const [step, setStep] = useState<Step>("choose");
  const [tracks, setTracks] = useState<Track[]>(DEFAULT_TRACKS);

  const [teamName, setTeamName] = useState("");
  const [trackId, setTrackId] = useState("");
  const [teamCode, setTeamCode] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let active = true;
    fetchTracks()
      .then((remoteTracks) => {
        if (active && remoteTracks.length) setTracks(remoteTracks);
      })
      .catch(() => {
        /* keep the bundled default tracks */
      });
    return () => {
      active = false;
    };
  }, []);

  const go = (next: Step) => {
    setError("");
    setStep(next);
  };

  const back = () => {
    setError("");
    setStep("choose");
  };

  const handleFinalize = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!teamName.trim() || !trackId) {
      setError("Add a team name and select a track to continue.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const team = await createTeam({ name: teamName, trackId });
      onTeamFormed?.(team);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleJoin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!teamCode.trim()) {
      setError("Enter your team code to continue.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const team = await joinTeam({ code: teamCode });
      onTeamFormed?.(team);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative isolate flex min-h-screen w-full flex-col overflow-hidden bg-black text-white"
    >
      <div className="relative z-10 grid flex-1 grid-cols-1 items-center gap-8 px-5 pb-10 sm:px-8 md:gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.92fr)] lg:gap-[clamp(1rem,2vw,2rem)] lg:px-[clamp(2rem,5vw,6rem)] lg:pb-[clamp(2.5rem,5vh,5rem)] lg:pt-2">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="flex min-h-[18rem] items-end justify-center lg:min-h-0 lg:justify-start"
        >
          <TeamIllustration />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
          className="flex items-center justify-center lg:justify-end"
        >
          <AnimatePresence mode="wait">
            {step === "choose" && (
              <motion.div
                key="choose"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.25 }}
                className="w-full max-w-[32.875rem]"
              >
                <div className="flex aspect-[522/834] min-h-[31rem] w-full flex-col justify-center rounded-xl border border-pink-600/90 px-[14%] py-10 shadow-[0_0_32px_rgba(236,72,153,0.13)] sm:min-h-[34rem] sm:rounded-2xl lg:min-h-0">
                  <div className="flex flex-col gap-[clamp(1.5rem,4vh,3rem)]">
                    <KindButton
                      icon="/teamup/image 24.png"
                      label="/teamup/BUILD YOUR TEAM.png"
                      alt="Build your team"
                      onClick={() => go("build")}
                    />
                    <KindButton
                      icon="/teamup/image 25.png"
                      label="/teamup/JOIN A TEAM.png"
                      alt="Join a team"
                      onClick={() => go("join")}
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {step === "build" && (
              <motion.div
                key="build"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.25 }}
                className="w-full max-w-[32.875rem]"
              >
                <PanelFrame onSubmit={handleFinalize}>
                  <div className="flex flex-1 flex-col gap-[clamp(1.5rem,3.5vh,2.5rem)]">
                    <div className="flex flex-col items-center gap-4">
                      <div className="relative h-12 w-12">
                        <Image src="/buildteam/image 24.svg" alt="" fill className="object-contain" />
                      </div>
                      <div className="relative aspect-[307/34] w-full max-w-[19.2rem]">
                        <Image src="/buildteam/BUILD YOUR TEAM.svg" alt="Build your team" fill className="object-contain" />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <FieldLabel icon="/buildteam/image 27.svg" label="/buildteam/TEAM NAME.svg" alt="Team name" />
                        <input
                          value={teamName}
                          onChange={(event) => setTeamName(event.target.value)}
                          placeholder="Enter your team name"
                          maxLength={48}
                          className={INPUT_TAIL}
                        />
                      </div>

                      <div className="space-y-2">
                        <FieldLabel icon="/buildteam/image 27.svg" label="/buildteam/TRACK.svg" alt="Track" />
                        <div className="relative">
                          <select
                            value={trackId}
                            onChange={(event) => setTrackId(event.target.value)}
                            className="h-12 w-full appearance-none rounded-xl border border-pink-600 bg-black px-5 pr-12 text-base text-white outline-none transition focus:border-pink-300 focus:ring-2 focus:ring-pink-300/20"
                          >
                            <option value="" disabled>
                              Select a track
                            </option>
                            {tracks.map((track) => (
                              <option key={track.id} value={track.id}>
                                {track.name}
                              </option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center">
                            <Image src="/buildteam/Polygon 10.svg" alt="" width={19} height={13} />
                          </div>
                        </div>
                      </div>
                    </div>

                    {error && <p role="alert" className="text-sm text-pink-200">{error}</p>}
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.015, y: -2 }}
                    whileTap={{ scale: 0.985 }}
                    transition={{ duration: 0.2 }}
                    disabled={loading}
                    className="relative mt-6 flex h-16 w-full items-center justify-center overflow-hidden rounded-xl bg-pink-400 shadow-[0_10px_25px_rgba(236,72,153,0.18)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-200 disabled:opacity-60"
                  >
                    <Image src="/buildteam/FINALISE TEAM.svg" alt="Finalise team" width={125} height={17} />
                  </motion.button>
                </PanelFrame>
              </motion.div>
            )}

            {step === "join" && (
              <motion.div
                key="join"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.25 }}
                className="w-full max-w-[32.875rem]"
              >
                <PanelFrame onSubmit={handleJoin}>
                  <div className="flex flex-1 flex-col items-center gap-[clamp(1.5rem,3.5vh,2.5rem)]">
                    <div className="space-y-2 w-full">
                      <div className="flex items-center gap-3">
                        <div className="relative h-9 w-9 shrink-0">
                          <Image src="/teamcode/image 27.svg" alt="" fill className="object-contain" />
                        </div>
                        <div className="relative aspect-[155/26] h-7 w-auto">
                          <Image src="/teamcode/TEAM CODE.svg" alt="Team code" fill className="object-contain object-left" />
                        </div>
                      </div>
                      <input
                        value={teamCode}
                        onChange={(event) => setTeamCode(event.target.value)}
                        aria-label="Team code"
                        placeholder="e.g. TERM-AB12"
                        maxLength={20}
                        className="h-20 w-full rounded-xl border border-pink-600 bg-transparent px-5 text-base uppercase tracking-[0.12em] text-white outline-none transition focus:border-pink-300 focus:ring-2 focus:ring-pink-300/20"
                      />
                    </div>
                    {error && <p role="alert" className="text-sm text-pink-200">{error}</p>}
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.015, y: -2 }}
                    whileTap={{ scale: 0.985 }}
                    transition={{ duration: 0.2 }}
                    disabled={loading}
                    className="relative mt-6 flex h-16 w-full items-center justify-center overflow-hidden rounded-xl bg-pink-400 transition-transform duration-200 hover:-translate-y-0.5 shadow-[0_10px_25px_rgba(236,72,153,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-200 disabled:opacity-60"
                  >
                    <Image src="/teamcode/DONE.svg" alt="Done" width={62} height={17} />
                  </motion.button>
                </PanelFrame>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>
      </div>

      {step !== "choose" && (
        <button
          type="button"
          onClick={back}
          className="absolute left-4 top-28 z-20 flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/70 transition hover:text-white hover:bg-pink-500/10 sm:left-8 md:top-32"
        >
          <span aria-hidden>&larr;</span> Back
        </button>
      )}
    </section>
  );
}
