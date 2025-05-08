import { useEffect, useRef } from 'react';
import './loading-animation.css';
import yutika from '../assets/yutika.svg';
import box from '../assets/box.svg';

function LoadingAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    if (!canvas) {
      console.error('Canvas element not found');
      return;
    }

    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    if (!ctx) {
      console.error('2D context not available');
      return;
    }

    const marioImg = new Image();
    const boxImg = new Image();
    marioImg.src = yutika; // Your Mario SVG path
    boxImg.src = box;     // Your Box SVG path

    let animationFrameId: number;

    function resizeCanvas() {
        // Set canvas size
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        let mario = {
          x: 0,
          y: 150,
          width: 50,
          height: 50,
          speedX: 4,
          vy: 0,
          gravity: 0.5,
          jumpStrength: -10,
          isJumping: false,
          groundY: 150
        };

        let boxes: Array<any> = [];

        // get number of boxes possible
        // Create multiple boxes
        const numberOfBoxes = Math.floor((canvas.width + 100)/140);
        const boxDimension = 40;
        const spaceBetweenBoxes = (canvas.width - numberOfBoxes * boxDimension) / (numberOfBoxes - 1);
        for (let i = 0; i < numberOfBoxes; i += 1) {
          boxes.push({ x: i * (boxDimension + spaceBetweenBoxes), y: 30, width: boxDimension, height: boxDimension, bounceOffset: 0, bouncing: false });
        }
        
        function draw() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        
          mario.x += mario.isJumping ? 0 : mario.speedX;

          if(mario.x + mario.width > canvas.width || mario.x < 0) { 
            mario.speedX = -mario.speedX;
          }
          // Jump trigger: when Mario reaches center of a box
          boxes.forEach(box => {
            const boxCenter = box.x + box.width / 2;
            const marioCenter = mario.x + mario.width / 2;
        
            if (
              Math.abs(marioCenter - boxCenter) < 2 && // within 2px margin
              !mario.isJumping
            ) {
              mario.vy = mario.jumpStrength;
              mario.isJumping = true;
            }
          });

          // Apply gravity
          mario.vy += mario.gravity;
          mario.y += mario.vy;

          // Ground collision
          if (mario.y >= mario.groundY) {
            mario.y = mario.groundY;
            mario.vy = 0;
            mario.isJumping = false;
          }
        
          // Draw Mario
          ctx.drawImage(marioImg, mario.x, mario.y - mario.height / 2, mario.width, mario.height);
      
          boxes.forEach(box => {
            // Draw box
            const offsetY = box.bounceOffset;
            ctx.drawImage(boxImg, box.x, box.y - offsetY, box.width, box.height);
          
            // Handle bounce
            if (box.bouncing) {
              box.bounceOffset += box.bounceDirection * 2;
              if (box.bounceOffset > 20) box.bounceDirection = -1;
              if (box.bounceOffset <= 0) {
                box.bounceOffset = 0;
                box.bouncing = false;
              }
            }
          
            // Detect head hit
            const marioTop = mario.y - mario.height;
            if (
              mario.vy < 0 &&
              mario.x + mario.width > box.x &&
              mario.x < box.x + box.width &&
              marioTop <= box.y &&
              marioTop >= box.y - 5 &&
              !box.bouncing
            ) {
              box.bouncing = true;
              box.bounceDirection = 1;
            }
          });
        
          animationFrameId = requestAnimationFrame(draw);
        }

        marioImg.onload = () => {
          boxImg.onload = () => {
            draw();
          };
        };
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className='mario-animation'>
      <canvas ref={canvasRef} style={{height: "100%", width: "100%"}}/>
    </div>
  );
}

export default LoadingAnimation;