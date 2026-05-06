import type { FC } from 'react';
import Chip from '../../../ui/Chip';
import { projectData } from '../../../data/portfolio';
import { SectionInner, Eyebrow } from '../../shared.styles';
import { ProjectSection, Layout, Lead, Quote, Tags, Panel, PanelTitle, PanelEyebrow } from './Project.styles';

const Project: FC = () => {
  return (
    <ProjectSection id="project" data-name="JAIME">
      <SectionInner>
        <Eyebrow className="reveal">{projectData.eyebrow}</Eyebrow>
        <h2 className="reveal" style={{ ['--i' as string]: 1 }}>
          {projectData.title}.
        </h2>
        <Layout>
          <div>
            <Lead className="reveal" style={{ ['--i' as string]: 2 }}>
              {projectData.intro}
            </Lead>
            <Quote className="reveal" style={{ ['--i' as string]: 3 }}>
              "{projectData.quote}"
            </Quote>
            <Tags className="reveal" style={{ ['--i' as string]: 4 }}>
              {projectData.tags.map((tag) => (
                <Chip key={tag}>{tag}</Chip>
              ))}
            </Tags>
          </div>
          <div>
            {projectData.panels.map((panel, index) => (
              <Panel key={panel.title} className="reveal reveal--from-right" style={{ ['--i' as string]: index + 2 }}>
                <PanelTitle>{panel.title}</PanelTitle>
                <PanelEyebrow>{panel.eyebrow}</PanelEyebrow>
                {panel.blocks.map((block) => (
                  <div key={block.label}>
                    <label>{block.label}</label>
                    <p>{block.text}</p>
                  </div>
                ))}
              </Panel>
            ))}
          </div>
        </Layout>
      </SectionInner>
    </ProjectSection>
  );
};

export default Project;
