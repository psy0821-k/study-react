import ProjectCard from './ProjectCard';
import S from './style.module.css';

function ConditionalRendering() {
  return (
    <div className={S.container}>
      <h2>프로젝트 소개</h2>
      <ul className={S.profileList}>
        <li>
          <ProjectCard title="이커머스" role="팀 프로젝트" isNew />
        </li>
        <li>
          <ProjectCard title="전산관리 시스템" role="개인 프로젝트" isNew isBest />
        </li>
        <li>
          <ProjectCard title="블로그" role="개인 프로젝트" isBest />
        </li>
      </ul>
    </div>
  );
}

export default ConditionalRendering;
