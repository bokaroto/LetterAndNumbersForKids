import { useState, useRef, useEffect, useContext } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import {
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleLeft,
  FaMusic,
  FaEraser,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import myContext from '../context/Context';

const colors = ['red', 'green', 'blue', 'orange', 'black'];

const Drawing = () => {
  const { contextData } = useContext(myContext);

  const params = useParams();
  const letter = params.letterId;

  const location = useLocation();
  const { sound, position } = location.state;

  const [currentPosition, setCurrentPosition] = useState(position);
  const [nextLetter, setNextLetter] = useState(location.state);
  const [prevLetter, setPrevLetter] = useState(location.state);
  const canvasRef = useRef(null);
  const [selectedColor, setSelectedColor] = useState('red');
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas dimensions based on window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 165;

    // Set font properties
    ctx.font = '350px Arial';
    ctx.strokeStyle = 'purple';
    ctx.lineWidth = 15;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    // Draw the selected letter
    if (letter.length > 1) {
      ctx.strokeText(letter, 0, canvas.height / 2 + 100);
    } else {
      ctx.strokeText(letter, 30, canvas.height / 2 + 100);
    }
  }, [letter]);

  const handleStartDrawing = (e) => {
    setIsDrawing(true);
  };

  const handleFinishDrawing = (e) => {
    setIsDrawing(false);
  };

  const handleDrawing = (e) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (e.type === 'touchmove') {
      // Handle touch events
      const touch = e.touches[0];
      const x = touch.pageX - canvas.offsetLeft;
      const y = touch.pageY - canvas.offsetTop;
      ctx.strokeStyle = selectedColor;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + 1, y + 1);
      ctx.stroke();
    } else {
      // Handle mouse events
      const x = e.clientX - canvas.offsetLeft;
      const y = e.clientY - canvas.offsetTop;
      ctx.strokeStyle = selectedColor;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + 1, y + 1);
      ctx.stroke();
    }
  };

  function handleRefreshClick() {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    // You can then draw whatever you want on the canvas after clearing it
    const ctx = canvas.getContext('2d');

    // Set canvas dimensions based on window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 165;

    // Set font properties
    ctx.font = '350px Arial';
    ctx.strokeStyle = 'purple';
    ctx.lineWidth = 15;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    // Draw the selected letter
    ctx.strokeText(letter, 30, canvas.height / 2 + 100);
  }

  const playAudio = () => {
    const audio = new Audio(sound);
    audio.play();
  };

  const handlePrev = () => {
    setCurrentPosition((prevIndex) =>
      prevIndex === 0 ? contextData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentPosition((prevIndex) =>
      prevIndex === contextData.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (currentPosition === 0) {
      setPrevLetter(contextData[0]);
    } else {
      setPrevLetter(contextData[currentPosition - 1]);
    }

    if (currentPosition === contextData.length - 1) {
      setNextLetter(contextData[contextData.length - 1]);
    } else {
      setNextLetter(contextData[currentPosition + 1]);
    }
  }, [currentPosition]);

  return (
    <div className="w-full">
      <canvas
        ref={canvasRef}
        onMouseDown={handleStartDrawing}
        onMouseUp={handleFinishDrawing}
        onMouseMove={handleDrawing}
        onTouchStart={handleStartDrawing}
        onTouchEnd={handleFinishDrawing}
        onTouchMove={handleDrawing}
      />
      <div className="flex w-full bg-purple-500 justify-between p-2">
        {currentPosition !== 0 && (
          <Link
            to={{
              pathname: `/drawing/${prevLetter.letter}`,
            }}
            state={prevLetter}
            onClick={handlePrev}
          >
            <FaRegArrowAltCircleLeft className="ml-5 mr-5 w-10 h-10" />
          </Link>
        )}
        <button onClick={playAudio}>
          <FaMusic className="w-10 h-10 mr-5" />
        </button>
        <button onClick={handleRefreshClick}>
          <FaEraser className="w-10 h-10 mr-5" />
        </button>
        {currentPosition < contextData.length - 1 && (
          <Link
            to={{
              pathname: `/drawing/${nextLetter.letter}`,
            }}
            state={nextLetter}
            onClick={handleNext}
          >
            <FaRegArrowAltCircleRight className="w-10 h-10 mr-5" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Drawing;
