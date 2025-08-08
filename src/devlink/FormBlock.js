"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { SelectField } from "./SelectField";
import { Condition } from "./Condition";
import { Value } from "./Value";
import { ConditionDelete } from "./ConditionDelete";
import * as _utils from "./utils";
import _styles from "./FormBlock.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-118":{"id":"e-118","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-45","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-160"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"25e36eca-e1ab-0cff-64b1-89d94a44074b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"25e36eca-e1ab-0cff-64b1-89d94a44074b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1745521739349}},"actionLists":{"a-45":{"id":"a-45","title":"Filter Dropdown [Close]","actionItemGroups":[{"actionItems":[{"id":"a-45-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".dynamic_dropdown-list","selectorGuids":["3bc6a253-e58c-f72a-de0a-c6cc42532b61"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-45-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".dynamic_dropdown-list","selectorGuids":["3bc6a253-e58c-f72a-de0a-c6cc42532b61"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-45-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".dynamic_dropdown-list","selectorGuids":["3bc6a253-e58c-f72a-de0a-c6cc42532b61"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1745494869638}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function FormBlock({ as: _Component = _Builtin.FormWrapper }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "dynamic_form-block")}
      id={_utils.cx(
        _styles,
        "w-node-_25e36eca-e1ab-0cff-64b1-89d94a440746-4a440746"
      )}
    >
      <_Builtin.FormForm
        className={_utils.cx(_styles, "dynamic_form", "helper")}
        name="wf-form-filter"
        data-name="filter"
        method="get"
        fs-list-element="filters"
        id="wf-form-filter"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "dynamic_header")}
          id={_utils.cx(
            _styles,
            "w-node-_25e36eca-e1ab-0cff-64b1-89d94a440748-4a440746"
          )}
          tag="div"
        >
          <_Builtin.Block tag="div">{"Filter"}</_Builtin.Block>
          <_Builtin.Image
            className={_utils.cx(_styles, "dynamic_close")}
            id={_utils.cx(
              _styles,
              "w-node-_25e36eca-e1ab-0cff-64b1-89d94a44074b-4a440746"
            )}
            data-w-id="25e36eca-e1ab-0cff-64b1-89d94a44074b"
            width="auto"
            height="auto"
            loading="lazy"
            alt="close icon\n"
            src="https://cdn.prod.website-files.com/687bbc3b0bb3dd57d6c1fd83/688d77bbf24d1d187525b79f_close.svg"
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "dynamic_wrapper")}
          id={_utils.cx(
            _styles,
            "w-node-_25e36eca-e1ab-0cff-64b1-89d94a44074c-4a440746"
          )}
          tag="div"
        >
          <_Builtin.FormSelect
            className={_utils.cx(
              _styles,
              "condition_match",
              "is-list-dynamic-disabled",
              "helper"
            )}
            name="Condition-Group-Match"
            data-name="Condition Group Match"
            required={false}
            multiple={false}
            fs-list-element="condition-group-match"
            id="Condition-Group-Match"
            options={[
              {
                t: "And",
                v: "and",
              },
              {
                t: "Or",
                v: "or",
              },
            ]}
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "condition_column")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "condition_group")}
              tag="div"
              fs-list-element="condition-group"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "condition_item")}
                tag="div"
              >
                <_Builtin.FormSelect
                  className={_utils.cx(
                    _styles,
                    "condition_match",
                    "is-list-dynamic-disabled",
                    "helper"
                  )}
                  name="Condition-Match"
                  data-name="Condition Match"
                  required={false}
                  multiple={false}
                  fs-list-element="condition-match"
                  id="Condition-Match"
                  options={[
                    {
                      t: "And",
                      v: "and",
                    },
                    {
                      t: "Or",
                      v: "or",
                    },
                  ]}
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "condition_column")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "condition_row")}
                    tag="div"
                    fs-list-element="condition"
                  >
                    <SelectField />
                    <Condition />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "condition_column")}
                      tag="div"
                    >
                      <Value />
                      <_Builtin.FormTextInput
                        className={_utils.cx(
                          _styles,
                          "condition_field",
                          "helper"
                        )}
                        name="Field-Value"
                        maxLength={256}
                        data-name="Field Value"
                        placeholder="Enter a value"
                        disabled={false}
                        type="text"
                        required={false}
                        autoFocus={false}
                        fs-list-element="condition-value"
                        id="Field-Value"
                      />
                    </_Builtin.Block>
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "condition_remove",
                        "helper"
                      )}
                      button={false}
                      fs-list-element="condition-remove"
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
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <ConditionDelete />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Link
          className={_utils.cx(_styles, "condition_add", "helper")}
          id={_utils.cx(
            _styles,
            "w-node-_25e36eca-e1ab-0cff-64b1-89d94a440762-4a440746"
          )}
          button={false}
          fs-list-element="condition-group-add"
          block=""
          options={{
            href: "#",
          }}
        >
          {"+Add condition group"}
        </_Builtin.Link>
      </_Builtin.FormForm>
      <_Builtin.FormSuccessMessage>
        <_Builtin.Block tag="div">
          {"Thank you! Your submission has been received!"}
        </_Builtin.Block>
      </_Builtin.FormSuccessMessage>
      <_Builtin.FormErrorMessage>
        <_Builtin.Block tag="div">
          {"Oops! Something went wrong while submitting the form."}
        </_Builtin.Block>
      </_Builtin.FormErrorMessage>
    </_Component>
  );
}
