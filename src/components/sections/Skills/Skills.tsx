import type { FC } from 'react';
import { skillsData, stackGroups } from '../../../data/portfolio';
import { SectionInner, Eyebrow } from '../../shared.styles';
import { SkillsSection, Subtitle, Grid, Group, GroupNum, GroupTitle, GroupSub, GroupTags, Tag } from './Skills.styles';

const Skills: FC = () => {
  return (
    <SkillsSection id="skills" data-name="STACK">
      <SectionInner>
        <Eyebrow className="reveal">{skillsData.eyebrow}</Eyebrow>
        <h2 className="reveal" style={{ ['--i' as string]: 1 }}>
          {skillsData.title.toUpperCase()}.
        </h2>
        <Subtitle className="reveal" style={{ ['--i' as string]: 2 }}>
          {skillsData.sub}
        </Subtitle>
        <Grid className="reveal">
          {stackGroups.map((group) => (
            <Group key={group.num} $featured={group.featured}>
              <GroupNum $featured={group.featured}>{group.num}</GroupNum>
              <GroupTitle>{group.title}</GroupTitle>
              <GroupSub $featured={group.featured}>▸ {group.sub}</GroupSub>
              <GroupTags>
                {group.tags.map((tag) => (
                  <Tag key={tag.label} $accent={tag.accent as 'red' | 'cyan' | undefined} $featured={group.featured}>
                    {tag.label}
                  </Tag>
                ))}
              </GroupTags>
            </Group>
          ))}
        </Grid>
      </SectionInner>
    </SkillsSection>
  );
};

export default Skills;
