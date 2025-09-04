import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Leaf } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 200), // Show "বাঁচো"
      setTimeout(() => setStep(2), 1000), // Show leaves icon
      setTimeout(() => setStep(3), 1600), // Show "Save the Nature"
      setTimeout(() => setStep(4), 2200), // Center everything
      setTimeout(() => {
        onComplete();
        navigate('/portal');
      }, 3500) // Navigate after 3.5 seconds
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete, navigate]);

  return (
    <div className="fixed inset-0 bg-splash-bg flex items-center justify-center overflow-hidden">
      {/* Background particles effect */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className={`text-center transition-all duration-1000 ${step >= 4 ? 'transform translate-y-0' : ''}`}>
        {/* Main title "বাঁচো" */}
        <div 
          className={`text-8xl font-black text-primary mb-6 transition-all duration-800 ${
            step >= 1 ? 'animate-expand opacity-100' : 'opacity-0 scale-0'
          }`}
        >
          বাঁচো
        </div>

        {/* Green leaves icon */}
        <div 
          className={`flex justify-center mb-6 transition-all duration-600 ${
            step >= 2 ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex space-x-2">
            <Leaf className="w-8 h-8 text-primary animate-pulse" />
            <Leaf className="w-6 h-6 text-primary-light animate-pulse" style={{ animationDelay: '0.2s' }} />
            <Leaf className="w-8 h-8 text-primary animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>

        {/* Subtitle */}
        <div 
          className={`text-2xl font-medium text-primary-light tracking-wide transition-all duration-800 ${
            step >= 3 ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-4'
          }`}
        >
          Save the Nature
        </div>

        {/* Loading indicator */}
        <div 
          className={`mt-12 flex justify-center transition-all duration-500 ${
            step >= 3 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-primary rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;