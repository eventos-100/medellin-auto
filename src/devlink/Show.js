"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Show.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-7":{"id":"e-7","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-8"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".showcase-grid__item.showcase-grid__text","originalId":"5ee72f92-1c56-8e47-a155-8f07520de6fd","appliesTo":"CLASS"},"targets":[{"selector":".showcase-grid__item.showcase-grid__text","originalId":"5ee72f92-1c56-8e47-a155-8f07520de6fd","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615158919420},"e-8":{"id":"e-8","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-7"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".showcase-grid__item.showcase-grid__text","originalId":"5ee72f92-1c56-8e47-a155-8f07520de6fd","appliesTo":"CLASS"},"targets":[{"selector":".showcase-grid__item.showcase-grid__text","originalId":"5ee72f92-1c56-8e47-a155-8f07520de6fd","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615158919421},"e-13":{"id":"e-13","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-295"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".showcase-grid__item.showcase-grid__img.showcase-grid__img--1","originalId":"88397904-8035-711a-4562-51a079425c8d","appliesTo":"CLASS"},"targets":[{"selector":".showcase-grid__item.showcase-grid__img.showcase-grid__img--1","originalId":"88397904-8035-711a-4562-51a079425c8d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159080551},"e-14":{"id":"e-14","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-280"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".showcase-grid__item.showcase-grid__img.showcase-grid__img--1","originalId":"88397904-8035-711a-4562-51a079425c8d","appliesTo":"CLASS"},"targets":[{"selector":".showcase-grid__item.showcase-grid__img.showcase-grid__img--1","originalId":"88397904-8035-711a-4562-51a079425c8d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159080552},"e-302":{"id":"e-302","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-62","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-303"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".showcase-grid__item.showcase-grid__img.showcase-grid__img--1","originalId":"687bbc3b0bb3dd57d6c1fdc2|5ee72f92-1c56-8e47-a155-8f07520de6fc","appliesTo":"CLASS"},"targets":[{"selector":".showcase-grid__item.showcase-grid__img.showcase-grid__img--1","originalId":"687bbc3b0bb3dd57d6c1fdc2|5ee72f92-1c56-8e47-a155-8f07520de6fc","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1754369874630},"e-303":{"id":"e-303","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-63","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-302"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".showcase-grid__item.showcase-grid__img.showcase-grid__img--1","originalId":"687bbc3b0bb3dd57d6c1fdc2|5ee72f92-1c56-8e47-a155-8f07520de6fc","appliesTo":"CLASS"},"targets":[{"selector":".showcase-grid__item.showcase-grid__img.showcase-grid__img--1","originalId":"687bbc3b0bb3dd57d6c1fdc2|5ee72f92-1c56-8e47-a155-8f07520de6fc","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1754369874630}},"actionLists":{"a-3":{"id":"a-3","title":"In-view","actionItemGroups":[{"actionItems":[{"id":"a-3-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"value":0,"unit":""}},{"id":"a-3-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"yValue":30,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-3-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":1000,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"value":1,"unit":""}},{"id":"a-3-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":1000,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1615158676110},"a-4":{"id":"a-4","title":"Out-of-view","actionItemGroups":[{"actionItems":[{"id":"a-4-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"value":0,"unit":""}},{"id":"a-4-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"yValue":30,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1615158676110},"a-5":{"id":"a-5","title":"In-view-2","actionItemGroups":[{"actionItems":[{"id":"a-5-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"88397904-8035-711a-4562-51a079425c8d"},"value":0.4,"unit":""}}]},{"actionItems":[{"id":"a-5-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":true,"id":"88397904-8035-711a-4562-51a079425c8d"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1615159085714},"a-6":{"id":"a-6","title":"Out-of-view-2","actionItemGroups":[{"actionItems":[{"id":"a-6-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"88397904-8035-711a-4562-51a079425c8d"},"value":0.4,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1615159085714},"a-62":{"id":"a-62","title":"In-view-2 2","actionItemGroups":[{"actionItems":[{"id":"a-62-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc2|5ee72f92-1c56-8e47-a155-8f07520de6fc"},"value":0.4,"unit":""}}]},{"actionItems":[{"id":"a-62-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc2|5ee72f92-1c56-8e47-a155-8f07520de6fc"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1615159085714},"a-63":{"id":"a-63","title":"Out-of-view-2 2","actionItemGroups":[{"actionItems":[{"id":"a-63-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc2|5ee72f92-1c56-8e47-a155-8f07520de6fc"},"value":0.4,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1615159085714}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Show({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "showcase")} tag="section">
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "container",
          "container--1260",
          "container--flex-mid"
        )}
        tag="div"
      >
        <_Builtin.Grid
          className={_utils.cx(_styles, "showcase-grid")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "showcase__sub-grid")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "showcase-grid__item",
                "showcase-grid__img",
                "showcase-grid__img--1"
              )}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "showcase-grid__item",
                "showcase-grid__text"
              )}
              tag="div"
            >
              <_Builtin.Heading tag="h4">
                {"Game from Anywhere"}
              </_Builtin.Heading>
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "showcase-grid__text")}
              >
                {
                  "Up to 10 teraflops of processing power enables in-car gaming on-par with today’s newest consoles. Wireless controller compatibility lets you game from any seat."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "showcase__sub-grid")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "showcase-grid__item",
                "showcase-grid__text",
                "showcase-grid__text--left"
              )}
              tag="div"
            >
              <_Builtin.Heading tag="h4">{"Stay Connected"}</_Builtin.Heading>
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "showcase-grid__text")}
              >
                {
                  "Multi-device Bluetooth, wireless and USB-C charging for every passenger, with enough power to fast-charge your tablets and laptop."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "showcase-grid__item",
                "showcase-grid__img",
                "showcase-grid__img--2"
              )}
              id={_utils.cx(
                _styles,
                "w-node-_5ee72f92-1c56-8e47-a155-8f07520de708-520de6f8"
              )}
              tag="div"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "showcase__sub-grid")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "showcase-grid__item",
                "showcase-grid__img",
                "showcase-grid__img--3"
              )}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "showcase-grid__item",
                "showcase-grid__text"
              )}
              tag="div"
            >
              <_Builtin.Heading tag="h4">
                {"Your Best Audio System"}
              </_Builtin.Heading>
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "showcase-grid__text")}
              >
                {
                  "A 22-speaker, 960-watt audio system with active noise canceling offers the best listening experience at home or on the road."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "showcase__sub-grid")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "showcase-grid__item",
                "showcase-grid__text",
                "showcase-grid__text--left"
              )}
              tag="div"
            >
              <_Builtin.Heading tag="h4">
                {"Game from Anywhere"}
              </_Builtin.Heading>
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "showcase-grid__text")}
              >
                {
                  "With front and rear trunks and fold-flat seats, Model S is a luxury car where you can fit your bike without taking the wheel off, and your luggage too."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "showcase-grid__item",
                "showcase-grid__img",
                "showcase-grid__img--4"
              )}
              id={_utils.cx(
                _styles,
                "w-node-_5ee72f92-1c56-8e47-a155-8f07520de716-520de6f8"
              )}
              tag="div"
            />
          </_Builtin.Block>
        </_Builtin.Grid>
      </_Builtin.Block>
    </_Component>
  );
}
