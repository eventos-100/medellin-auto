import * as React from "react";
import * as Types from "./types";

declare function CardComponents(props: {
  as?: React.ElementType;
  name?: React.ReactNode;
  card?: Types.Asset.Image;
  brandName?: React.ReactNode;
  typeName?: React.ReactNode;
  year?: React.ReactNode;
  prices?: React.ReactNode;
}): React.JSX.Element;
