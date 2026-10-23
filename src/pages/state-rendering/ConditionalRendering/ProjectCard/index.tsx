import S from './style.module.css';

type ProjectRole = '팀 프로젝트' | '개인 프로젝트';

interface ProjectProps {
  title: string;
  role: ProjectRole;
  isNew?: boolean;
  isBest?: boolean;
}

const ProjectCard = ({ title, role, isNew = false, isBest = false }: ProjectProps) => {
  let newBadgeElement = null;
  if (isNew) {
    newBadgeElement = (
      <span className={`${S.badge} ${S.badgeNew}`} aria-label="신규 프로젝트">
        NEW
      </span>
    );
  }

  let bestBadgeElement = null;
  if (isBest) {
    bestBadgeElement = (
      <span className={`${S.badge} ${S.badgeBest}`} aria-label="신규 프로젝트">
        Best
      </span>
    );
  }

  return (
    <article className={S.card}>
      <header className={S.header}>
        <h3 className={S.title}>{title}</h3>
        {newBadgeElement}
        {bestBadgeElement}
      </header>
      <p className={S.role}>{role}</p>
    </article>
  );
};

export default ProjectCard;
