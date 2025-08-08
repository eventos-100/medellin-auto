"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./MFormBlock.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-114":{"id":"e-114","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-42","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-192"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".fs-checkbox-5_button","originalId":"688f5f2407927d7cac00a36e|e28c816d-9469-0db8-a7cd-2ae0b87a024f","appliesTo":"CLASS"},"targets":[{"selector":".fs-checkbox-5_button","originalId":"688f5f2407927d7cac00a36e|e28c816d-9469-0db8-a7cd-2ae0b87a024f","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1667593849195},"e-115":{"id":"e-115","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-43","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-204"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".fs-checkbox-5_button","originalId":"688f5f2407927d7cac00a36e|e28c816d-9469-0db8-a7cd-2ae0b87a024f","appliesTo":"CLASS"},"targets":[{"selector":".fs-checkbox-5_button","originalId":"688f5f2407927d7cac00a36e|e28c816d-9469-0db8-a7cd-2ae0b87a024f","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1667593849195}},"actionLists":{"a-42":{"id":"a-42","title":"Feature Checkbox [Check]","actionItemGroups":[{"actionItems":[{"id":"a-42-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".fs-checkbox-5_dot","selectorGuids":["10a57ff7-e754-5cc5-2eb2-73be60c8b77b"]},"xValue":1,"xUnit":"rem","yUnit":"PX","zUnit":"PX"}},{"id":"a-42-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".fs-checkbox-5_mask","selectorGuids":["10a57ff7-e754-5cc5-2eb2-73be60c8b77e"]},"globalSwatchId":"@var_variable-45991dc3","rValue":185,"bValue":59,"gValue":253,"aValue":1}},{"id":"a-42-n-3","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".fs-checkbox-5_dot","selectorGuids":["10a57ff7-e754-5cc5-2eb2-73be60c8b77b"]},"globalSwatchId":"@var_variable-4a3d901e-59ae-e01f-3c8e-c7d23ad547d9","rValue":36,"bValue":36,"gValue":36,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1638537122270},"a-43":{"id":"a-43","title":"Feature Checkbox [Uncheck]","actionItemGroups":[{"actionItems":[{"id":"a-43-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".fs-checkbox-5_dot","selectorGuids":["10a57ff7-e754-5cc5-2eb2-73be60c8b77b"]},"xValue":0,"xUnit":"rem","yUnit":"PX","zUnit":"PX"}},{"id":"a-43-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".fs-checkbox-5_dot","selectorGuids":["10a57ff7-e754-5cc5-2eb2-73be60c8b77b"]},"globalSwatchId":"@var_variable-c3882138-100e-a1cc-5409-1711b944db1c","rValue":161,"bValue":161,"gValue":161,"aValue":1}},{"id":"a-43-n-3","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".fs-checkbox-5_mask","selectorGuids":["10a57ff7-e754-5cc5-2eb2-73be60c8b77e"]},"globalSwatchId":"@var_variable-6301439f-dfa7-5abe-a490-14018a0b0f5b","rValue":76,"bValue":76,"gValue":76,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1638537122270}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function MFormBlock({ as: _Component = _Builtin.FormWrapper }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "filter_form_block")}>
      <_Builtin.FormForm
        className={_utils.cx(_styles, "filter_form-3", "helper")}
        name="wf-form-filter"
        data-name="filter"
        method="get"
        fs-list-element="filters"
        id="wf-form-filter"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "filter_block-2")}
          tag="div"
        >
          <_Builtin.FormTextInput
            className={_utils.cx(_styles, "filter_search", "helper")}
            name="field"
            maxLength={256}
            data-name="Field"
            placeholder="Search here..."
            disabled={false}
            type="text"
            required={true}
            autoFocus={false}
            fs-list-field="*"
            id="field"
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "filter_block-2", "hide")}
          id={_utils.cx(
            _styles,
            "w-node-aa4aedbc-6f9b-90f9-17fa-5de7b1ac48da-b1ac48d6"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "filter_block_header-2")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "filter_block_title-6")}
              id={_utils.cx(
                _styles,
                "w-node-aa4aedbc-6f9b-90f9-17fa-5de7b1ac48dc-b1ac48d6"
              )}
              tag="div"
            >
              {"Featured"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "fs-checkbox-5_component")}
              id={_utils.cx(
                _styles,
                "w-node-aa4aedbc-6f9b-90f9-17fa-5de7b1ac48de-b1ac48d6"
              )}
              tag="div"
            >
              <_Builtin.FormCheckboxWrapper
                className={_utils.cx(_styles, "fs-checkbox-5_wrapper")}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "fs-checkbox-5_dot")}
                  tag="div"
                />
                <_Builtin.FormCheckboxInput
                  className={_utils.cx(
                    _styles,
                    "fs-checkbox-5_button",
                    "helper"
                  )}
                  type="checkbox"
                  name="Checkbox-5"
                  data-name="Checkbox 5"
                  required={false}
                  checked={false}
                  fs-list-field="featured"
                  id="Checkbox-5"
                  form={{
                    type: "checkbox-input",
                    name: "Checkbox 5",
                  }}
                  inputType="default"
                />
                <_Builtin.FormInlineLabel
                  className={_utils.cx(_styles, "fs-checkbox-5_label")}
                >
                  {"Checkbox 8"}
                </_Builtin.FormInlineLabel>
                <_Builtin.Block
                  className={_utils.cx(_styles, "fs-checkbox-5_mask")}
                  tag="div"
                />
              </_Builtin.FormCheckboxWrapper>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "filter_block-2")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "filter_block_header-2")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "filter_block_title-6")}
              id={_utils.cx(
                _styles,
                "w-node-_100f4c34-1820-d50c-c640-ebe2e8fe702a-b1ac48d6"
              )}
              tag="div"
            >
              {"Color"}
            </_Builtin.Block>
            <_Builtin.Link
              className={_utils.cx(_styles, "filter_clear", "helper")}
              button={false}
              fs-list-element="clear"
              fs-list-field="color"
              block=""
              options={{
                href: "#",
              }}
            >
              {"Clear"}
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "filter_list")}
            tag="div"
          >
            <_Builtin.FormRadioWrapper
              className={_utils.cx(
                _styles,
                "radio_field-2",
                "is-list-emptyfacet",
                "helper"
              )}
              fs-list-emptyfacet="add-class"
            >
              <_Builtin.FormRadioInput
                className={_utils.cx(_styles, "radio_button-3", "helper")}
                type="radio"
                name="Color"
                value="Radio"
                data-name="Color"
                required={false}
                fs-list-field="color"
                fs-list-value="black"
                id="radio-16"
                form={{
                  type: "radio-input",
                  name: "Color",
                }}
                inputType="custom"
                customClassName="w-form-formradioinput--inputType-custom"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "radio_color", "is-black")}
                tag="div"
              />
              <_Builtin.FormInlineLabel
                className={_utils.cx(_styles, "radio_label")}
              >
                {"Black"}
              </_Builtin.FormInlineLabel>
              <_Builtin.Block
                className={_utils.cx(_styles, "filter_facet-count", "helper")}
                tag="div"
                fs-list-element="facet-count"
              >
                {"0"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "option-results-2")}
                tag="div"
              >
                {"["}
                <_Builtin.Span fs-cmsfilter-element="filter-results-count">
                  {"0"}
                </_Builtin.Span>
                {"]"}
              </_Builtin.Block>
            </_Builtin.FormRadioWrapper>
            <_Builtin.FormRadioWrapper
              className={_utils.cx(_styles, "radio_field-2", "helper")}
              fs-list-emptyfacet="add-class"
            >
              <_Builtin.FormRadioInput
                className={_utils.cx(_styles, "radio_button-3", "helper")}
                type="radio"
                name="Color"
                value="Radio"
                data-name="Color"
                required={false}
                fs-list-field="color"
                fs-list-value="white"
                id="radio-16"
                form={{
                  type: "radio-input",
                  name: "Color",
                }}
                inputType="custom"
                customClassName="w-form-formradioinput--inputType-custom"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "radio_color", "is-white")}
                tag="div"
              />
              <_Builtin.FormInlineLabel
                className={_utils.cx(_styles, "radio_label")}
              >
                {"White"}
              </_Builtin.FormInlineLabel>
              <_Builtin.Block
                className={_utils.cx(_styles, "filter_facet-count", "helper")}
                tag="div"
                fs-list-element="facet-count"
              >
                {"0"}
              </_Builtin.Block>
            </_Builtin.FormRadioWrapper>
            <_Builtin.FormRadioWrapper
              className={_utils.cx(_styles, "radio_field-2", "helper")}
              fs-list-emptyfacet="add-class"
            >
              <_Builtin.FormRadioInput
                className={_utils.cx(_styles, "radio_button-3", "helper")}
                type="radio"
                name="Color"
                value="Radio"
                data-name="Color"
                required={false}
                fs-list-field="color"
                fs-list-value="gray"
                id="radio-16"
                form={{
                  type: "radio-input",
                  name: "Color",
                }}
                inputType="custom"
                customClassName="w-form-formradioinput--inputType-custom"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "radio_color", "is-gray")}
                tag="div"
              />
              <_Builtin.FormInlineLabel
                className={_utils.cx(_styles, "radio_label")}
              >
                {"Gray "}
              </_Builtin.FormInlineLabel>
              <_Builtin.Block
                className={_utils.cx(_styles, "filter_facet-count", "helper")}
                tag="div"
                fs-list-element="facet-count"
              >
                {"0"}
              </_Builtin.Block>
            </_Builtin.FormRadioWrapper>
            <_Builtin.FormRadioWrapper
              className={_utils.cx(_styles, "radio_field-2", "helper")}
              id={_utils.cx(
                _styles,
                "w-node-_99a7c7ca-cc3a-9291-0d8f-797d4a5488da-b1ac48d6"
              )}
              fs-list-emptyfacet="add-class"
            >
              <_Builtin.FormRadioInput
                className={_utils.cx(_styles, "radio_button-3")}
                type="radio"
                name="Color"
                value="Radio"
                data-name="Color"
                required={false}
                fs-list-field="color"
                fs-list-value="cream"
                id="radio-16"
                form={{
                  type: "radio-input",
                  name: "Color",
                }}
                inputType="custom"
                customClassName="w-form-formradioinput--inputType-custom"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "radio_color", "is-cream")}
                tag="div"
              />
              <_Builtin.FormInlineLabel
                className={_utils.cx(_styles, "radio_label")}
              >
                {"Cream"}
              </_Builtin.FormInlineLabel>
              <_Builtin.Block
                className={_utils.cx(_styles, "filter_facet-count", "helper")}
                tag="div"
                fs-list-element="facet-count"
              >
                {"0"}
              </_Builtin.Block>
            </_Builtin.FormRadioWrapper>
            <_Builtin.FormRadioWrapper
              className={_utils.cx(_styles, "radio_field-2", "helper")}
              fs-list-emptyfacet="add-class"
            >
              <_Builtin.FormRadioInput
                className={_utils.cx(_styles, "radio_button-3")}
                type="radio"
                name="Color"
                value="Radio"
                data-name="Color"
                required={false}
                fs-list-field="color"
                fs-list-value="yellow"
                id="radio-16"
                form={{
                  type: "radio-input",
                  name: "Color",
                }}
                inputType="custom"
                customClassName="w-form-formradioinput--inputType-custom"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "radio_color", "is-yellow")}
                tag="div"
              />
              <_Builtin.FormInlineLabel
                className={_utils.cx(_styles, "radio_label")}
              >
                {"Yellow"}
              </_Builtin.FormInlineLabel>
              <_Builtin.Block
                className={_utils.cx(_styles, "filter_facet-count", "helper")}
                tag="div"
                fs-list-element="facet-count"
              >
                {"0"}
              </_Builtin.Block>
            </_Builtin.FormRadioWrapper>
            <_Builtin.FormRadioWrapper
              className={_utils.cx(_styles, "radio_field-2", "helper")}
              fs-list-emptyfacet="add-class"
            >
              <_Builtin.FormRadioInput
                className={_utils.cx(_styles, "radio_button-3")}
                type="radio"
                name="Color"
                value="Radio"
                data-name="Color"
                required={false}
                fs-list-field="color"
                fs-list-value="red"
                id="radio-16"
                form={{
                  type: "radio-input",
                  name: "Color",
                }}
                inputType="custom"
                customClassName="w-form-formradioinput--inputType-custom"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "radio_color", "red")}
                tag="div"
              />
              <_Builtin.FormInlineLabel
                className={_utils.cx(_styles, "radio_label")}
              >
                {"Red"}
              </_Builtin.FormInlineLabel>
              <_Builtin.Block
                className={_utils.cx(_styles, "filter_facet-count", "helper")}
                tag="div"
                fs-list-element="facet-count"
              >
                {"0"}
              </_Builtin.Block>
            </_Builtin.FormRadioWrapper>
            <_Builtin.FormRadioWrapper
              className={_utils.cx(_styles, "radio_field-2", "helper")}
              fs-list-emptyfacet="add-class"
            >
              <_Builtin.FormRadioInput
                className={_utils.cx(_styles, "radio_button-3")}
                type="radio"
                name="Color"
                value="Radio"
                data-name="Color"
                required={false}
                fs-list-field="color"
                fs-list-value="green"
                id="radio-16"
                form={{
                  type: "radio-input",
                  name: "Color",
                }}
                inputType="custom"
                customClassName="w-form-formradioinput--inputType-custom"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "radio_color", "is-green")}
                tag="div"
              />
              <_Builtin.FormInlineLabel
                className={_utils.cx(_styles, "radio_label")}
              >
                {"Green"}
              </_Builtin.FormInlineLabel>
              <_Builtin.Block
                className={_utils.cx(_styles, "filter_facet-count", "helper")}
                tag="div"
                fs-list-element="facet-count"
              >
                {"0"}
              </_Builtin.Block>
            </_Builtin.FormRadioWrapper>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "filter_block-2")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "filter_block_header-2")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "filter_block_title-6")}
                id={_utils.cx(
                  _styles,
                  "w-node-a6fcb1b8-729c-1b73-3943-58991a1ad9e8-b1ac48d6"
                )}
                tag="div"
              >
                {"Makes"}
              </_Builtin.Block>
              <_Builtin.Link
                className={_utils.cx(_styles, "filter_clear", "helper")}
                button={false}
                fs-list-element="clear"
                fs-list-field="make"
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Clear"}
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.NotSupported _atom="DynamoWrapper" />
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "filter_block-2")}
          id={_utils.cx(
            _styles,
            "w-node-e99898cf-aeaa-e546-eabd-a9fd8d8b4932-b1ac48d6"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "filter_block_header-2")}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "filter-block-label")}
              tag="h3"
            >
              {"Year"}
            </_Builtin.Heading>
            <_Builtin.Link
              className={_utils.cx(_styles, "filter_clear", "helper")}
              button={false}
              fs-list-element="clear"
              fs-list-field="year"
              block=""
              options={{
                href: "#",
              }}
            >
              {"Clear"}
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "filter_list", "is-1-col")}
            tag="div"
          >
            <_Builtin.FormSelect
              className={_utils.cx(_styles, "filter_select-2", "helper")}
              name="select"
              data-name="select"
              required={false}
              multiple={false}
              fs-list-field="year"
              id="select"
              options={[
                {
                  t: "Select a year",
                  v: "",
                },
                {
                  t: "2018",
                  v: "2018",
                },
                {
                  t: "2019",
                  v: "2019",
                },
                {
                  t: "2020",
                  v: "2020",
                },
                {
                  t: "2021",
                  v: "2021",
                },
                {
                  t: "2022",
                  v: "2022",
                },
                {
                  t: "2023",
                  v: "2023",
                },
                {
                  t: "2024",
                  v: "2024",
                },
              ]}
            />
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "filter_block-2")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "filter_block_header-2")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "filter_block_title-6")}
              id={_utils.cx(
                _styles,
                "w-node-aa4aedbc-6f9b-90f9-17fa-5de7b1ac4942-b1ac48d6"
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
        </_Builtin.Block>
        <_Builtin.Link
          className={_utils.cx(_styles, "filter_clear-all", "helper")}
          id={_utils.cx(
            _styles,
            "w-node-aa4aedbc-6f9b-90f9-17fa-5de7b1ac4956-b1ac48d6"
          )}
          button={false}
          fs-list-element="clear"
          block=""
          options={{
            href: "#",
          }}
        >
          {"Clear All"}
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
