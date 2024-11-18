export type RepositoryTypes = {
    id: number;
    name: string;
    html_url: string;
    description: string | null;
    languages_url: string;
    forks_count: number;
    stargazers_count: number;
    homepage: string | null;
    languages: Record<string, number>;
};
