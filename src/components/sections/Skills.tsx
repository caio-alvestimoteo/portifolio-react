import type { FC } from 'react';
import { skillsData, stackGroups } from '../../data/portfolio';

const Skills: FC = () => {
  return (
    <section className="skills" id="skills" data-name="STACK">
      <div className="section-inner">
        <div className="eyebrow reveal">{skillsData.eyebrow}</div>
        <h2 className="reveal" style={{ ['--i' as string]: 1 }}>
          {skillsData.title.toUpperCase()}.
        </h2>
        <div className="skills__subtitle reveal" style={{ ['--i' as string]: 2 }}>
          {skillsData.sub}
        </div>
        <div className="skills__grid reveal">
          {stackGroups.map((group) => (
            <div key={group.num} className={`skills__group${group.featured ? ' skills__group--featured' : ''}`}>
              <div className="skills__group-num">{group.num}</div>
              <div className="skills__group-title">{group.title}</div>
              <div className="skills__group-sub">▸ {group.sub}</div>
              <div className="skills__group-tags">
                {group.tags.map((tag) => (
                  <span key={tag.label} className={`skills__tag${tag.accent ? ` skills__tag--${tag.accent}` : ''}`}>
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
