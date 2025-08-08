"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Types.module.css";

export function Types({ as: _Component = _Builtin.Block }) {
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
            "w-node-a8c9b001-495d-89a9-5310-3ed4fe76dd0d-fe76dd0b"
          )}
          tag="div"
        >
          {"Types"}
        </_Builtin.Block>
        <_Builtin.Link
          className={_utils.cx(_styles, "filter_clear", "helper")}
          button={false}
          fs-list-element="clear"
          fs-list-field="type"
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
