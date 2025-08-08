"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ConditionDelete.module.css";

export function ConditionDelete({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "condition_delete")} tag="div">
      <_Builtin.Link
        className={_utils.cx(_styles, "condition_add", "helper")}
        button={false}
        fs-list-element="condition-add"
        block=""
        options={{
          href: "#",
        }}
      >
        {"+Add condition"}
      </_Builtin.Link>
      <_Builtin.Link
        className={_utils.cx(
          _styles,
          "condition_remove",
          "is-list-dynamic-disabled",
          "helper"
        )}
        button={false}
        fs-list-element="condition-group-remove"
        block="inline"
        options={{
          href: "#",
        }}
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "condition_remove-icon")}
          width="auto"
          height="auto"
          loading="lazy"
          fs-list-element="condition-remove"
          alt=""
          src="https://cdn.prod.website-files.com/687bbc3b0bb3dd57d6c1fd83/688f62eea430a310531c89d9_delete-icon.svg"
        />
        <_Builtin.Block tag="div">{"Remove group"}</_Builtin.Block>
      </_Builtin.Link>
    </_Component>
  );
}
