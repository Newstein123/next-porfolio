import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { LuLanguages } from "react-icons/lu";

const Language = () => {
  const router = useRouter();
  const [lang, setLang] = useState("en");

  const handleLangChange = (e) => {
    const language = e.target.value;
    router.push(`/blog/lang/${language}`);
    setLang(language);
  };

  return (
    <div className="flex items-center">
      <LuLanguages size={20} className="text-slate-700 me-2" />
      <select
        className="rounded-md outline-none bg-slate-200 p-0 text-violet-700 text-sm py-2 px-1"
        onChange={(e) => handleLangChange(e)}
        value={lang}
      >
        <option value="en"> En </option>
        <option value="my"> My </option>
      </select>
    </div>
  );
};

export default Language;
