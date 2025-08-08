"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SelectField.module.css";

export function SelectField({ as: _Component = _Builtin.FormSelect }) {
  return (
    <_Component
      className={_utils.cx(_styles, "condition_select", "helper")}
      name="Condition-Field"
      data-name="Condition Field"
      required={false}
      multiple={false}
      fs-list-element="condition-field"
      id="Condition-Field"
      options={[
        {
          t: "Select field",
          v: "",
        },
        {
          t: "Name",
          v: "name",
        },
        {
          t: "Make",
          v: "make",
        },
        {
          t: "Color",
          v: "color",
        },
        {
          t: "Year",
          v: "year",
        },
        {
          t: "Price",
          v: "price",
        },
      ]}
    />
  );
}
