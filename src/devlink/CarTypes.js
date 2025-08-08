"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CarTypes.module.css";

export function CarTypes({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "filter_block-2")}
      id={_utils.cx(
        _styles,
        "w-node-a333ce9b-41bc-22cd-6a44-c92cabc40fff-abc40fff"
      )}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "filter_block_header-2")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "filter_block_title-6")}
          id={_utils.cx(
            _styles,
            "w-node-a333ce9b-41bc-22cd-6a44-c92cabc41001-abc40fff"
          )}
          tag="div"
        >
          {"Car Types"}
        </_Builtin.Block>
        <_Builtin.Link
          className={_utils.cx(_styles, "filter_clear", "helper")}
          button={false}
          fs-list-element="clear"
          fs-list-field="car_type"
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
