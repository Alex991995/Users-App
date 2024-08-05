import { createPortal } from 'react-dom';

const portal = document.getElementById('portal');

interface ReactPortalProps {
  children: React.ReactNode;
}

function ReactPortal({ children }: ReactPortalProps) {
  if (portal) {
    return createPortal(children, portal);
  }
}

export default ReactPortal;
