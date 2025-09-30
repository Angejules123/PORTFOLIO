// Composant pour une carte de compétence

import useOnScreen from "../Hooks/UseOnScreen";
import type { Skill } from "../interfaces/Idata";


const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    return (
        <div ref={ref} className={`skill-card flex flex-col items-center justify-center p-6 bg-gray-700 rounded-lg shadow-md transition-all duration-300 hover:bg-gray-600 hover:shadow-cyan-500/30 hover:scale-110 ${isVisible ? 'is-visible' : ''}`}>
            <div className="text-cyan-400 mb-3">{skill.icon}</div>
            <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
        </div>
    );
};

export default SkillCard;
