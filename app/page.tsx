"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Trophy } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import ReactPlayer from "react-player";
import Exam from "@/components/ui/Exam";
import {
  FaArrowRight,
  FaBookOpen,
  FaCommentDots,
  FaQuestionCircle,
  FaTrophy,
  FaUserGraduate,
} from "react-icons/fa";
import { LuClock3, LuLibrary } from "react-icons/lu";
import { CiGlobe } from "react-icons/ci";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaRegFileLines } from "react-icons/fa6";
import { MdLockOutline } from "react-icons/md";
import { Badge } from "@/components/ui/badge";
import { TiMinus, TiPlus } from "react-icons/ti";
import React, { useRef } from "react";
import PdfModal from "@/components/ui/Pdf";

export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isOpen1, setIsOpen1] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);
  const [isOpen3, setIsOpen3] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isPdfOpen, setIsPdfOpen] = React.useState(false);
  const [isAsk, setisAsk] = React.useState(false);
  const [isLeader, setisLeader] = React.useState(false);
  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main className="p-4 md:p-6 bg-gray-100 min-h-screen">
      <div className="absolute flex items-center justify-center w-full top-0  left-0 capitalize bg-emerald-600">
        <div className="flex gap-2 text-center items-center justify-center p-2">
          <p className="text-sm text-white text-center">Pop-Up:</p>
          <p
            className="text-sm text-white text-center underline cursor-pointer hover:text-gray-200 duration-200"
            onClick={() => setIsModalOpen(true)}
          >
            Exam
          </p>
          <p
            className="text-sm text-white text-center underline cursor-pointer hover:text-gray-200 duration-200"
            onClick={() => setIsPdfOpen(true)}
          >
            PDF
          </p>
        </div>
        <>
          {/* المودال */}
          {isModalOpen && (
            <Exam
              isModalOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
          )}
        </>
        <>
          {/* المودال */}
          {isPdfOpen && (
            <PdfModal
              isOpen={isPdfOpen}
              onClose={() => setIsPdfOpen(false)}
              pdfUrl={
                "https://archive.org/embed/Quran-Kareem-Khawagah-The-Blue-Page-Quran"
              }
            />
          )}
        </>
        <>
          {/* المودال */}
          {isAsk && (
            <AskQuestion isOpen={isAsk} onClose={() => setisAsk(false)} />
          )}
        </>
        <>
          {/* المودال */}
          {isLeader && (
            <Leaderboard isOpen={isLeader} onClose={() => setisLeader(false)} />
          )}
        </>
      </div>
      {/* Breadcrumb */}
      <Breadcrumb className="mb-4 mt-10">
        <BreadcrumbList className="flex-wrap">
          <BreadcrumbItem className="opacity-50 hover:opacity-100 duration-300 text-sm md:text-base">
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="opacity-50" />
          <BreadcrumbItem className="opacity-50 hover:opacity-100 duration-300 text-sm md:text-base">
            <BreadcrumbLink href="/">Courses</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="opacity-50" />
          <BreadcrumbItem className="text-sm md:text-base">
            <BreadcrumbPage>Course Details</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="text-2xl md:text-3xl font-bold py-2 md:py-4">
        Start SEO as your Home
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 w-full">
        {/* Main Content Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Video Player */}
          <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-lg max-sm:sticky max-sm:top-0">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=P0uaLRO6V1U"
              controls
              width="100%"
              height="100%"
            />
          </div>

          {/* Action Icons */}
          <div className="flex flex-wrap gap-3 md:gap-4 py-4">
            <button className="p-3 bg-white cursor-pointer rounded-xl border border-gray-300 hover:border-emerald-500 duration-300 text-gray-600 hover:text-emerald-600 shadow-sm">
              <FaBookOpen className="text-lg md:text-xl" />
            </button>
            <button
              className="p-3 bg-white cursor-pointer rounded-xl border border-gray-300 hover:border-emerald-500 duration-300 text-gray-600 hover:text-emerald-600 shadow-sm"
              onClick={scrollToSection}
            >
              <FaCommentDots className="text-lg md:text-xl" />
            </button>
            <button
              className="p-3 bg-white cursor-pointer rounded-xl border border-gray-300 hover:border-emerald-500 duration-300 text-gray-600 hover:text-emerald-600 shadow-sm"
              onClick={() => setisAsk(true)}
            >
              <FaQuestionCircle className="text-lg md:text-xl" />
            </button>
            <button
              onClick={() => setisLeader(true)}
              className="p-3 bg-white cursor-pointer rounded-xl border border-gray-300 hover:border-emerald-500 duration-300 text-gray-600 hover:text-emerald-600 shadow-sm"
            >
              <FaTrophy className="text-lg md:text-xl" />
            </button>
          </div>

          {/* Course Material */}
          <section className="space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold">
              Course Material
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <LuClock3 className="text-gray-600 text-lg" />
                    <span className="text-sm text-gray-600">Duration:</span>
                  </div>
                  <span className="text-sm text-gray-800 font-medium">
                    3 weeks
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <LuLibrary className="text-gray-600 text-lg" />
                    <span className="text-sm text-gray-600">Lessons:</span>
                  </div>
                  <span className="text-sm text-gray-800 font-medium">8</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <FaUserGraduate className="text-gray-600 text-lg" />
                    <span className="text-sm text-gray-600">Enrolled:</span>
                  </div>
                  <span className="text-sm text-gray-800 font-medium">
                    65 students
                  </span>
                </div>
                <div className="flex justify-between items-center pt-3">
                  <div className="flex items-center gap-2">
                    <CiGlobe className="text-gray-600 text-xl" />
                    <span className="text-sm text-gray-600">Language:</span>
                  </div>
                  <span className="text-sm text-gray-800 font-medium">
                    English
                  </span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200 max-sm:hidden">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <LuClock3 className="text-gray-600 text-lg" />
                    <span className="text-sm text-gray-600">Duration:</span>
                  </div>
                  <span className="text-sm text-gray-800 font-medium">
                    3 weeks
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <LuLibrary className="text-gray-600 text-lg" />
                    <span className="text-sm text-gray-600">Lessons:</span>
                  </div>
                  <span className="text-sm text-gray-800 font-medium">8</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <FaUserGraduate className="text-gray-600 text-lg" />
                    <span className="text-sm text-gray-600">Enrolled:</span>
                  </div>
                  <span className="text-sm text-gray-800 font-medium">
                    65 students
                  </span>
                </div>
                <div className="flex justify-between items-center pt-3">
                  <div className="flex items-center gap-2">
                    <CiGlobe className="text-gray-600 text-xl" />
                    <span className="text-sm text-gray-600">Language:</span>
                  </div>
                  <span className="text-sm text-gray-800 font-medium">
                    English
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h3 className="text-xl md:text-2xl font-semibold">
              Topics for this course
            </h3>
            <div className="lg:col-span-1 space-y-6 sm:hidden">
              <div className="pt-6">
                <ProgressBar progress={63} />
              </div>

              {/* Week 1-4 */}
              <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
                <div
                  className={`flex items-center justify-between border-gray-300`}
                  onClick={() => setIsOpen1(!isOpen1)}
                >
                  <h3 className="text-lg font-semibold text-gray-800">
                    Course Introduction
                  </h3>
                  <div className="transition-transform duration-300">
                    {isOpen1 ? <TiMinus /> : <TiPlus />}
                  </div>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen1 ? "max-h-[1000px]" : "max-h-0"
                  }`}
                >
                  <ul className="space-y-3 py-1 border-t border-gray-300">
                    <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <FaRegFileLines className="text-gray-500 text-sm" />
                          <span className="text-sm text-gray-700">
                            Introduction
                          </span>
                        </div>
                        <MdLockOutline className="text-gray-400 text-lg" />
                      </div>
                    </li>

                    <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <FaRegFileLines className="text-gray-500 text-sm" />
                          <span className="text-sm text-gray-700">
                            Course Overview
                          </span>
                        </div>
                        <MdLockOutline className="text-gray-400 text-lg" />
                      </div>
                    </li>

                    <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <FaRegFileLines className="text-gray-500 text-sm" />
                          <span className="text-sm text-gray-700">
                            Course Overview
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <Badge className="bg-emerald-100 text-emerald-700 px-2 py-1 text-xs">
                            0 Question
                          </Badge>
                          <Badge className="bg-red-100 text-red-700 px-2 py-1 text-xs">
                            10 Minutes
                          </Badge>
                        </div>
                      </div>
                    </li>

                    <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <FaRegFileLines className="text-gray-500 text-sm" />
                          <span className="text-sm text-gray-700">
                            Exercise Files
                          </span>
                        </div>
                        <MdLockOutline className="text-gray-400 text-lg" />
                      </div>
                    </li>

                    <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <FaRegFileLines className="text-gray-500 text-sm" />
                          <span className="text-sm text-gray-700">
                            Editor Setup
                          </span>
                        </div>
                        <MdLockOutline className="text-gray-400 text-lg" />
                      </div>
                    </li>

                    <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <FaRegFileLines className="text-gray-500 text-sm" />
                          <span className="text-sm text-gray-700">
                            PHP in HTML
                          </span>
                        </div>
                        <MdLockOutline className="text-gray-400 text-lg" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Week 5-8 */}
              <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
                <div
                  className={`flex items-center justify-between border-gray-300`}
                  onClick={() => setIsOpen2(!isOpen2)}
                >
                  <h3 className="text-lg font-semibold text-gray-800">
                    JavaScript Language Basics
                  </h3>
                  <div className="transition-transform duration-300">
                    {isOpen2 ? <TiMinus /> : <TiPlus />}
                  </div>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen2 ? "max-h-[1000px]" : "max-h-0"
                  }`}
                >
                  <ul className="space-y-3 py-1 border-t border-gray-300">
                    <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <FaRegFileLines className="text-gray-500 text-sm" />
                          <span className="text-sm text-gray-700">
                            Introduction
                          </span>
                        </div>
                        <MdLockOutline className="text-gray-400 text-lg" />
                      </div>
                    </li>

                    <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <FaRegFileLines className="text-gray-500 text-sm" />
                          <span className="text-sm text-gray-700">
                            Course Overview
                          </span>
                        </div>
                        <MdLockOutline className="text-gray-400 text-lg" />
                      </div>
                    </li>

                    <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <FaRegFileLines className="text-gray-500 text-sm" />
                          <span className="text-sm text-gray-700">
                            Course Overview
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <Badge className="bg-emerald-100 text-emerald-700 px-2 py-1 text-xs">
                            2 Question
                          </Badge>
                          <Badge className="bg-red-100 text-red-700 px-2 py-1 text-xs">
                            15 Minutes
                          </Badge>
                        </div>
                      </div>
                    </li>

                    <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <FaRegFileLines className="text-gray-500 text-sm" />
                          <span className="text-sm text-gray-700">
                            Exercise Files
                          </span>
                        </div>
                        <MdLockOutline className="text-gray-400 text-lg" />
                      </div>
                    </li>

                    <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <FaRegFileLines className="text-gray-500 text-sm" />
                          <span className="text-sm text-gray-700">
                            Editor Setup
                          </span>
                        </div>
                        <MdLockOutline className="text-gray-400 text-lg" />
                      </div>
                    </li>

                    <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <FaRegFileLines className="text-gray-500 text-sm" />
                          <span className="text-sm text-gray-700">
                            PHP in HTML
                          </span>
                        </div>
                        <MdLockOutline className="text-gray-400 text-lg" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
                <div
                  className={`flex items-center justify-between border-gray-300`}
                  onClick={() => setIsOpen3(!isOpen3)}
                >
                  <h3 className="text-lg font-semibold text-gray-800">
                    Course Introduction
                  </h3>
                  <div className="transition-transform duration-300">
                    {isOpen3 ? <TiMinus /> : <TiPlus />}
                  </div>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen3 ? "max-h-[1000px]" : "max-h-0"
                  }`}
                >
                  <ul className="space-y-3 py-1 border-t border-gray-300">
                    <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <FaRegFileLines className="text-gray-500 text-sm" />
                          <span className="text-sm text-gray-700">
                            Introduction
                          </span>
                        </div>
                        <MdLockOutline className="text-gray-400 text-lg" />
                      </div>
                    </li>

                    <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <FaRegFileLines className="text-gray-500 text-sm" />
                          <span className="text-sm text-gray-700">
                            Course Overview
                          </span>
                        </div>
                        <MdLockOutline className="text-gray-400 text-lg" />
                      </div>
                    </li>

                    <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <FaRegFileLines className="text-gray-500 text-sm" />
                          <span className="text-sm text-gray-700">
                            Course Overview
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <Badge className="bg-emerald-100 text-emerald-700 px-2 py-1 text-xs">
                            0 Question
                          </Badge>
                          <Badge className="bg-red-100 text-red-700 px-2 py-1 text-xs">
                            10 Minutes
                          </Badge>
                        </div>
                      </div>
                    </li>

                    <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <FaRegFileLines className="text-gray-500 text-sm" />
                          <span className="text-sm text-gray-700">
                            Exercise Files
                          </span>
                        </div>
                        <MdLockOutline className="text-gray-400 text-lg" />
                      </div>
                    </li>

                    <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <FaRegFileLines className="text-gray-500 text-sm" />
                          <span className="text-sm text-gray-700">
                            Editor Setup
                          </span>
                        </div>
                        <MdLockOutline className="text-gray-400 text-lg" />
                      </div>
                    </li>

                    <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <FaRegFileLines className="text-gray-500 text-sm" />
                          <span className="text-sm text-gray-700">
                            PHP in HTML
                          </span>
                        </div>
                        <MdLockOutline className="text-gray-400 text-lg" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/* Comments Section */}
          <section className="space-y-6" ref={sectionRef}>
            <h3 className="text-xl md:text-2xl font-semibold">Comments</h3>

            {/* Comment 1 */}
            <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
              <div className="flex gap-4 items-start">
                <Image
                  src="/3.jpg"
                  alt="avatar"
                  width={60}
                  height={60}
                  className="rounded-full w-12 h-12 md:w-14 md:h-14"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-medium text-gray-800">Mohamed Hamed</h4>
                    <span className="text-sm text-gray-500">Oct 10, 2025</span>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas
                  </p>
                </div>
              </div>
            </div>

            {/* Comment 2 */}
            <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
              <div className="flex gap-4 items-start">
                <Image
                  src="/1.jpg"
                  alt="avatar"
                  width={60}
                  height={60}
                  className="rounded-full w-12 h-12 md:w-14 md:h-14"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-medium text-gray-800">Ali Shahin</h4>
                    <span className="text-sm text-gray-500">Oct 10, 2025</span>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas
                  </p>
                </div>
              </div>
            </div>

            {/* Comment 3 */}
            <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
              <div className="flex gap-4 items-start">
                <Image
                  src="/2.jpg"
                  alt="avatar"
                  width={60}
                  height={60}
                  className="rounded-full w-12 h-12 md:w-14 md:h-14"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-medium text-gray-800">Osama Elzero</h4>
                    <span className="text-sm text-gray-500">Oct 10, 2025</span>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas
                  </p>
                </div>
              </div>
            </div>

            {/* Comment Form */}
            <div className="space-y-4">
              <Textarea
                placeholder="Write a comment..."
                className="w-full border-gray-300 h-32 rounded-xl focus:ring-2 focus:ring-emerald-500"
              />
              <Button className="bg-emerald-500 cursor-pointer hover:bg-emerald-600 text-white px-8 py-6 rounded-xl gap-2 w-full md:w-auto">
                Submit Review
                <FaArrowRight className="text-sm" />
              </Button>
            </div>
          </section>
        </div>

        {/* Sidebar Section */}
        <div className="lg:col-span-1 space-y-6 max-sm:hidden">
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Course Progress</h3>
            <ProgressBar progress={63} />
          </div>

          {/* Week 1-4 */}
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Week 1-4</h3>
              <p className="text-sm text-gray-600 mt-1">
                Advanced story telling techniques for writers: Personas,
                Characters & Plots
              </p>
            </div>

            <ul className="space-y-3">
              <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <FaRegFileLines className="text-gray-500 text-sm" />
                    <span className="text-sm text-gray-700">Introduction</span>
                  </div>
                  <MdLockOutline className="text-gray-400 text-lg" />
                </div>
              </li>

              <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <FaRegFileLines className="text-gray-500 text-sm" />
                    <span className="text-sm text-gray-700">
                      Course Overview
                    </span>
                  </div>
                  <MdLockOutline className="text-gray-400 text-lg" />
                </div>
              </li>

              <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <FaRegFileLines className="text-gray-500 text-sm" />
                    <span className="text-sm text-gray-700">
                      Course Overview
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Badge className="bg-emerald-100 text-emerald-700 px-2 py-1 text-xs">
                      0 Question
                    </Badge>
                    <Badge className="bg-red-100 text-red-700 px-2 py-1 text-xs">
                      10 Minutes
                    </Badge>
                  </div>
                </div>
              </li>

              <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <FaRegFileLines className="text-gray-500 text-sm" />
                    <span className="text-sm text-gray-700">
                      Exercise Files
                    </span>
                  </div>
                  <MdLockOutline className="text-gray-400 text-lg" />
                </div>
              </li>

              <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <FaRegFileLines className="text-gray-500 text-sm" />
                    <span className="text-sm text-gray-700">Editor Setup</span>
                  </div>
                  <MdLockOutline className="text-gray-400 text-lg" />
                </div>
              </li>

              <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <FaRegFileLines className="text-gray-500 text-sm" />
                    <span className="text-sm text-gray-700">PHP in HTML</span>
                  </div>
                  <MdLockOutline className="text-gray-400 text-lg" />
                </div>
              </li>
            </ul>
          </div>

          {/* Week 5-8 */}
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Week 5-8</h3>
              <p className="text-sm text-gray-600 mt-1">
                Advanced story telling techniques for writers: Personas,
                Characters & Plots
              </p>
            </div>

            <ul className="space-y-3">
              <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <FaRegFileLines className="text-gray-500 text-sm" />
                    <span className="text-sm text-gray-700">Introduction</span>
                  </div>
                  <MdLockOutline className="text-gray-400 text-lg" />
                </div>
              </li>

              <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <FaRegFileLines className="text-gray-500 text-sm" />
                    <span className="text-sm text-gray-700">
                      Course Overview
                    </span>
                  </div>
                  <MdLockOutline className="text-gray-400 text-lg" />
                </div>
              </li>

              <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <FaRegFileLines className="text-gray-500 text-sm" />
                    <span className="text-sm text-gray-700">
                      Course Overview
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Badge className="bg-emerald-100 text-emerald-700 px-2 py-1 text-xs">
                      2 Questions
                    </Badge>
                    <Badge className="bg-red-100 text-red-700 px-2 py-1 text-xs">
                      15 Minutes
                    </Badge>
                  </div>
                </div>
              </li>

              <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <FaRegFileLines className="text-gray-500 text-sm" />
                    <span className="text-sm text-gray-700">
                      Exercise Files
                    </span>
                  </div>
                  <MdLockOutline className="text-gray-400 text-lg" />
                </div>
              </li>

              <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <FaRegFileLines className="text-gray-500 text-sm" />
                    <span className="text-sm text-gray-700">Editor Setup</span>
                  </div>
                  <MdLockOutline className="text-gray-400 text-lg" />
                </div>
              </li>

              <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <FaRegFileLines className="text-gray-500 text-sm" />
                    <span className="text-sm text-gray-700">PHP in HTML</span>
                  </div>
                  <MdLockOutline className="text-gray-400 text-lg" />
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Week 5-8</h3>
              <p className="text-sm text-gray-600 mt-1">
                Advanced story telling techniques for writers: Personas,
                Characters & Plots
              </p>
            </div>

            <ul className="space-y-3">
              <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <FaRegFileLines className="text-gray-500 text-sm" />
                    <span className="text-sm text-gray-700">Introduction</span>
                  </div>
                  <MdLockOutline className="text-gray-400 text-lg" />
                </div>
              </li>

              <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <FaRegFileLines className="text-gray-500 text-sm" />
                    <span className="text-sm text-gray-700">
                      Course Overview
                    </span>
                  </div>
                  <MdLockOutline className="text-gray-400 text-lg" />
                </div>
              </li>

              <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <FaRegFileLines className="text-gray-500 text-sm" />
                    <span className="text-sm text-gray-700">
                      Course Overview
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Badge className="bg-emerald-100 text-emerald-700 px-2 py-1 text-xs">
                      2 Questions
                    </Badge>
                    <Badge className="bg-red-100 text-red-700 px-2 py-1 text-xs">
                      15 Minutes
                    </Badge>
                  </div>
                </div>
              </li>

              <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <FaRegFileLines className="text-gray-500 text-sm" />
                    <span className="text-sm text-gray-700">
                      Exercise Files
                    </span>
                  </div>
                  <MdLockOutline className="text-gray-400 text-lg" />
                </div>
              </li>

              <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <FaRegFileLines className="text-gray-500 text-sm" />
                    <span className="text-sm text-gray-700">Editor Setup</span>
                  </div>
                  <MdLockOutline className="text-gray-400 text-lg" />
                </div>
              </li>

              <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <FaRegFileLines className="text-gray-500 text-sm" />
                    <span className="text-sm text-gray-700">PHP in HTML</span>
                  </div>
                  <MdLockOutline className="text-gray-400 text-lg" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div
        className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 rounded-full px-3 py-1 text-xs font-medium shadow max-sm:hidden"
        style={{ left: `${progress}%` }}
      >
        You
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-300 rotate-45"></div>
      </div>
      <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-emerald-500 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="text-sm font-medium text-gray-700 mt-2 max-sm:hidden">
        {progress}% Complete
      </div>
    </div>
  );
};

const AskQuestion = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [question, setQuestion] = useState<string>("");

  useEffect(() => {
    const savedQuestion = sessionStorage.getItem("userQuestion");
    if (savedQuestion) setQuestion(savedQuestion);
  }, []);

  useEffect(() => {
    sessionStorage.setItem("userQuestion", question);
  }, [question]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white w-[90%] max-w-md p-6 rounded-2xl shadow-2xl relative"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
          >
            <motion.button
              onClick={onClose}
              className="absolute cursor-pointer top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              <X size={24} />
            </motion.button>
            <h2 className="text-xl font-bold text-center mb-4">
              Ask a Question
            </h2>
            <Textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Type your question here..."
              className="w-full p-3 border rounded-lg"
              rows={4}
            ></Textarea>
            <button
              onClick={onClose}
              className="mt-4 bg-emerald-500 hover:bg-emerald-600 cursor-pointer duration-200 text-white border-emerald-500 shadow-lg px-4 py-2 rounded-lg w-full"
            >
              Submit
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Leaderboard = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white w-[90%] max-w-md p-6 rounded-2xl shadow-2xl relative"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
          >
            <button
              onClick={onClose}
              className="absolute cursor-pointer top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              <X size={24} />
            </button>
            <div className="flex flex-col space-y-2">
              <h1 className="text-2xl font-bold text-center mb-4">
                Start SEO as your Home
              </h1>
              <h2 className="text-xl font-bold text-center mb-4">
                Leaderboard
              </h2>
            </div>
            <div className="bg-blue-50 text-gray-800 p-4 rounded-xl flex items-center justify-center max-w-md mx-auto shadow-md">
              <p className={`text-right text-lg font-cairo`}>
                عظيم يا صديقي، أداءك في الكورس ده أفضل من{" "}
                <span className="font-bold">60%</span> من باقي الطلبة. كمّل عايز
                أشوف اسمك في الليدر بورد هنا
              </p>
              <span className="text-7xl ml-2">💪</span>
            </div>
            <div className="flex flex-col space-y-2 pt-3">
              {[1, 2, 3, 4, 5].map((rank) => (
                <div
                  key={rank}
                  className="p-3 border border-gray-300 rounded-lg flex items-center justify-between bg-gray-100"
                >
                  <span className="font-medium">User {rank}</span>
                  <Trophy className="text-yellow-500" size={20} />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
