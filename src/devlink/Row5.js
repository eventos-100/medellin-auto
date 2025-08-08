"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Row5.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-23":{"id":"e-23","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-125"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".hero-grid__subheading.hero-grid__subheading--alight-left","originalId":"df84a067-7bc4-ed78-f710-e5ae98974362","appliesTo":"CLASS"},"targets":[{"selector":".hero-grid__subheading.hero-grid__subheading--alight-left","originalId":"df84a067-7bc4-ed78-f710-e5ae98974362","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159255668},"e-24":{"id":"e-24","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-265"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".hero-grid__subheading.hero-grid__subheading--alight-left","originalId":"df84a067-7bc4-ed78-f710-e5ae98974362","appliesTo":"CLASS"},"targets":[{"selector":".hero-grid__subheading.hero-grid__subheading--alight-left","originalId":"df84a067-7bc4-ed78-f710-e5ae98974362","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159255706},"e-25":{"id":"e-25","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-167"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".ludicrous__heading","originalId":"df84a067-7bc4-ed78-f710-e5ae98974364","appliesTo":"CLASS"},"targets":[{"selector":".ludicrous__heading","originalId":"df84a067-7bc4-ed78-f710-e5ae98974364","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159269908},"e-26":{"id":"e-26","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-159"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".ludicrous__heading","originalId":"df84a067-7bc4-ed78-f710-e5ae98974364","appliesTo":"CLASS"},"targets":[{"selector":".ludicrous__heading","originalId":"df84a067-7bc4-ed78-f710-e5ae98974364","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159269910},"e-27":{"id":"e-27","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-247"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".button.button--dark","originalId":"df84a067-7bc4-ed78-f710-e5ae98974366","appliesTo":"CLASS"},"targets":[{"selector":".button.button--dark","originalId":"df84a067-7bc4-ed78-f710-e5ae98974366","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159297749},"e-28":{"id":"e-28","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-237"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".button.button--dark","originalId":"df84a067-7bc4-ed78-f710-e5ae98974366","appliesTo":"CLASS"},"targets":[{"selector":".button.button--dark","originalId":"df84a067-7bc4-ed78-f710-e5ae98974366","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159297787},"e-29":{"id":"e-29","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-178"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph__animated","originalId":"df84a067-7bc4-ed78-f710-e5ae98974369","appliesTo":"CLASS"},"targets":[{"selector":".paragraph__animated","originalId":"df84a067-7bc4-ed78-f710-e5ae98974369","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159317255},"e-30":{"id":"e-30","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-222"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph__animated","originalId":"df84a067-7bc4-ed78-f710-e5ae98974369","appliesTo":"CLASS"},"targets":[{"selector":".paragraph__animated","originalId":"df84a067-7bc4-ed78-f710-e5ae98974369","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159317256},"e-37":{"id":"e-37","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-38"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".data-grid__item","originalId":"6333735e-756a-6d1e-3d65-447246ce7c43","appliesTo":"CLASS"},"targets":[{"selector":".data-grid__item","originalId":"6333735e-756a-6d1e-3d65-447246ce7c43","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159561602},"e-38":{"id":"e-38","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-37"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".data-grid__item","originalId":"6333735e-756a-6d1e-3d65-447246ce7c43","appliesTo":"CLASS"},"targets":[{"selector":".data-grid__item","originalId":"6333735e-756a-6d1e-3d65-447246ce7c43","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159561604}},"actionLists":{"a-3":{"id":"a-3","title":"In-view","actionItemGroups":[{"actionItems":[{"id":"a-3-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"value":0,"unit":""}},{"id":"a-3-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"yValue":30,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-3-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":1000,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"value":1,"unit":""}},{"id":"a-3-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":1000,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1615158676110},"a-4":{"id":"a-4","title":"Out-of-view","actionItemGroups":[{"actionItems":[{"id":"a-4-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"value":0,"unit":""}},{"id":"a-4-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"yValue":30,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1615158676110}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Row5({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "ludicrous")} tag="section">
      <_Builtin.Block className={_utils.cx(_styles, "future__video")} tag="div">
        <_Builtin.BackgroundVideoWrapper
          className={_utils.cx(_styles, "background-video")}
          tag="div"
          sources={[
            "https://cdn.prod.website-files.com/687bbc3b0bb3dd57d6c1fd83/687bbc3b0bb3dd57d6c1fe01_WCL9WK_autopilotmp4-2000_QQHSUM-transcode.webm",
            "https://cdn.prod.website-files.com/687bbc3b0bb3dd57d6c1fd83/687bbc3b0bb3dd57d6c1fe01_WCL9WK_autopilotmp4-2000_QQHSUM-transcode.mp4",
          ]}
          posterImage="https://uploads-ssl.webflow.com/603fb2df5d769f79ad78c09c/604269e7708394e32a145bc2_WCL9WK_autopilotmp4-2000_QQHSUM-poster-00001.jpg"
          autoPlay={true}
          loop={true}
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "future__text")}
          tag="div"
        >
          <_Builtin.Grid
            className={_utils.cx(_styles, "future__grid")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "data-grid__item",
                "data-grid__item--future"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "data__title",
                  "data__title-black"
                )}
                tag="div"
              >
                <_Builtin.Strong>{"360°"}</_Builtin.Strong>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "data__sub-text",
                  "data__sub-text--black",
                  "data__sub-text--desktop"
                )}
                tag="div"
              >
                {
                  "Rear, side and forward-facing cameras provide maximum visibility"
                }
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "data__sub-text",
                  "data__sub-text--black",
                  "data__sub-text--mobile"
                )}
                tag="div"
              >
                {"Degrees of Visibility"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "data-grid__item",
                "data-grid__item--future"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "data__title",
                  "data__title-black"
                )}
                tag="div"
              >
                {"160m"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "data__sub-text",
                  "data__sub-text--black",
                  "data__sub-text--desktop"
                )}
                tag="div"
              >
                {
                  "Forward-facing radar provides a long-range view of distant objects"
                }
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "data__sub-text",
                  "data__sub-text--black",
                  "data__sub-text--mobile"
                )}
                tag="div"
              >
                {"Of Forward Protection"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "data-grid__item",
                "data-grid__item--future"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "data__title",
                  "data__title-black",
                  "data__title--mob"
                )}
                tag="div"
              >
                {"12"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "data__title",
                  "data__title-black",
                  "data__title--desktop"
                )}
                tag="div"
              >
                {"12 Ultrasonic Sensors"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "data__sub-text",
                  "data__sub-text--black",
                  "data__sub-text--desktop"
                )}
                tag="div"
              >
                {
                  "Detects nearby cars, helps prevent potential collisions and assists with parking"
                }
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "data__sub-text",
                  "data__sub-text--black",
                  "data__sub-text--mobile"
                )}
                tag="div"
              >
                {"Ultrasonic Sensors"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Grid>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Grid
        className={_utils.cx(_styles, "ludicrous-grid-2")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "ludicrous-grid-2__item")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "hero-grid__subheading",
              "hero-grid__subheading--alight-left"
            )}
            tag="div"
          >
            {"Autopilot"}
          </_Builtin.Block>
          <_Builtin.Heading
            className={_utils.cx(_styles, "ludicrous__heading")}
            tag="h3"
          >
            {"Future of Driving"}
          </_Builtin.Heading>
          <_Builtin.Link
            className={_utils.cx(_styles, "button", "button--dark")}
            button={false}
            block=""
            options={{
              href: "https://www.eikonlabs.com/",
              target: "_blank",
            }}
          >
            {"order now"}
          </_Builtin.Link>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "ludicrous-grid-2__item",
            "ludicrous-grid-2__item--text"
          )}
          id={_utils.cx(
            _styles,
            "w-node-_0e8c5c66-8819-0460-3ea7-fae7d41d4cf9-d41d4cd4"
          )}
          tag="div"
        >
          <_Builtin.Paragraph
            className={_utils.cx(_styles, "paragraph__animated")}
          >
            {
              "Autopilot enables your car to steer, accelerate and brake automatically within its lane under your active supervision, assisting with the most burdensome parts of driving. With over-the-air software updates, the latest enhancements are available instantly."
            }
          </_Builtin.Paragraph>
        </_Builtin.Block>
      </_Builtin.Grid>
    </_Component>
  );
}
