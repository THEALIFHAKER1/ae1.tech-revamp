export interface Course {
    id: string;
    title: string;
    xp: number;
}

export interface Biodata {
    picture: string;
    name: string;
    username: string;
    courses: Course[];
}

export interface Statistics {
    streak: number;
    totalXp: number;
}
