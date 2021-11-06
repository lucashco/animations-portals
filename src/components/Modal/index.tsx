import { AnimationEvent, useState } from "react";
import reactDOM from 'react-dom'

import './styles.css'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const portal = document.getElementById('portal')

export function Modal({ isOpen, onClose }: ModalProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAnimationStarted = () => {
    setIsAnimating(true);
  };

  const handleAnimationEnded = (event: AnimationEvent) => {
    const { animationName } = event.nativeEvent;

    if (animationName === "modalOut") {
      onClose()
      setIsAnimating(false);
    }
  };



  if (!isOpen && !isAnimating) return null;

  if (!portal) return null

  return reactDOM.createPortal(
    <>
      <div className={`overlay ${isOpen ? "active" : ""}`}
        onClick={onClose}
      ></div>
      <div
        className={`modal ${isOpen ? "active" : ""}`}
        onAnimationStart={handleAnimationStarted}
        onAnimationEnd={handleAnimationEnded}
      >
        <h1>Modal Animation</h1>
      </div>
    </>,
    portal
  );
}
