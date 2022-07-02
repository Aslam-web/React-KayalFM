import * as Icons from "react-icons/bi";

export default function DynamicBiIcon({ name }) {
  const IconComponent = Icons[name];

  if (!IconComponent) {
    // Return a default one
    return <Icons.BiRadioCircleMarked />;
  }

  return <IconComponent />;
}
