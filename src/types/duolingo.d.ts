declare module "duolingo" {
    export interface LiveOpsFeature {
        startTimestamp: number;
        type: string;
        endTimestamp: number;
    }

    export interface Course {
        preload: boolean;
        placementTestAvailable: boolean;
        authorId: string;
        title: string;
        learningLanguage: string;
        xp: number;
        healthEnabled: boolean;
        fromLanguage: string;
        crowns: number;
        id: string;
    }

    export interface StreakData {
        currentStreak: {
            startDate: string;
            length: number;
            endDate: string;
        };
    }

    export interface DuolingoUser {
        joinedClassroomIds: string[];
        streak: number;
        motivation: string;
        acquisitionSurveyReason: string;
        shouldForceConnectPhoneNumber: boolean;
        picture: string;
        learningLanguage: string;
        hasFacebookId: boolean;
        shakeToReportEnabled: boolean;
        liveOpsFeatures: LiveOpsFeature[];
        canUseModerationTools: boolean;
        id: number;
        betaStatus: string;
        hasGoogleId: boolean;
        privacySettings: unknown[];
        fromLanguage: string;
        hasRecentActivity15: boolean;
        _achievements: unknown[];
        observedClassroomIds: string[];
        username: string;
        bio: string;
        profileCountry: string | null;
        chinaUserModerationRecords: unknown[];
        globalAmbassadorStatus: Record<string, unknown>;
        currentCourseId: string;
        hasPhoneNumber: boolean;
        creationDate: number;
        achievements: unknown[];
        hasPlus: boolean;
        name: string;
        roles: string[];
        classroomLeaderboardsEnabled: boolean;
        emailVerified: boolean;
        courses: Course[];
        totalXp: number;
        streakData: StreakData;
    }

    export default class Duolingo {
        constructor(username: string);
        data: { users: DuolingoUser[] } | null;
        init(): Promise<void>;
    }
}
