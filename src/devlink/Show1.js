"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Show1.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-7":{"id":"e-7","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-8"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".showcase-grid__item.showcase-grid__text","originalId":"5ee72f92-1c56-8e47-a155-8f07520de6fd","appliesTo":"CLASS"},"targets":[{"selector":".showcase-grid__item.showcase-grid__text","originalId":"5ee72f92-1c56-8e47-a155-8f07520de6fd","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615158919420},"e-8":{"id":"e-8","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-7"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".showcase-grid__item.showcase-grid__text","originalId":"5ee72f92-1c56-8e47-a155-8f07520de6fd","appliesTo":"CLASS"},"targets":[{"selector":".showcase-grid__item.showcase-grid__text","originalId":"5ee72f92-1c56-8e47-a155-8f07520de6fd","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615158919421},"e-13":{"id":"e-13","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-295"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".showcase-grid__item.showcase-grid__img.showcase-grid__img--1","originalId":"88397904-8035-711a-4562-51a079425c8d","appliesTo":"CLASS"},"targets":[{"selector":".showcase-grid__item.showcase-grid__img.showcase-grid__img--1","originalId":"88397904-8035-711a-4562-51a079425c8d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159080551},"e-14":{"id":"e-14","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-280"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".showcase-grid__item.showcase-grid__img.showcase-grid__img--1","originalId":"88397904-8035-711a-4562-51a079425c8d","appliesTo":"CLASS"},"targets":[{"selector":".showcase-grid__item.showcase-grid__img.showcase-grid__img--1","originalId":"88397904-8035-711a-4562-51a079425c8d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159080552},"e-302":{"id":"e-302","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-62","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-303"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".showcase-grid__item.showcase-grid__img.showcase-grid__img--1","originalId":"687bbc3b0bb3dd57d6c1fdc2|5ee72f92-1c56-8e47-a155-8f07520de6fc","appliesTo":"CLASS"},"targets":[{"selector":".showcase-grid__item.showcase-grid__img.showcase-grid__img--1","originalId":"687bbc3b0bb3dd57d6c1fdc2|5ee72f92-1c56-8e47-a155-8f07520de6fc","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1754369874630},"e-303":{"id":"e-303","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-63","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-302"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".showcase-grid__item.showcase-grid__img.showcase-grid__img--1","originalId":"687bbc3b0bb3dd57d6c1fdc2|5ee72f92-1c56-8e47-a155-8f07520de6fc","appliesTo":"CLASS"},"targets":[{"selector":".showcase-grid__item.showcase-grid__img.showcase-grid__img--1","originalId":"687bbc3b0bb3dd57d6c1fdc2|5ee72f92-1c56-8e47-a155-8f07520de6fc","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1754369874630}},"actionLists":{"a-3":{"id":"a-3","title":"In-view","actionItemGroups":[{"actionItems":[{"id":"a-3-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"value":0,"unit":""}},{"id":"a-3-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"yValue":30,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-3-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":1000,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"value":1,"unit":""}},{"id":"a-3-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":1000,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1615158676110},"a-4":{"id":"a-4","title":"Out-of-view","actionItemGroups":[{"actionItems":[{"id":"a-4-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"value":0,"unit":""}},{"id":"a-4-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"yValue":30,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1615158676110},"a-5":{"id":"a-5","title":"In-view-2","actionItemGroups":[{"actionItems":[{"id":"a-5-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"88397904-8035-711a-4562-51a079425c8d"},"value":0.4,"unit":""}}]},{"actionItems":[{"id":"a-5-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":true,"id":"88397904-8035-711a-4562-51a079425c8d"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1615159085714},"a-6":{"id":"a-6","title":"Out-of-view-2","actionItemGroups":[{"actionItems":[{"id":"a-6-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"88397904-8035-711a-4562-51a079425c8d"},"value":0.4,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1615159085714},"a-62":{"id":"a-62","title":"In-view-2 2","actionItemGroups":[{"actionItems":[{"id":"a-62-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc2|5ee72f92-1c56-8e47-a155-8f07520de6fc"},"value":0.4,"unit":""}}]},{"actionItems":[{"id":"a-62-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc2|5ee72f92-1c56-8e47-a155-8f07520de6fc"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1615159085714},"a-63":{"id":"a-63","title":"Out-of-view-2 2","actionItemGroups":[{"actionItems":[{"id":"a-63-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc2|5ee72f92-1c56-8e47-a155-8f07520de6fc"},"value":0.4,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1615159085714}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Show1({ as: _Component = _Builtin.Block }) {
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
                "showcase-grid__text",
                "showcase-grid__text--left"
              )}
              tag="div"
            >
              <_Builtin.Heading tag="h4">
                {"Responsive Performance"}
              </_Builtin.Heading>
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "showcase-grid__text")}
              >
                {
                  "Staggered, performance-focused wheels and tires keep the car planted and transfer even more power down to the road."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "showcase-grid__item",
                "showcase-grid__img",
                "showcase-grid__img--5"
              )}
              id={_utils.cx(
                _styles,
                "w-node-_269b903f-5ec8-0003-defb-2bd0ee16f112-ee16f109"
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
                "showcase-grid__img--6"
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
                <_Builtin.Strong>{"Optimized Aerodynamics"}</_Builtin.Strong>
              </_Builtin.Heading>
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "showcase-grid__text")}
              >
                {
                  "Attention to detail on all exterior surfaces makes Model S the most aerodynamic production car on Earth."
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
                <_Builtin.Strong>{"Refined Styling"}</_Builtin.Strong>
              </_Builtin.Heading>
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "showcase-grid__text")}
              >
                {
                  "Exterior design combines an iconic look with elegant proportions."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "showcase-grid__item",
                "showcase-grid__img",
                "showcase-grid__img--7"
              )}
              id={_utils.cx(
                _styles,
                "w-node-_269b903f-5ec8-0003-defb-2bd0ee16f122-ee16f109"
              )}
              tag="div"
            />
          </_Builtin.Block>
        </_Builtin.Grid>
      </_Builtin.Block>
    </_Component>
  );
}
