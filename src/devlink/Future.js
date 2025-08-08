"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Future.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-29":{"id":"e-29","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-178"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph__animated","originalId":"df84a067-7bc4-ed78-f710-e5ae98974369","appliesTo":"CLASS"},"targets":[{"selector":".paragraph__animated","originalId":"df84a067-7bc4-ed78-f710-e5ae98974369","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159317255},"e-30":{"id":"e-30","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-222"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph__animated","originalId":"df84a067-7bc4-ed78-f710-e5ae98974369","appliesTo":"CLASS"},"targets":[{"selector":".paragraph__animated","originalId":"df84a067-7bc4-ed78-f710-e5ae98974369","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159317256},"e-39":{"id":"e-39","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-154"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a8534d44-8c8a-9a80-69db-1e3362eabdbf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a8534d44-8c8a-9a80-69db-1e3362eabdbf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159618990},"e-40":{"id":"e-40","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-181"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a8534d44-8c8a-9a80-69db-1e3362eabdbf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a8534d44-8c8a-9a80-69db-1e3362eabdbf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159618992}},"actionLists":{"a-3":{"id":"a-3","title":"In-view","actionItemGroups":[{"actionItems":[{"id":"a-3-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"value":0,"unit":""}},{"id":"a-3-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"yValue":30,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-3-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":1000,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"value":1,"unit":""}},{"id":"a-3-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":1000,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1615158676110},"a-4":{"id":"a-4","title":"Out-of-view","actionItemGroups":[{"actionItems":[{"id":"a-4-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"value":0,"unit":""}},{"id":"a-4-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"yValue":30,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1615158676110}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Future({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "future")} tag="div">
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "container",
          "container--840",
          "contaiener--840-powertrain"
        )}
        tag="div"
      >
        <_Builtin.Heading
          data-w-id="a8534d44-8c8a-9a80-69db-1e3362eabdbf"
          tag="h2"
        >
          {"Features"}
        </_Builtin.Heading>
        <_Builtin.Paragraph
          className={_utils.cx(_styles, "paragraph__animated")}
        >
          {
            "Full Self-Driving Capability introduces additional features and improves existing functionality to make your car more capable over time including:"
          }
        </_Builtin.Paragraph>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "container",
          "container--1260",
          "container--1260-powertrain"
        )}
        tag="div"
      >
        <_Builtin.TabsWrapper
          className={_utils.cx(_styles, "tabs")}
          data-duration-in="300"
          data-duration-out="100"
          current="Tab 1"
          easing="ease"
          fadeIn={300}
          fadeOut={100}
        >
          <_Builtin.TabsContent
            className={_utils.cx(_styles, "tab-vids__wrapper")}
            tag="div"
          >
            <_Builtin.TabsPane
              className={_utils.cx(_styles, "tab")}
              tag="div"
              data-w-tab="Tab 1"
            >
              <_Builtin.BackgroundVideoWrapper
                className={_utils.cx(_styles, "tab__vid")}
                tag="div"
                sources={[
                  "https://cdn.prod.website-files.com/687bbc3b0bb3dd57d6c1fd83/687bbc3b0bb3dd57d6c1fe02_a-transcode.webm",
                  "https://cdn.prod.website-files.com/687bbc3b0bb3dd57d6c1fd83/687bbc3b0bb3dd57d6c1fe02_a-transcode.mp4",
                ]}
                posterImage="https://uploads-ssl.webflow.com/603fb2df5d769f79ad78c09c/60427283fe70e1303158fecb_a-poster-00001.jpg"
                autoPlay={true}
                loop={true}
              />
            </_Builtin.TabsPane>
            <_Builtin.TabsPane
              className={_utils.cx(_styles, "tab")}
              tag="div"
              data-w-tab="Tab 2"
            >
              <_Builtin.BackgroundVideoWrapper
                className={_utils.cx(_styles, "tab__vid")}
                tag="div"
                sources={[
                  "https://cdn.prod.website-files.com/687bbc3b0bb3dd57d6c1fd83/687bbc3b0bb3dd57d6c1fe03_b-transcode.webm",
                  "https://cdn.prod.website-files.com/687bbc3b0bb3dd57d6c1fd83/687bbc3b0bb3dd57d6c1fe03_b-transcode.mp4",
                ]}
                posterImage="https://uploads-ssl.webflow.com/603fb2df5d769f79ad78c09c/604272b2cd3e9006e1d0efe7_b-poster-00001.jpg"
                autoPlay={true}
                loop={true}
              />
            </_Builtin.TabsPane>
            <_Builtin.TabsPane
              className={_utils.cx(_styles, "tab")}
              tag="div"
              data-w-tab="Tab 3"
            >
              <_Builtin.BackgroundVideoWrapper
                className={_utils.cx(_styles, "tab__vid")}
                tag="div"
                sources={[
                  "https://cdn.prod.website-files.com/687bbc3b0bb3dd57d6c1fd83/687bbc3b0bb3dd57d6c1fe04_c-transcode.webm",
                  "https://cdn.prod.website-files.com/687bbc3b0bb3dd57d6c1fd83/687bbc3b0bb3dd57d6c1fe04_c-transcode.mp4",
                ]}
                posterImage="https://uploads-ssl.webflow.com/603fb2df5d769f79ad78c09c/604272b87529ff7fc1445774_c-poster-00001.jpg"
                autoPlay={true}
                loop={true}
              />
            </_Builtin.TabsPane>
            <_Builtin.TabsPane
              className={_utils.cx(_styles, "tab")}
              tag="div"
              data-w-tab="Tab 4"
            >
              <_Builtin.BackgroundVideoWrapper
                className={_utils.cx(_styles, "tab__vid")}
                tag="div"
                sources={[
                  "https://cdn.prod.website-files.com/687bbc3b0bb3dd57d6c1fd83/687bbc3b0bb3dd57d6c1fe05_d-transcode.webm",
                  "https://cdn.prod.website-files.com/687bbc3b0bb3dd57d6c1fd83/687bbc3b0bb3dd57d6c1fe05_d-transcode.mp4",
                ]}
                posterImage="https://uploads-ssl.webflow.com/603fb2df5d769f79ad78c09c/604272bd183ea6849f309f10_d-poster-00001.jpg"
                autoPlay={true}
                loop={true}
              />
            </_Builtin.TabsPane>
          </_Builtin.TabsContent>
          <_Builtin.TabsMenu
            className={_utils.cx(_styles, "tab-vids__grid")}
            tag="div"
          >
            <_Builtin.TabsLink
              className={_utils.cx(_styles, "powertrain__grid-item")}
              data-w-tab="Tab 1"
              block="inline"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "powertrain__heading")}
                tag="h3"
              >
                {"Navigate on Autopilot"}
              </_Builtin.Heading>
              <_Builtin.Block
                className={_utils.cx(_styles, "line")}
                tag="div"
              />
              <_Builtin.Paragraph
                className={_utils.cx(
                  _styles,
                  "powetrain__text",
                  "powertrain__text--margin-auto"
                )}
              >
                {"Active guidance from on-ramp to off-ramp"}
              </_Builtin.Paragraph>
            </_Builtin.TabsLink>
            <_Builtin.TabsLink
              className={_utils.cx(_styles, "powertrain__grid-item")}
              data-w-tab="Tab 2"
              block="inline"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "powertrain__heading")}
                tag="h3"
              >
                {"Auto Lane Change"}
              </_Builtin.Heading>
              <_Builtin.Block
                className={_utils.cx(_styles, "line")}
                tag="div"
              />
              <_Builtin.Paragraph
                className={_utils.cx(
                  _styles,
                  "powetrain__text",
                  "powertrain__text--margin-auto"
                )}
              >
                {"Automatically change lanes while driving on the highway"}
              </_Builtin.Paragraph>
            </_Builtin.TabsLink>
            <_Builtin.TabsLink
              className={_utils.cx(_styles, "powertrain__grid-item")}
              data-w-tab="Tab 3"
              block="inline"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "powertrain__heading")}
                tag="h3"
              >
                {"Summon"}
              </_Builtin.Heading>
              <_Builtin.Block
                className={_utils.cx(_styles, "line")}
                tag="div"
              />
              <_Builtin.Paragraph
                className={_utils.cx(
                  _styles,
                  "powetrain__text",
                  "powertrain__text--margin-auto"
                )}
              >
                {"Automatically retrieve your car"}
              </_Builtin.Paragraph>
            </_Builtin.TabsLink>
            <_Builtin.TabsLink
              className={_utils.cx(_styles, "powertrain__grid-item")}
              data-w-tab="Tab 4"
              block="inline"
            >
              <_Builtin.Heading
                className={_utils.cx(
                  _styles,
                  "powertrain__heading",
                  "powertrain__heading--margin"
                )}
                tag="h3"
              >
                {"Autopark"}
              </_Builtin.Heading>
              <_Builtin.Block
                className={_utils.cx(_styles, "line")}
                tag="div"
              />
              <_Builtin.Paragraph
                className={_utils.cx(
                  _styles,
                  "powetrain__text",
                  "powertrain__text--margin-auto"
                )}
              >
                {"Parallel and perpendicular parking with a single touch"}
              </_Builtin.Paragraph>
            </_Builtin.TabsLink>
          </_Builtin.TabsMenu>
        </_Builtin.TabsWrapper>
      </_Builtin.Block>
    </_Component>
  );
}
