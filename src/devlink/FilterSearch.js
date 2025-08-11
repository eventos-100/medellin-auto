"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./FilterSearch.module.css";

export function FilterSearch({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "filter_block-2")} tag="div">
      <_Builtin.FormTextInput
        className={_utils.cx(_styles, "filter_search", "helper")}
        name="field"
        maxLength={256}
        data-name="Field"
        placeholder="Search here..."
        disabled={false}
        type="text"
        required={true}
        autoFocus={false}
        fs-list-field="*"
        id="field"
      />
    </_Component>
  );
}
