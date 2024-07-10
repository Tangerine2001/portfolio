import pythonLogo from "@/data/languages/python.svg"
import goLogo from "@/data/languages/go.svg"
import cppLogo from "@/data/languages/cpp.svg"
import javaLogo from "@/data/languages/java.svg"


export default function LanguageToSvg(props) {
    const { language } = props;

    if (language.toLowerCase() === "python") {
        return pythonLogo
    } else if (language.toLowerCase() === "go") {
        return goLogo
    } else if (language.toLowerCase() === "c++") {
        return cppLogo
    } else if (language.toLowerCase() === "java") {
        return javaLogo
    }
}