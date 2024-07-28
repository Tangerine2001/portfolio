'use client'

import "@/components/common/styles/typing-effect.css"
import { useEffect, useState } from 'react';

export default function TypingEffect({ titles }) {
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(200);

    useEffect(() => {
        let typingTimeout;

        const type = () => {
            const currentTitle = titles[currentTitleIndex];
            if (isDeleting) {
                setDisplayedText(prev => prev.substring(0, prev.length - 1));
                setTypingSpeed(100);
            } else {
                setDisplayedText(prev => currentTitle.substring(0, prev.length + 1));
                setTypingSpeed(50);
            }

            if (!isDeleting && displayedText === currentTitle) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && displayedText === '') {
                setIsDeleting(false);
                setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
            }

            typingTimeout = setTimeout(type, typingSpeed);
        };

        typingTimeout = setTimeout(type, typingSpeed);

        return () => clearTimeout(typingTimeout);
    }, [displayedText, isDeleting, typingSpeed, titles, currentTitleIndex]);

    return (
        <div className="typing-effect-container">
            <h2>
                {displayedText.split('').map((char, index) => (
                    <span
                        key={index}
                        style={{
                            color: isDeleting && index === displayedText.length - 1 ? '#25c9b4a0' : '#25c9b4',
                            transition: 'color 0.5s ease'
                        }}
                    >
                    {char}
                    </span>
                ))}
                <span className="typing-effect-cursor">_</span>
            </h2>
        </div>
    );
}