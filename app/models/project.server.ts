import type { Project } from "@prisma/client";
import { prisma } from "~/db.server";

export async function getProjectListings() {
  return prisma.project.findMany({
    select: {
      slug: true,
      title: true,
    },
  });
}

export async function getProjects() {
  return prisma.project.findMany();
}

export async function getProject(slug: string) {
  return prisma.project.findUnique({ where: { slug } });
}

export async function createProject(
  project: Pick<Project, "slug" | "title" | "markdown">
) {
  return prisma.project.create({ data: project });
}
