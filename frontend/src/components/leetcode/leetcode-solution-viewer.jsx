import React, {useState} from "react";
import "@/components/leetcode/styles/leetcode-solution-viewer.css";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function SolutionViewer({ solution }) {
    const [selectedLanguage, setSelectedLanguage] = useState('python');

    const handleLanguageChange = (lang) => {
        setSelectedLanguage(lang);
    };

    const customStyle = {
        margin: '0 0 0 0',
        borderRadius: '0',
        height: '400px',
        resize: 'vertical'
    };

    return (
        <div className="code-block-container">
            <div>
                <ul className="code-block-tabs">
                    {Object.keys(solution).map((lang, index) => (
                        <li
                            key={index}
                            className={selectedLanguage === lang ? 'selected' : ''}
                            onClick={() => handleLanguageChange(lang)}
                        >
                            {/*<Image src={LanguageToSvg({language: lang})}/>*/}
                            {lang}
                        </li>
                    ))}
                </ul>
            </div>
            {Object.keys(solution).map((lang, index) => (
                <div key={index} style={{ display: selectedLanguage === lang ? 'block' : 'none' }}>
                    <SyntaxHighlighter language={lang} style={oneLight} customStyle={customStyle}>
                        {solution[lang]}
                    </SyntaxHighlighter>
                </div>
            ))}
        </div>
    );
};