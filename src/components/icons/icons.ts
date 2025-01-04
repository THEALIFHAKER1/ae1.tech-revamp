import {
    BadgeAlert,
    Cake,
    Calendar,
    Copy,
    CopyCheck,
    Eye,
    FileText,
    FolderGit2,
    Home,
    Info,
    LayoutDashboard,
    Moon,
    PencilRuler,
    Star,
    SunMedium,
    TriangleAlert,
} from "lucide-react";
import {
    FaCodeFork,
    FaDiscord,
    FaGithub,
    FaLinkedinIn,
    FaScrewdriverWrench,
    FaTwitch,
    FaXTwitter,
    FaYoutube,
} from "react-icons/fa6";
import { NextjsOriginal } from "devicons-react";
import { TailwindcssOriginal } from "devicons-react";
import { LaravelOriginal } from "devicons-react";
import { PythonOriginal } from "devicons-react";
import { SupabaseOriginal } from "devicons-react";
import { BiLinkExternal } from "react-icons/bi";
import { FigmaOriginal } from "devicons-react";
//
// Lucide icons
//
export type IconKeys = keyof typeof icons;

type IconsType = {
    [key in IconKeys]: React.ElementType;
};

const icons = {
    // theme
    sun: SunMedium,
    moon: Moon,
    // navigation
    home: Home,
    dashboard: LayoutDashboard,
    projects: FolderGit2,
    about: Info,
    blog: PencilRuler,
    // development
    dev: TriangleAlert,
    // maintenance
    maintenance: FaScrewdriverWrench,
    // social
    github: FaGithub,
    linkedin: FaLinkedinIn,
    twitch: FaTwitch,
    youtube: FaYoutube,
    discord: FaDiscord,
    twitter: FaXTwitter,
    // projects
    externalLink: BiLinkExternal,
    projectData: FileText,
    fork: FaCodeFork,
    star: Star,
    copy: Copy,
    copyCheck: CopyCheck,
    eye: Eye,
    issue: BadgeAlert,
    calendar: Calendar,
    // skills
    NextJS: NextjsOriginal,
    Tailwind: TailwindcssOriginal,
    Laravel: LaravelOriginal,
    Figma: FigmaOriginal,
    Python: PythonOriginal,
    Supabase: SupabaseOriginal,
    // birthday
    cake: Cake,
};

export const Icons: IconsType = icons;

export const duolingoIcons = {
    JA: "https://d35aaqx5ub95lt.cloudfront.net/images/borderlessFlags/6d303af9f69038c1db4bffa52abdc997.svg",
    DE: "https://d35aaqx5ub95lt.cloudfront.net/images/borderlessFlags/097f1c20a4f421aa606367cd33893083.svg",
    FR: "https://d35aaqx5ub95lt.cloudfront.net/images/borderlessFlags/7488bd7cd28b768ec2469847a5bc831e.svg",
    ZHCN: "https://d35aaqx5ub95lt.cloudfront.net/images/borderlessFlags/8537efd75f444d1d7dc21d8caf563f58.svg",
    AR: "https://d35aaqx5ub95lt.cloudfront.net/images/borderlessFlags/e052b83e772ae592295961e595ca50ef.svg",

    Streak: "https://d35aaqx5ub95lt.cloudfront.net/images/profile/8a6dca76019d059a81c4c7c1145aa7a4.svg",
    XP: "https://d35aaqx5ub95lt.cloudfront.net/images/profile/01ce3a817dd01842581c3d18debcbc46.svg",
    League: "https://d35aaqx5ub95lt.cloudfront.net/images/leagues/8148b17e32d8706a82c02688f559e9ef.svg",
};
