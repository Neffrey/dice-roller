// FRAMEWORK
import { AspectRatio, createIcon, HStack, Icon } from "@chakra-ui/react";
import React from "react";

// Context Type
interface PropTypes {
  sides: number;
}

const dieSvgs = {
  viewBox: "0 0 864 864",
  d4: {
    displayName: "4 Sided Die - Tetrahedron",
    path: "M779.47 721H67.98l355.74-203.99L779.47 721zM453.33 463.79V82.42l337.03 603.1-337.03-221.73zM408.99 463.79V82.42L71.96 685.52l337.03-221.73z",
  },
  d6: {
    displayName: "6 Sided Die - Cube",
    path: "m87.61 284.18.51 348 315.39 183.78 1.65-358.25L87.61 284.18zM456.72 457.95v358.24l317.05-184.24V283.94L456.72 457.95zM115.72 241.24l310.05-174 321 174-315.52 178.03-315.53-178.03z",
  },
  d8: {
    displayName: "8 Sided Die - Octahedron",
    path: "M757.72 619.95H153.83l301.95 174 301.94-174zM757.72 582.87H153.83L455.78 57l301.94 525.87zM796.68 558.54 497.4 57l279.61 177.01 19.67 324.53zM113.64 558.54 412.92 57 133.31 234.01l-19.67 324.53z",
  },
  d10: {
    displayName: "10 Sided Die - Deltohedron",
    path: "M391.6 56 63.74 438.79l157.82-44.15L391.6 56zM430.65 28 611.5 396.22 430.65 471 254.5 398.19 430.65 28zM475.5 56l327.86 382.79-157.82-44.15L475.5 56zM451.5 808V497.59l178.69-70.92 173.17 48.82L451.5 808zM415.6 808V497.59l-178.69-70.92-173.17 48.82L415.6 808z",
  },
  d12: {
    displayName: "12 Sided Die - Dodecahedron",
    path: "m311.52 67.24-75.67 245.65 204.7 143.29 204.71-143.29-81.88-245.65H311.52zM604.32 77.47 829.5 472.02 686.2 312.89 604.32 77.47zM665.73 343.59l153.53 153.53L665.73 755.1l-204.71-63.5V488.18l204.71-144.59zM215.38 343.59 61.84 497.12 215.37 755.1l204.71-63.5V488.18l-204.7-144.59zM281.06 77.47 55.88 472.02l143.3-159.13 81.88-235.42zM225.61 783.71H655.5L440.55 717.2l-214.94 66.51z",
  },
  d20: {
    displayName: "20 Sided Die - Icosahedron",
    path: "M441 797.53V644h261.12L441 797.53zM394 797.53V644H127.07L394 797.53zM377.62 609.71 243 374 108.64 609.71h268.98zM282 361h272L416.18 596.98 282 361zM274.66 319 416.18 67.24 561.25 319H274.66zM387.25 67.24l-157.8 245.65L98.4 234.31 387.25 67.24zM452.93 67.24l144.11 245.65L735.25 231 452.93 67.24zM745.49 261.71v307.06L612.43 343.59l133.06-81.88zM90.42 261.71v307.06l133.06-225.18-133.06-81.88zM452.9 610l134.62-235.71L721.89 610H452.9z",
  },
};

// Component Function
const DieIcon: React.FC<PropTypes> = ({ sides }) => {
  // Declare svg vars & set defaults
  var DisplayName = dieSvgs.d20.displayName;
  var Path = dieSvgs.d20.path;
  var Viewbox = dieSvgs.viewBox;

  // Change SVG vars depending on sides
  switch (sides) {
    case 20:
      DisplayName = dieSvgs.d20.displayName;
      Path = dieSvgs.d20.path;
      break;
    case 4:
      DisplayName = dieSvgs.d4.displayName;
      Path = dieSvgs.d4.path;
      break;
    case 6:
      DisplayName = dieSvgs.d6.displayName;
      Path = dieSvgs.d6.path;
      break;
    case 8:
      DisplayName = dieSvgs.d8.displayName;
      Path = dieSvgs.d8.path;
      break;
    case 10:
      DisplayName = dieSvgs.d10.displayName;
      Path = dieSvgs.d10.path;
      break;
    case 12:
      DisplayName = dieSvgs.d12.displayName;
      Path = dieSvgs.d12.path;
      break;
    case 100:
      DisplayName = dieSvgs.d10.displayName;
      Path = dieSvgs.d10.path;
      break;
    default:
      break;
  }
  const IconSVG = createIcon({
    viewBox: Viewbox,
    displayName: DisplayName,
    d: Path,
  });
  if (sides === 100) {
    return (
      <HStack>
        <AspectRatio as="div" ratio={1} width={12}>
          <Icon as={IconSVG} />
        </AspectRatio>
        <AspectRatio as="div" ratio={1} width={12}>
          <Icon as={IconSVG} />
        </AspectRatio>
      </HStack>
    );
  }

  return <Icon as={IconSVG} />;
};
export default DieIcon;
