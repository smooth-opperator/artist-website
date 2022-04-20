import React, { useState, useEffect, useRef, useMemo } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseOutline } from 'react-icons/io5';
import debounce from 'lodash.debounce';

import { useSidebarQuery } from "../../generated/graphql";
import { StickyContainer, FixedSidebar, Title, Subtitle, Section, ListItem, MobileHeader, MobileDrawerOpen, MobileDrawerClose } from "./styles";
import LoadingSpinner from "../LoadingSpinner";

enum SectionEnum {
  Videos = "VIDEOS",
  Installations = "INSTALLATIONS",
  Exhibitions = "EXHIBITIONS",
  Info = "INFO",
}

type excludedOptions =
  | typeof SectionEnum.Info
type GallerySectionEnum = Exclude<SectionEnum, excludedOptions>;

const Sidebar: React.FC = () => {
  const { data, error, loading } = useSidebarQuery();
  const [activeSection, setActiveSection] = useState('');
  const [activeItem, setActiveItem] = useState('');
  const [drawerExpanded, setDrawerExpanded] = useState(false);
  const sectionRef = useRef<null | HTMLElement>(null);

  const { exhibitions, installations, videos, infos } = data || {};

  const gallerySectionHash = {
    [SectionEnum.Exhibitions]: exhibitions,
    [SectionEnum.Installations]: installations,
    [SectionEnum.Videos]: videos,
  }

  const handleScroll = useMemo(() =>
    debounce(() => {
      const scrollPosition = window.scrollY + 200;
      let itemId = null;

      const findElem = (group: { id: string }[]) =>
        group.find(item => {
          const elem = document.getElementById(item.id);
          if (elem) {
            const { offsetBottom, offsetTop } = getDimensions(elem);

            const isActiveItem = !!(scrollPosition > offsetTop && scrollPosition < offsetBottom);

            if (isActiveItem) itemId = item.id;
            return isActiveItem;
          }
          return null;
        });


      // selects the corresponding category in the sidebar to set as active section
      if (exhibitions || installations || videos || infos) {
        const selectedExhibition = exhibitions && findElem(exhibitions);
        const selectedInstallation = installations && findElem(installations);
        const selectedVideo = videos && findElem(videos);
        const selectedInfo = infos && findElem([{ id: "cv" }, { id: 'news' }, { id: 'imprint' }]);

        if (selectedExhibition && itemId) {
          setActiveItem(itemId);
          setActiveSection(SectionEnum.Exhibitions);
        }

        if (selectedInstallation && itemId) {
          setActiveItem(itemId)
          setActiveSection(SectionEnum.Installations);
        }

        if (selectedVideo && itemId) {
          setActiveItem(itemId)
          setActiveSection(SectionEnum.Videos);
        }

        if (selectedInfo && itemId) {
          setActiveItem(itemId)
          setActiveSection(SectionEnum.Info);
        }

      }
    }, 100), [exhibitions, installations, videos, infos]
  );


  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error || !data) {
    return null;
  }

  const getDimensions = (elem: HTMLElement) => {
    const { offsetTop, offsetHeight } = elem;
    const offsetBottom = offsetTop + offsetHeight;
    return { offsetTop, offsetBottom };
  }

  const scrollTo = (elementId: string) => {
    const sectionElem = document.getElementById(elementId);

    if (sectionElem !== null) {
      sectionRef.current = sectionElem;
      const { offsetTop } = sectionRef.current;

      const scrollToSection = () => window.scrollTo({ top: offsetTop - 120, left: 0, behavior: 'smooth' })
      scrollToSection();
    }
  }

  const selectSection = (sectionId: string) => {
    setActiveSection(sectionId);
    scrollTo(sectionId);
  }

  return (
    <React.Fragment>
      <MobileHeader>
        <MobileDrawerOpen onClick={() => setDrawerExpanded(true)}><GiHamburgerMenu size={16} color="white" /></MobileDrawerOpen>
      </MobileHeader>

      <StickyContainer isExpanded={drawerExpanded}>
        <MobileDrawerClose onClick={() => setDrawerExpanded(false)}><IoCloseOutline size={24} /></MobileDrawerClose>
        <FixedSidebar>
          <Title>JULIE OPPERMANN</Title>
          {Object.keys(gallerySectionHash).map((section) => (
            <Section isExpanded={!!(activeSection === section)} key={`sidebar-section-${section}`}>
              <Subtitle
                onClick={() => selectSection(section)}
                isActive={!!(activeSection === section)}>
                {section.toLowerCase()}
              </Subtitle>
              {gallerySectionHash[(section as GallerySectionEnum)]?.map(({ id, title }) => (
                <ListItem key={id} onClick={() => scrollTo(id)} isActive={!!(activeItem === id)}>{title?.split(",")[0]}</ListItem>
              ))}
            </Section>
          ))}
          {infos && (
            <Section isExpanded={!!(activeSection === SectionEnum.Info)} key={`sidebar-section-info`}>
              <Subtitle
                onClick={() => selectSection(SectionEnum.Info)}
                isActive={!!(activeSection === SectionEnum.Info)}>
                {SectionEnum.Info.toLowerCase()}
              </Subtitle>
              <ListItem key='news' onClick={() => scrollTo('news')} isActive={!!(activeItem === 'news')}>News</ListItem>
              <ListItem key='cv' onClick={() => scrollTo('cv')} isActive={!!(activeItem === 'cv')}>CV</ListItem>
              <ListItem key='imprint' onClick={() => scrollTo('imprint')} isActive={!!(activeItem === 'imprint')}>Imprint</ListItem>
            </Section>
          )}
        </FixedSidebar>
      </StickyContainer>
    </React.Fragment>
  );
};

export default Sidebar;
