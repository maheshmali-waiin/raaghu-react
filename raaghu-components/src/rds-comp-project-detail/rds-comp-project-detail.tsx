import React, { useEffect, useState } from "react";
import {
  RdsInput,
  RdsButton,
  RdsCheckbox,
  RdsAvatar,
  RdsCard,
  RdsIcon,
  RdsDatePicker,
} from "../rds-elements";

export interface Item {
  imageUrl?: string;
}

export interface RdsCompProjectDetailProps {
  item: Item;
}

const RdsCompProjectDetail = (props: RdsCompProjectDetailProps) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showSystem, setShowSystem] = useState(false);
  const [showResourceAllocation, setShowResourceAllocation] = useState(false);
  const [showDetailsTab, setShowDetailsTab] = useState(false);
  const [showSystemTab, setShowSystemTab] = useState(false);
  const [showResourceAllocationTab, setShowResourceAllocationTab,] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowDetails(event.target.checked);
    if (event.target.checked) {
      setShowSystem(false);
      setShowResourceAllocation(false);
    }
  };

  const handleCheckboxChangesystem = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShowSystem(event.target.checked);
    if (event.target.checked) {
      setShowDetails(false);
      setShowResourceAllocation(false);
    }
  };

  const handleCheckboxChangeAllocation = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShowDetails(event.target.checked);
        if (event.target.checked) {
          setShowSystem(false);
          setShowResourceAllocation(false);
          setShowDetails(false);
        }
      };

  function dateFormateConvert(data: any) {
    return data.toISOString();
  }

  function handlerStartDate(data: any) {
    const date = dateFormateConvert(data);
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 border-end ">
          <RdsCheckbox
            classes="py-2"
            label="Project Details"
            state="Checkbox"
            type="Square"
            id="projectDetailsCheckbox"
            checked={showDetails}
            onChange={handleCheckboxChange}
            dataTestId="projectDetails"
          ></RdsCheckbox>
          {showDetails && (
            <div className="Project-details-Info">
              You can initiate a project which will be workspace to track,
              monitor project progress
            </div>
          )}

          <RdsCheckbox
            classes="py-2"
            label="Design System"
            state="Checkbox"
            type="Square"
            checked={showSystem}
            dataTestId="designSystem"
            onChange={handleCheckboxChangesystem}
          ></RdsCheckbox>
          {showSystem && (
            <div className="designSystem">
              Create and customize your design system based on your branding
              guidelines. AI Pundit will help you genarate it.
            </div>
          )}
          <RdsCheckbox
            classes="py-2"
            label="Resource Allocation"
            state="Checkbox"
            type="Square"
            checked={false}
            onChange={handleCheckboxChangeAllocation}
            dataTestId="resourceAllocation"
          ></RdsCheckbox>
          {showResourceAllocation && (
            <div className="designSystem">
              Create and customize your design system based on your branding
              guidelines. AI Pundit will help you genarate it.
            </div>
          )}
        </div>
        <div className="col-md-9 text-center">
          <h2>
            Welcome to Your Next Big Deal!{" "}
            <RdsIcon
              name="location"
              colorVariant="primary"
              height="20px"
              width="20px"
              fill={false}
              stroke={true}
            ></RdsIcon>
          </h2>
          <h6>
            Our platform will help you track every milestone with ease and craft
            a stunning design system tailored to your needs.
          </h6>
          <div className="d-flex justify-content-center">
            {" "}
            <RdsAvatar
              colorVariant="light"
              withProfilePic={true}
              profilePic={props.item.imageUrl}
              size="largest"
            />
          </div>
          {showDetailsTab && (
            <div className="row text-start justify-content-md-center">
              <div className="col-md-5">
                <RdsInput
                  label="Project Name"
                  placeholder="Project Name"
                  inputType="text"
                  name={"title"}
                  dataTestId="title"
                ></RdsInput>
                <RdsInput
                  label="Project Description"
                  placeholder="Project Description"
                  inputType="text"
                  name={"title"}
                  dataTestId="title"
                ></RdsInput>
                <RdsDatePicker
                  onDatePicker={handlerStartDate}
                  DatePickerLabel="Start Date"
                  type="default"
                  isDropdownOpen={false}
                />
              </div>
            </div>
          )}
          {showSystemTab && (
            <div
              className="row text-start justify-content-md-center"
              id="designSystem"
            >
              <div className="col-md-5">Design System</div>
            </div>
          )}
          {showResourceAllocationTab && (
            <div
              className="row text-start justify-content-md-center"
              id="resourceallocation"
            >
              <div className="col-md-5">Resource Allocation</div>
            </div>
          )}
          <div className="row text-start justify-content-md-end">
            <div className="col-md-2">
              <RdsButton
                icon="arrow_single_right"
                class="me-2"
                tooltipTitle={""}
                type={"button"}
                label="Next"
                colorVariant="primary"
                size="small"
                databsdismiss="modal"
                dataTestId="cancel"
              ></RdsButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RdsCompProjectDetail;
