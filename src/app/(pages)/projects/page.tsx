// app/projects/page.tsx
import fetchGitHubRepos from "@/app/api/fetchGitHubRepos";
import AllProjects from "./all-projects";
import CollapseComponents from "@/components/ui/collapse-components";
import { HeadingText } from "@/components/ui/heading-text";
import { RepositoryTypes } from "@/types/repository";
import SpotlightProjects from "./spotlight-project";

export const metadata = {
    title: "Projects",
    description: "All my projects",
};

export default async function ProjectsPage(props: {
    searchParams?: Promise<{
        Search?: string;
    }>;
}) {
    const searchParams = await props.searchParams;
    const searchTerm = searchParams?.Search ?? "";

    let repos: RepositoryTypes[] = [];
    try {
        repos = await fetchGitHubRepos();
    } catch (error) {
        console.error("Failed to fetch repositories:", error);
    }

    const sortedRepositories = repos.filter(
        (repo) =>
            repo.name.toLowerCase().includes(searchTerm?.toLowerCase()) ||
            repo.description?.toLowerCase().includes(searchTerm?.toLowerCase())
    );
    return (
        <>
            <CollapseComponents
                nameComponent={
                    <HeadingText subtext="All of my favorite projects">
                        Spotlight Projects
                    </HeadingText>
                }
                contentComponent={<SpotlightProjects />}
            />
            <CollapseComponents
                nameComponent={
                    <HeadingText subtext="All of my repository on github">
                        GitHub Repositories
                    </HeadingText>
                }
                contentComponent={<AllProjects repos={sortedRepositories} />}
            />
        </>
    );
}
