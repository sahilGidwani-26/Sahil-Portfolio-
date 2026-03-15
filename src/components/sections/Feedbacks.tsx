import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { fadeIn } from "../../utils/motion";
import { achievements } from "../../constants";
import { Header } from "../atoms/Header";
import { config } from "../../constants/config";

const AchievementCard: React.FC<{
  index: number;
  title: string;
  description: string;
}> = ({ index, title, description }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 xs:w-[320px] w-full rounded-3xl p-10"
  >
    <div className="mt-1">
      <p className="text-[20px] font-bold text-white">{title}</p>

      <p className="text-secondary mt-4 text-[16px] tracking-wider">
        {description}
      </p>
    </div>
  </motion.div>
);

const Achievements = () => {
  return (
    <div className="bg-black-100 mt-12 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary min-h-[300px] rounded-2xl`}
      >
        <Header useMotion={true} {...config.sections.feedbacks} />
      </div>

      <div
        className={`${styles.paddingX} -mt-20 flex flex-wrap gap-7 pb-14 max-sm:justify-center`}
      >
        {achievements.map((item, index) => (
          <AchievementCard key={item.title} index={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Achievements;