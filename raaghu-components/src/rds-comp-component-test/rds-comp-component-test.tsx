import React, { useState } from "react";
import './rds-comp-component-test.css';
import { RdsButton, RdsIcon, RdsInput, RdsOffcanvas, RdsTextArea } from "../rds-elements";
import RdsCompAlertPopup from "../rds-comp-alert-popup";

interface RdsCompComponentTestProps {}

const RdsCompComponentTest = (props: RdsCompComponentTestProps) => {
    const [isBlurred, setIsBlurred] = useState(false);

    const handleDeleteClick = () => {
        setIsBlurred(true);
    };

    const handleClosePopup = () => {
        setIsBlurred(false);
    };

    return (
        <div>
            <RdsOffcanvas
                canvasTitle="Send Test Email"
                placement="end"
                offcanvasbutton={
                    <RdsButton
                        size="small"
                        type="button"
                        block={false}
                        showLoadingSpinner={false}
                        colorVariant="primary"
                        label="Send Test Email"
                    />
                }
                backDrop={"static"}
                scrolling={false}
                preventEscapeKey={false}
                offId={"Edition"}
            >
                <div className={isBlurred ? "canvas-blur" : ""}>
                    <div className="pt-3">
                        <form>
                            <div className="row">
                                <div className="col-6">
                                    <RdsInput
                                        id=""
                                        inputType="text"
                                        label="Sender email address"
                                        labelPosition="top"
                                        placeholder="Enter sender email address"
                                        required={true}
                                        size="medium"
                                        validatonPattern={
                                            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                        }
                                        validationMsg="Please Enter Valid Email Address."
                                    />
                                </div>
                                <div className="col-6">
                                    <RdsInput
                                        id=""
                                        inputType="text"
                                        label="Target email address"
                                        labelPosition="top"
                                        placeholder="Enter target email address"
                                        required={true}
                                        size="medium"
                                        validatonPattern={
                                            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                        }
                                        validationMsg="Please Enter Valid Email Address."
                                    />
                                </div>
                            </div>
                            <div className="row pt-2">
                                <div className="col-12">
                                    <RdsInput
                                        id=""
                                        inputType="text"
                                        label="Subject"
                                        labelPosition="top"
                                        placeholder="Subject"
                                        required={true}
                                        size="medium"
                                    />
                                </div>
                            </div>
                            <div className="row pt-2">
                                <div className="col-12">
                                    <RdsTextArea
                                        label="Short Description"
                                        placeholder="Enter Description"
                                        rows={3}
                                        dataTestId='email-body'
                                    />
                                </div>
                            </div>
                        </form>
                        <div className="mt-5 d-flex gap-3 ">
                            <RdsButton
                                label="Cancel"
                                databsdismiss="offcanvas"
                                type={"button"}
                                size="small"
                                isOutline={true}
                                colorVariant="primary"
                                class="me-2"
                            ></RdsButton>
                            <RdsButton
                                label="Save"
                                type={"button"}
                                size="small"
                                showLoadingSpinner={true}
                                databsdismiss="offcanvas"
                                colorVariant="primary"
                                class="me-2"
                            ></RdsButton>
                        </div>
                    </div>
                </div>
                <RdsCompAlertPopup
                    alertID={"targetId"}
                    // onClose={handleClosePopup}
                ></RdsCompAlertPopup>
                <a
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#targetId"
                    className="position-relative btn btn-outline-danger btn-sm btn-icon p-1 mt-1 rounded-pill"
                    onClick={handleDeleteClick}
                >
                    <RdsIcon
                        name="delete"
                        height="15px"
                        width="15px"
                        fill={false}
                        stroke={true}
                    />
                </a>
            </RdsOffcanvas>
        </div>
    );
};

export default RdsCompComponentTest;
