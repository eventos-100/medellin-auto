"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Year.module.css";

export function Year({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "filter_block-2")}
      id={_utils.cx(
        _styles,
        "w-node-_47955bc2-ba71-56fe-2cc2-82482a5ceb7b-2a5ceb7b"
      )}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "filter_block_header-2")}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(_styles, "filter-block-label")}
          tag="h3"
        >
          {"Year"}
        </_Builtin.Heading>
        <_Builtin.Link
          className={_utils.cx(_styles, "filter_clear", "helper")}
          button={false}
          fs-list-element="clear"
          fs-list-field="year"
          block=""
          options={{
            href: "#",
          }}
        >
          {"Clear"}
        </_Builtin.Link>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "filter_list", "is-1-col")}
        tag="div"
      >
        <_Builtin.FormSelect
          className={_utils.cx(_styles, "filter_select-2", "helper")}
          name="select"
          data-name="select"
          required={false}
          multiple={false}
          fs-list-field="year"
          id="select"
          options={[
            {
              t: "Select a year",
              v: "",
            },
            {
              t: "2018",
              v: "2018",
            },
            {
              t: "2019",
              v: "2019",
            },
            {
              t: "2020",
              v: "2020",
            },
            {
              t: "2021",
              v: "2021",
            },
            {
              t: "2022",
              v: "2022",
            },
            {
              t: "2023",
              v: "2023",
            },
            {
              t: "2024",
              v: "2024",
            },
          ]}
        />
      </_Builtin.Block>
    </_Component>
  );
}
