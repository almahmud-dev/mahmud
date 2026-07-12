import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PiGraduationCap } from "react-icons/pi";
import {
  FaCircleCheck,
  FaArrowUpRightFromSquare,
  FaCalendarDays,
} from "react-icons/fa6";

export default function CertificationCard() {
  return (
    <div className="relative flex gap-8">
      {/* Timeline */}
      <div className="hidden md:flex flex-col items-center relative z-10">
        <div className="w-12 h-12 rounded-full bg-[#2563eb] text-white flex items-center justify-center shadow-lg shadow-blue-500/30 border border-blue-500/30">
          <PiGraduationCap className="text-2xl" />
        </div>

        <div className="mt-4 text-center">
          <h4 className="font-black text-[#2563eb] text-xl">2026</h4>

          <p className="text-xs text-secondary mt-1">April</p>
        </div>
      </div>

      {/* Card */}
      <div className="flex-1 rounded-4xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/3 backdrop-blur-xl p-8 lg:p-12 shadow-[0_20px_60px_rgba(37,99,235,0.08)]">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 dark:bg-primary/15 px-4 py-2 text-sm font-semibold text-primary">
              Professional Certification
            </span>

            <h3 className="mt-5 text-4xl font-black text-gray-900 dark:text-white">
              NSDA Level-3
            </h3>

            <h4 className="mt-3 text-lg font-bold text-primary">
              National Skill Development Authority
            </h4>

            <p className="mt-6 leading-8 text-secondary">
              Successfully completed the NSDA Level-3 certification in Software
              & IT Enabled Services, strengthening my frontend development
              knowledge, practical industry skills, and real-world project
              experience.
            </p>

            {/* Information */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <FaCircleCheck className="text-green-500 text-lg shrink-0" />
                <span className="text-secondary">
                  Verified by NSDA Bangladesh
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCircleCheck className="text-green-500 text-lg shrink-0" />
                <span className="text-secondary">
                  Software & IT Enabled Services
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCalendarDays className="text-primary text-lg shrink-0" />
                <span className="text-secondary">Completed • May 2026</span>
              </div>
            </div>

            {/* Button */}
            <Link
              href="/image/nsda.png"
              target="_blank"
              className="inline-flex items-center gap-2 mt-10 rounded-2xl bg-primary px-6 py-3.5 font-semibold text-black dark:text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:bg-primary-hover"
            >
              View Certificate
              <FaArrowUpRightFromSquare className="text-sm" />
            </Link>
          </div>

          {/* Right Image */}
          <Link
            href="/image/nsda.png"
            target="_blank"
            className="group relative overflow-hidden rounded-[28px] border border-black/5 dark:border-white/10 bg-white dark:bg-white/5 shadow-2xl"
          >
            {/* Badge */}
            <span className="absolute left-5 top-5 z-20 rounded-full bg-white/90 dark:bg-black/70 backdrop-blur-md px-4 py-2 text-sm font-semibold text-primary shadow">
              Verified Certificate
            </span>

            {/* Certificate */}
            <Image
              src="/image/nsda.png"
              alt="NSDA Certificate"
              width={700}
              height={900}
              className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/30">
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full bg-white dark:bg-[#111827] px-5 py-3 font-semibold text-gray-900 dark:text-white flex items-center gap-2 shadow-xl">
                <FaArrowUpRightFromSquare />
                View Full Certificate
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
