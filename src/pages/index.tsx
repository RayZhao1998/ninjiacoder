import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faComment,
  faInbox,
  faCopyright,
  faEnvelope,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { ReactSVG } from "react-svg";
import Home from "./Home";

interface Tab {
  name: string;
  icon: IconDefinition;
  selection: {
    type: "page-change" | "popover";
    content: React.ReactElement;
  };
}

const HomeTab: Tab = {
  name: "Home",
  icon: faHome,
  selection: {
    type: "page-change",
    content: <Home />,
  },
};

const ArticleTab: Tab = {
  name: "Articles",
  icon: faInbox,
  selection: {
    type: "page-change",
    content: <Articles />,
  },
};

const PhotosTab: Tab = {
  name: "Photos",
  icon: faImage,
  selection: {
    type: "page-change",
    content: <Photos />,
  },
};

const ContactTab: Tab = {
  name: "Contact",
  icon: faComment,
  selection: {
    type: "popover",
    content: (
      <div className="absolute w-max bg-white/80 rounded-md text-xs bottom-14 overflow-hidden">
        <a
          href="#"
          className="flex p-1.5 space-x-2 items-center hover:bg-white rounded-md"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            fontSize={14}
            className="w-4 h-4"
          />
          <p>ninjiacoder@gmail.com</p>
        </a>
        <a
          href="https://github.com/RayZhao1998"
          className="flex p-1.5 space-x-2 items-center hover:bg-white rounded-md"
        >
          <ReactSVG
            src="github.svg"
            width={16}
            height={16}
            className="w-4 h-4"
          />
          <p>@RayZhao1998</p>
        </a>
        <a
          href="https://twitter.com/RayZhao98"
          className="flex p-1.5 space-x-2 items-center hover:bg-white rounded-md"
        >
          <ReactSVG
            src="twitter.svg"
            width={16}
            height={16}
            className="w-4 h-4"
          />
          <p>@RayZhao98</p>
        </a>
      </div>
    ),
  },
};

const CopyrightTab: Tab = {
  name: "Copyright",
  icon: faCopyright,
  selection: {
    type: "popover",
    content: (
      <div className="absolute w-max p-1.5 bg-white/80 rounded-md text-xs bottom-14 space-y-1">
        <div className="flex space-x-2">
          <img
            src="https://nextjs.org/static/favicon/favicon-32x32.png"
            className="w-4 h-4"
          />
          <p>Powered by Next.js</p>
        </div>
        <div className="flex space-x-2">
          <FontAwesomeIcon
            icon={faCopyright}
            fontSize={16}
            className="w-4 h-4"
          />
          <p>2023-2023 RayZhao</p>
        </div>
      </div>
    ),
  },
};

const tabs = [
  [HomeTab],
  // [ContactTab, CopyrightTab],
];

export default function Main() {
  const [selectedTab, setSelectedTab] = useState<Tab>(HomeTab);

  const displayContent = (() => {
    switch (selectedTab.name) {
      case "Home":
        return <Home />;
      case "Articles":
        return <Articles />;
      default:
        return <Home />;
    }
  })();

  return (
    <div className="w-full h-screen relative">
      <div>{displayContent}</div>
      <div className="absolute bottom-4 flex justify-center w-full">
        <SideBar
          selectedTab={selectedTab}
          onChangeTab={(tab) => setSelectedTab(tab)}
        />
      </div>
    </div>
  );
}

function Articles() {
  return <div className="text-white">Articles</div>;
}

function Photos() {
  return <div className="text-white">Photos</div>;
}

const SideBar = (props: {
  selectedTab: Tab;
  onChangeTab: (tab: Tab) => void;
}) => {
  const { selectedTab, onChangeTab } = props;
  return (
    <div
      className="flex p-2 space-x-4 rounded-lg items-center border border-white/20"
      style={{
        background:
          "linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 100%)",
      }}
    >
      {tabs.map((section, index) => {
        return (
          <div className="flex space-x-4 items-center" key={index}>
            {index > 0 && <div className="w-px h-8 bg-white/20" />}
            {section.map((tab) => {
              return (
                <SideBarItem
                  tab={tab}
                  isSelected={selectedTab.name === tab.name}
                  onSelect={() => {
                    onChangeTab(tab);
                  }}
                  key={tab.name}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

const SideBarItem = (props: {
  tab: Tab;
  isSelected: boolean;
  onSelect: () => void;
}) => {
  const { tab, isSelected, onSelect } = props;
  const [isHovering, setIsHovering] = useState(false);
  const [showDetailPopover, setShowDetailPopover] = useState(false);

  useEffect(() => {
    document.addEventListener("click", () => {
      setShowDetailPopover(false);
    });
  }, []);

  return (
    <div className="relative">
      {isHovering && (
        <div className="absolute p-1.5 bg-white/80 rounded-md text-xs -top-10">
          {tab.name}
        </div>
      )}
      {showDetailPopover && tab.selection.content}
      <div
        onClickCapture={(event) => {
          if (tab.selection.type === "page-change") {
            onSelect();
          } else {
            setIsHovering(false);
            event.nativeEvent.stopImmediatePropagation();
            setShowDetailPopover(true);
          }
        }}
        onMouseOver={() => {
          if (tab.selection.type === "page-change" || !showDetailPopover) {
            setIsHovering(true);
          }
        }}
        onMouseOut={() => {
          setIsHovering(false);
        }}
        className="relative"
      >
        <FontAwesomeIcon icon={tab.icon} className="p-2 rounded-md bg-white" />
        {isSelected && (
          <div className="bg-white/80 w-1 h-1 rounded-full absolute top-9 left-1/2 transform -translate-x-1/2" />
        )}
      </div>
    </div>
  );
};
