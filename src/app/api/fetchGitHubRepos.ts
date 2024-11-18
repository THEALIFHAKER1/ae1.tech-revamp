import { env } from "@/env.mjs";

const token = env.GITHUB_TOKEN;
const username = "THEALIFHAKER1";

// Define the GitHub repository interface
interface GitHubRepo {
    id: number;
    name: string;
    html_url: string;
    description: string | null;
    languages_url: string;
    forks_count: number;
    stargazers_count: number;
    homepage: string | null;
    languages: Record<string, number>;
}

export default async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
    const api = `https://api.github.com/users/${username}/repos`;
    const response = await fetch(api, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        next: {
            revalidate: 60,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch repositories");
    }

    const repos: Omit<GitHubRepo, "languages">[] = await response.json();

    // Fetch languages for each repository in parallel
    const reposWithLanguages = await Promise.all(
        repos.map(async (repo) => {
            const langResponse = await fetch(repo.languages_url, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                next: {
                    revalidate: 60,
                },
            });

            if (!langResponse.ok) {
                throw new Error(`Failed to fetch languages for ${repo.name}`);
            }

            const languages = await langResponse.json();
            return { ...repo, languages };
        })
    );

    return reposWithLanguages;
}
