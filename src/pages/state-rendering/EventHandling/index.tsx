import EventHandler from './EventHandler';
import S from './style.module.css';

export default function EventHandling() {
  return (
    <Container className={S.container}>
      <EventHandler />
    </Container>
  );
}

interface ContainerProps {
  className: string;
  children?: React.ReactNode;
}
function Container({ className, children }: ContainerProps) {
  return <div className={className}>{children}</div>;
}
