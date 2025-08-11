"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CardComponents.module.css";

export function CardComponents({
  as: _Component = _Builtin.Block,
  name = "This is some text inside of a div block.",
  card = "",
  brandName = "This is some text inside of a div block.",
  typeName = "This is some text inside of a div block.",
  year = "This is some text inside of a div block.",
  prices = "This is some text inside of a div block.",
}) {
  return (
    <_Component className={_utils.cx(_styles, "card_component")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "card_header")}
        id={_utils.cx(
          _styles,
          "w-node-_13a72251-181a-65e6-2dec-0ca437f13a5c-37f13a5b"
        )}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "card_model")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "card_name", "helper")}
            tag="div"
            fs-list-field="name"
          >
            {name}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "card_image_wrapper")}
        id={_utils.cx(
          _styles,
          "w-node-_13a72251-181a-65e6-2dec-0ca437f13a5f-37f13a5b"
        )}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "card_image")}
          width="auto"
          height="auto"
          loading="lazy"
          alt=""
          src={card}
        />
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "card_content")} tag="div">
        <_Builtin.Block className={_utils.cx(_styles, "card_list")} tag="div">
          <_Builtin.Block className={_utils.cx(_styles, "card_item")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "card_title")}
              tag="div"
            >
              {brandName}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "card_info", "helper")}
              tag="div"
              fs-list-field="make"
            >
              {brandName}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "card_item")}
            tag="div"
            fs-list-field="type"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "card_title")}
              tag="div"
            >
              {"Type"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "card_info", "helper")}
              tag="div"
              fs-list-field="vehicle-type-2"
            >
              {typeName}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "card_item")}
            id={_utils.cx(
              _styles,
              "w-node-_13a72251-181a-65e6-2dec-0ca437f13a6a-37f13a5b"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "card_title")}
              tag="div"
            >
              {"Year:"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "card_info", "helper")}
              tag="div"
              fs-list-field="year"
            >
              {year}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "featured_embed")}
            id={_utils.cx(
              _styles,
              "w-node-_13a72251-181a-65e6-2dec-0ca437f13a6e-37f13a5b"
            )}
            fs-list-field="featured"
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "card_price")}
          id={_utils.cx(
            _styles,
            "w-node-_13a72251-181a-65e6-2dec-0ca437f13a6f-37f13a5b"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "card_price_text")}
            tag="div"
          >
            {"$"}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "card_price_text", "helper")}
            tag="div"
            fs-list-field="price"
          >
            {prices}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
