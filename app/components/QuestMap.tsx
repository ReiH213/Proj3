
import { getQuestions } from "@/lib/actions";
import LevelCircle from "./LevelCircle";
import styles from './components.module.css'

const QuestMap: React.FC = async() => {
  const result = await getQuestions()
  const levels = Array.from({ length: result[1] }, (_, index) => index + 1);
  
  return (
    <div className={`${styles.gameMap}`}>
      {levels.map((level) => (
        <LevelCircle key={level} level={level} />
      ))}
    </div>
  );
};

export default QuestMap;
