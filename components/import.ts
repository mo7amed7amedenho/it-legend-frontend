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
import BreadcrumbComponent from "@/components/sections/Breadcrumb";
import Header from "./sections/Header";
import AskQuestion from "./modals/AskQuestion";
import Leaderboard from "./modals/Leaderboard";
import Image from "next/image";
import ReactPlayer from "react-player";
import Exam from "@/components/modals/Exam";
import CardMobile from "./sections/CardMobile";
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
import PdfModal from "@/components/modals/Pdf";
import { Switch } from "@/components/ui/switch";
import Player from "./sections/Player";
import CourseMaterial from "./sections/CourseMaterial";
import ProgressBar from "./ui/Progress";
import Comments from "./sections/Comments";
import CardDesktop from "./sections/CardDesktop";
export {
  useState,
  useEffect,
  AnimatePresence,
  motion,
  X,
  Trophy,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Image,
  ReactPlayer,
  Exam,
  FaArrowRight,
  FaBookOpen,
  FaCommentDots,
  FaQuestionCircle,
  FaTrophy,
  FaUserGraduate,
  LuClock3,
  LuLibrary,
  CiGlobe,
  Textarea,
  Button,
  FaRegFileLines,
  MdLockOutline,
  Badge,
  TiMinus,
  TiPlus,
  Switch,
  PdfModal,
  React,
  useRef,
  Header,
  CardMobile,
  BreadcrumbComponent,
  Leaderboard,
  AskQuestion,
  Player,
  CourseMaterial,
  ProgressBar,
  Comments,
  CardDesktop,
};
