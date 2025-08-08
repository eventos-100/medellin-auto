"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Makes.module.css";

export function Makes({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "filter_block-2")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "filter_block_header-2")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "filter_block_title-6")}
          id={_utils.cx(
            _styles,
            "w-node-_1cdbd45d-0dd6-9b1a-3fad-90e38d882841-8d88283f"
          )}
          tag="div"
        >
          {"Makes"}
        </_Builtin.Block>
        <_Builtin.Link
          className={_utils.cx(_styles, "filter_clear", "helper")}
          button={false}
          fs-list-element="clear"
          fs-list-field="make"
          block=""
          options={{
            href: "#",
          }}
        >
          {"Clear"}
        </_Builtin.Link>
      </_Builtin.Block>
      <_Builtin.NotSupported _atom="DynamoWrapper" />
    </_Component>
  );
}
