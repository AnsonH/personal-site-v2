import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { bp } from "../../styles";

/* Example Usage:
 *
 * <Tabs>
 *   <Tabs.TabList>
 *     <Tabs.Tab index={0}>Tab 1</Tabs.Tab>
 *     <Tabs.Tab index={1}>Tab 2</Tabs.Tab>
 *   </Tabs.TabList>
 *   <Tabs.Panels>
 *     <Tabs.Panel index={0}>
 *       <p>Tab 1 content</p>
 *     </Tabs.Panel>
 *     <Tabs.Panel index={1}>
 *       <p>Tab 2 content</p>
 *     </Tabs.Panel>
 *   </Tabs.Panels>
 * </Tabs>
 */

///// Styles /////

const TabWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${bp.lg} {
    flex-direction: row;
  }
`;

const TabListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;

  @media ${bp.lg} {
    display: block;
    width: var(--tab-button-width);
    height: max-content; // Don't take more height than its content
  }
`;

const TabHighlight = styled.div`
  height: 0.2rem;
  width: var(--tab-button-width);
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: var(--light-blue);
  transform: translateX(calc(${(props) => props.activeTab} * var(--tab-button-width)));
  transition: transform 250ms var(--easing);

  @media ${bp.lg} {
    height: var(--tab-button-height);
    width: 0.2rem;
    top: 0;
    left: auto; // Disable left: 0;
    bottom: auto; // Disable bottom: 0;
    right: 0;
    transform: translateY(calc(${(props) => props.activeTab} * var(--tab-button-height)));
  }
`;

const TabButton = styled.button`
  width: var(--tab-button-width);
  height: var(--tab-button-height);
  padding: 0.5rem;
  border-right: none;
  border-bottom: 0.2rem solid var(--dark-cyan);
  color: ${(props) => (props.isActive ? "var(--light-blue)" : "var(--fg1)")};
  font-family: "Ubuntu", var(--font-sans-system);
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  transition: all 250ms var(--easing);

  @media ${bp.lg} {
    border-right: 0.2rem solid var(--dark-cyan);
    border-bottom: none;
  }

  &:hover,
  &:focus {
    color: var(--light-blue);
    background-color: var(--light-blue-hover);
  }
`;

const TabPanels = styled.div`
  position: relative;

  @media ${bp.lg} {
    margin-left: 4rem;
  }
`;

const TabPanel = styled.div`
  position: absolute; // Take the section content out of flow
  top: 0;
  left: 0;
  opacity: 0; // Make them invisible initially
  visibility: hidden;

  &[data-visible="true"] {
    position: relative; // Set visible panel back to relative positioning
    padding-top: 3rem;
    opacity: 1;
    transition: opacity 250ms var(--easing);
    visibility: visible;
    z-index: 1; // Visible content stacks on top

    @media ${bp.lg} {
      padding-top: 0;
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }
`;

///// Components /////

const TabContext = createContext(); // Context for storing active tab's index

function Tabs({ children }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const data = { activeTabIndex, setActiveTabIndex };

  return (
    <TabContext.Provider value={data}>
      <TabWrapper>{children}</TabWrapper>
    </TabContext.Provider>
  );
}

function TabList({ children }) {
  const { activeTabIndex } = useContext(TabContext);

  return (
    <TabListWrapper role="tablist">
      {children}
      <TabHighlight activeTab={activeTabIndex} />
    </TabListWrapper>
  );
}

function Tab({ children, index }) {
  const { activeTabIndex, setActiveTabIndex } = useContext(TabContext);

  return (
    <TabButton
      isActive={index === activeTabIndex}
      onClick={() => setActiveTabIndex(index)}
      role="tab"
      aria-selected={(activeTabIndex === index).toString()}
    >
      {children}
    </TabButton>
  );
}

function Panels({ children }) {
  return <TabPanels>{children}</TabPanels>;
}

function Panel({ children, index }) {
  const { activeTabIndex } = useContext(TabContext);

  return (
    <TabPanel
      data-visible={(activeTabIndex === index).toString()}
      role="tabpanel"
      aria-hidden={activeTabIndex !== index}
    >
      {children}
    </TabPanel>
  );
}

///// Dot Notation /////

Tabs.TabList = TabList;
Tabs.Tab = Tab;
Tabs.Panels = Panels;
Tabs.Panel = Panel;

///// PropTypes /////

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
};

TabList.propTypes = {
  children: PropTypes.node.isRequired,
};

Tab.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  index: PropTypes.number.isRequired,
};

Panels.propTypes = {
  children: PropTypes.node.isRequired,
};

Panel.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  index: PropTypes.number.isRequired,
};

export default Tabs;
