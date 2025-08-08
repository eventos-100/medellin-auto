"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Value.module.css";

export function Value({ as: _Component = _Builtin.FormSelect }) {
  return (
    <_Component
      className={_utils.cx(_styles, "condition_select", "helper")}
      name="Select-Value"
      data-name="Select Value"
      required={false}
      multiple={false}
      fs-list-element="condition-value"
      id="Select-Value"
      options={[
        {
          t: "Select a value",
          v: "",
        },
      ]}
    />
  );
}
