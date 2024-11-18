"use client";
import { SearchBar } from "@/components/ui/search-bar";
import CardProject from "./card-project";
import { RepositoryTypes } from "@/types/repository";

interface AllProjectsProps {
    repos: RepositoryTypes[];
}

export default function AllProjects({ repos }: AllProjectsProps) {
    return (
        <div className="space-y-4">
            <SearchBar placeholder={"Search for a repository"} />
            <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                {repos.map((repo) => (
                    <CardProject repo={repo} key={repo.id} />
                ))}
            </div>
        </div>
    );
}
