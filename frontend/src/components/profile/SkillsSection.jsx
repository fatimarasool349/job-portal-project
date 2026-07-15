import { useState } from "react";
import skillIcon from "./../../assets/icons/skill.svg";
import close from "./../../assets/icons/close.svg";
import { initialSkills } from "../../constants";
import SkillModel from "../../modal/SkillModal";

function SkillsSection() {
 const [skills, setSkills] = useState(initialSkills);

  const [showModal, setShowModal] = useState(false);
  const [newSkill, setNewSkill] = useState("");
 
  // Add new skill
  const handleAddSkill = () => {
    const trimmedSkill = newSkill.trim();
    if (!trimmedSkill) {return;}
    // Prevent duplicates
    if (
      skills.some(
        (skill) => skill.name.toLowerCase() === trimmedSkill.toLowerCase(),
      )
    ) {
      alert("Skill already exists!");
      return;
    }

    setSkills([...skills, { name: trimmedSkill, color: "text-blue-600" }]);
    setNewSkill("");
    setShowModal(false);
  };

  // Remove skill
  const removeSkill = (skillName) => {
    setSkills(skills.filter((skill) => skill.name !== skillName));
  };
  return (
    <section className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <img src={skillIcon} alt="skills" />
          Skills
        </h3>
        <button
          className="text-blue-600 text-sm font-semibold hover:underline"
          onClick={() => setShowModal(true)}
        >
          Add New
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium
              ${
                skill.color === "text-blue-600"
                  ? "bg-blue-600/10 text-blue-600 border border-blue-600/20"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
              }`}
          >
            {skill.name}
            <img
              src={close}
              alt="close"
              className="cursor-pointer"
              onClick={() => removeSkill(skill.name)}
            />
          </div>
        ))}
      </div>
      {/* Modal */}
      <SkillModel
        show={showModal}
        onClose={() => setShowModal(false)}
        onAdd={handleAddSkill}
        newSkill={newSkill}
        setNewSkill={setNewSkill}
      />
    </section>
  );
}

export default SkillsSection;
