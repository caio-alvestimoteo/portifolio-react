import type { FC } from 'react';
import Chip from '../../ui/Chip';
import { projectData } from '../../data/portfolio';

const Project: FC = () => {
  return (
    <section className="project" id="project" data-name="JAIME">
      <div className="section-inner">
        <div className="eyebrow reveal">{projectData.eyebrow}</div>
        <h2 className="reveal" style={{ ['--i' as string]: 1 }}>
          {projectData.title}.
        </h2>
        <div className="project__layout">
          <div>
            <p className="project__lead reveal" style={{ ['--i' as string]: 2 }}>
              {projectData.intro}
            </p>
            <blockquote className="project__quote reveal" style={{ ['--i' as string]: 3 }}>
              "{projectData.quote}"
            </blockquote>
            <div className="project__tags reveal" style={{ ['--i' as string]: 4 }}>
              {projectData.tags.map((tag) => (
                <Chip key={tag}>{tag}</Chip>
              ))}
            </div>
          </div>
          <div>
            {projectData.panels.map((panel, index) => (
              <div key={panel.title} className="project__panel reveal reveal--from-right" style={{ ['--i' as string]: index + 2 }}>
                <strong className="project__panel-title">{panel.title}</strong>
                <div className="project__panel-eyebrow">{panel.eyebrow}</div>
                {panel.blocks.map((block) => (
                  <div key={block.label}>
                    <label>{block.label}</label>
                    <p>{block.text}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
