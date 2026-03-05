import { useRef, useState, useEffect } from "react";
import skillIcon from "./../../assets/svg/skill.svg";
import close from "./../../assets/svg/close.svg";

function SkillsSection() {
  const [skills, setSkills] = useState([
    { name: "JavaScript", color: "primary" },
    { name: "React", color: "primary" },
    { name: "Project Management", color: "primary" },
    { name: "UI Design", color: "primary" },
    { name: "TypeScript", color: "primary" },
    { name: "Figma", color: "primary" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newSkill, setNewSkill] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    if (showModal && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showModal]);
  // Add new skill
  const handleAddSkill = () => {
    const trimmedSkill = newSkill.trim();
    if (!trimmedSkill) return;
    // Prevent duplicates
    if (
      skills.some(
        (skill) => skill.name.toLowerCase() === trimmedSkill.toLowerCase(),
      )
    ) {
      alert("Skill already exists!");
      return;
    }

    setSkills([...skills, { name: trimmedSkill, color: "primary" }]);
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
          className="text-primary text-sm font-semibold hover:underline"
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
                skill.color === "primary"
                  ? "bg-primary/10 text-primary border border-primary/20"
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
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg w-80">
            <h3 className="text-lg font-bold mb-4">Add New Skill</h3>
            {/* Input field */}
            <input
              ref={inputRef} 
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              placeholder="Enter skill name"
              className="w-full p-2 mb-4 border rounded-lg dark:bg-slate-800 dark:text-white"
              onKeyDown={(e) => {
                if (e.key === "Enter") handleAddSkill();
              }}
            />

            {/* Buttons */}
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-slate-700"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-primary-hover transition-colors"
                onClick={handleAddSkill}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default SkillsSection;
