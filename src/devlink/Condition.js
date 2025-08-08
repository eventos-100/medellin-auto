"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Condition.module.css";

export function Condition({ as: _Component = _Builtin.FormSelect }) {
  return (
    <_Component
      className={_utils.cx(_styles, "condition_select", "helper")}
      name="Condition-Operator"
      data-name="Condition Operator"
      required={false}
      multiple={false}
      fs-list-element="condition-operator"
      id="Condition-Operator"
      options={[
        {
          t: "Is equal to",
          v: "equal",
        },
        {
          t: "Is not equal to",
          v: "not-equal",
        },
        {
          t: "Contains",
          v: "contain",
        },
        {
          t: "Does not contain",
          v: "not-contain",
        },
        {
          t: "Starts with",
          v: "start",
        },
        {
          t: "Is greater than",
          v: "greater",
        },
        {
          t: "Is greater or equal than",
          v: "greater-equal",
        },
        {
          t: "Is less than",
          v: "less",
        },
        {
          t: "Is less or equal than",
          v: "less-equal",
        },
        {
          t: "Any contains",
          v: "contain",
        },
        {
          t: "All contain",
          v: "contain",
        },
        {
          t: "Is before",
          v: "less",
        },
        {
          t: "Is after",
          v: "greater",
        },
        {
          t: "Is empty",
          v: "empty",
        },
        {
          t: "Is not empty",
          v: "not-empty",
        },
      ]}
    />
  );
}
