"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./PriceSlide.module.css";

export function PriceSlide({ as: _Component = _Builtin.Block }) {
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
            "w-node-_41af4576-9ae0-eeeb-ed5a-ce1402921afc-02921afa"
          )}
          tag="div"
        >
          {"Price"}
        </_Builtin.Block>
        <_Builtin.Link
          className={_utils.cx(_styles, "filter_clear", "helper")}
          button={false}
          fs-list-element="clear"
          fs-list-field="price"
          block=""
          options={{
            href: "#",
          }}
        >
          {"Clear"}
        </_Builtin.Link>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "rangeslider_wrapper-2", "helper")}
        tag="div"
        fs-rangeslider-element="wrapper"
        fs-rangeslider-min="0"
        fs-rangeslider-max="200000"
        fs-rangeslider-formatdisplay="true"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "rangeslider_track-2")}
          tag="div"
          fs-rangeslider-element="track"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "rangeslider_handle-2")}
            tag="div"
            fs-rangeslider-element="handle"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "rangeslider_handle-2")}
            tag="div"
            fs-rangeslider-element="handle"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "rangeslider_fill-2")}
            tag="div"
            fs-rangeslider-element="fill"
          />
        </_Builtin.Block>
        <_Builtin.FormTextInput
          className={_utils.cx(_styles, "rangeslider_input")}
          name="From"
          maxLength={256}
          data-name="From"
          placeholder="From"
          disabled={false}
          type="number"
          required={false}
          autoFocus={false}
          fs-list-field="price"
          fs-list-operator="greater-equal"
          id="From"
        />
        <_Builtin.FormTextInput
          className={_utils.cx(_styles, "rangeslider_input")}
          name="To"
          maxLength={256}
          data-name="To"
          placeholder="To"
          disabled={false}
          type="number"
          required={false}
          autoFocus={false}
          fs-list-field="price"
          fs-list-operator="less-equal"
          id="To"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "range_values")}
          tag="div"
        >
          <_Builtin.Block tag="div">
            {"$"}
            <_Builtin.Span fs-rangeslider-element="display-value">
              {"0"}
            </_Builtin.Span>
          </_Builtin.Block>
          <_Builtin.Block tag="div">
            {"$"}
            <_Builtin.Span fs-rangeslider-element="display-value">
              {"0"}
            </_Builtin.Span>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
