import * as React from "react";
import { black } from "../shared/styles/colors";
import { StyleSheet, Text } from "react-native";
import { StyleArray } from "../shared/types";

// Component
// ----------------------------------------------------------------------------
interface Props {
  children?: React.ReactNode;
  extraStyles?: StyleArray;
  font?: Font;
}

const TextComponent: React.SFC<Props> = ({
  children,
  extraStyles,
  font
}: Props) => {
  /*  extraStyles will always be an object. Since we don't require extraStyles,
      ts thinks that the prop may be undefined, but we actually have a default
      prop for it.
  */
  const extraStylesCasted = extraStyles as StyleArray;

  return (
    <Text style={[styles.text, font && styles[font], ...extraStylesCasted]}>
      {children}
    </Text>
  );
};

export enum Font {
  SystemBold = "SystemBold",
  SystemRegular = "SystemRegular",
  SystemSemibold = "SystemSemibold"
}

TextComponent.defaultProps = {
  extraStyles: [{}],
  font: Font.SystemRegular
};

// Styles
// ----------------------------------------------------------------------------
const systemFont = "system font";

const styles = StyleSheet.create({
  // fonts
  [Font.SystemRegular]: {
    fontFamily: systemFont,
    fontWeight: "400"
  },
  [Font.SystemSemibold]: {
    fontFamily: systemFont,
    fontWeight: "600"
  },
  [Font.SystemBold]: {
    fontFamily: systemFont,
    fontWeight: "700"
  },
  //
  text: {
    fontSize: 12,
    color: black
  }
});

export default TextComponent;
