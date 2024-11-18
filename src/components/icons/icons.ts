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
