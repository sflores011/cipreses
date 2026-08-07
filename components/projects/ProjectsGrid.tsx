import Container from "@/components/ui/Container";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import styles from "./ProjectsGrid.module.scss";

export default function ProjectsGrid() {
  return (
    <section className={styles.section} aria-label="Proyectos que operamos">
      <Container>
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.href} {...project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
